"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    jQuery?: any;
    AOS?: any;
  }
}

/**
 * Re-runs the template's behaviour on every route change:
 * AOS scroll animations, the Owl portfolio carousel, the stat count-up,
 * the sticky-header colour swap and the scroll-to-top button.
 */
export default function SiteScripts() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    // --- Header sticky class + scroll-to-top button (vanilla, no deps) ---
    const header = document.querySelector("header");
    const topBtn = document.getElementById("scrollToTopBtn");

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (header) header.classList.toggle("fixed-header", y >= 60);
      if (topBtn) topBtn.style.display = y > 200 ? "flex" : "none";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onTopClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    topBtn?.addEventListener("click", onTopClick);

    // --- jQuery / AOS dependent init (poll until the bundle has loaded) ---
    const run = () => {
      if (cancelled) return;
      const $ = window.jQuery;
      if (!$ || !window.AOS) {
        window.setTimeout(run, 80);
        return;
      }

      window.AOS.init({ once: true, duration: 800 });
      window.AOS.refreshHard();
      // Safety net against the "content stuck invisible" case when a route
      // loads scrolled past the top: reveal anything already on screen.
      window.setTimeout(() => {
        window.dispatchEvent(new Event("scroll"));
        window.AOS.refresh();
      }, 150);

      // Owl portfolio carousel
      const $owl = $(".featured-projects-slider .owl-carousel");
      $owl.each(function (this: any) {
        const $el = $(this);
        if ($el.hasClass("owl-loaded")) $el.trigger("destroy.owl.carousel");
        $el.owlCarousel({
          center: true,
          loop: true,
          margin: 30,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 }, 1200: { items: 4 } },
        });
      });

      // Custom prev/next buttons for any .owl-carousel: delegated + namespaced
      // so re-running this effect on route change never double-binds.
      $(document)
        .off("click.owlNav")
        .on("click.owlNav", ".owl-nav-prev, .owl-nav-next", function (this: any) {
          const $btn = $(this);
          const $carousel = $btn.closest(".featured-projects-slider").find(".owl-carousel");
          $carousel.trigger($btn.hasClass("owl-nav-prev") ? "prev.owl.carousel" : "next.owl.carousel");
        });

      // Stat count-up
      $(".count").each(function (this: any) {
        const $t = $(this);
        const target = parseFloat($t.attr("data-target") || $t.text()) || 0;
        $t.prop("Counter", 0).animate(
          { Counter: target },
          {
            duration: 1200,
            easing: "swing",
            step(now: number) {
              $t.text(Math.ceil(now));
            },
          }
        );
      });
    };
    run();

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", onScroll);
      topBtn?.removeEventListener("click", onTopClick);
    };
  }, [pathname]);

  return null;
}
