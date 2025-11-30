import { Widget } from "./Widget.js";

export class FreezeriaWidget extends Widget {
  /**
   * @param {HTMLElement} container - the .freezeria-widget element
   * @param {WidgetPage} page - the WidgetPage instance
   */
  constructor(container, page) {
    super(container, page);
    this.container = container;
    this.page = page;

    this.scoops = 2;
    this.maxScoops = 8;

    // Get elements using data-role attributes
    this.countEl = container.querySelector('[data-role="scoop-count"]');
    this.emojisEl = container.querySelector('[data-role="scoop-emojis"]');
    this.statusEl = container.querySelector('[data-role="scoop-status"]');

    this.addBtn = container.querySelector('[data-role="btn-add"]');
    this.removeBtn = container.querySelector('[data-role="btn-remove"]');
    this.serveBtn = container.querySelector('[data-role="btn-serve"]');

    this.flavors = ["🍦", "🍓", "🍫", "🍪"];

    this.addListeners();
    this.render();
  }

  addListeners() {
    this.addBtn.addEventListener("click", () => {
      if (this.scoops < this.maxScoops) {
        this.scoops = this.scoops + 1;
        this.page.playActionSound?.();
      }
      this.render();
    });

    this.removeBtn.addEventListener("click", () => {
      if (this.scoops > 0) {
        this.scoops = this.scoops - 1;
        this.page.playActionSound?.();
      }
      this.render();
    });

    this.serveBtn.addEventListener("click", () => {
      // Celebrate using the WidgetPage helpers
      this.page.playCorrectSound?.();
      this.page.celebrate?.();

      alert("Order served! Great job, Freezeria pro 😎");
      this.scoops = 2;
      this.render();
    });
  }

  buildScoops(n) {
    let result = "";
    for (let i = 0; i < n; i++) {
      result += this.flavors[i % this.flavors.length];
    }
    return result || "😢";
  }

  render() {
    this.countEl.textContent = this.scoops;

    const safeScoops = Math.max(0, Math.min(this.scoops, this.maxScoops));
    this.emojisEl.textContent = this.buildScoops(safeScoops);

    if (this.scoops === 0) {
      this.statusEl.textContent =
        "No scoops yet! The variable is 0. Time to build the order.";
    } else if (this.scoops > 5) {
      this.statusEl.textContent =
        "Mega sundae! The variable scoops is " + this.scoops + ".";
    } else {
      this.statusEl.textContent =
        "This order has " + this.scoops + " scoop(s) right now.";
    }
  }

  onResize() {}
}
