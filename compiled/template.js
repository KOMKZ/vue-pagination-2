"use strict";

module.exports = function () {
  return function (h) {

    var items = [];

    this.pages.map(function (page) {
      items.push(h(
        "li",
        { "class": "VuePagination__pagination-item page-item" },
        [h(
          "a",
          { "class": "page-link pagination-link " + this.activeClass(page), attrs: { role: "button"
            },
            on: {
              "click": this.setPage.bind(this, page)
            }
          },
          [page]
        )]
      ));
    }.bind(this));

    return h(
      "div",
      { "class": "pagination VuePagination" },
      [h(
        "ul",
        {
          directives: [{
            name: "show",
            value: this.totalPages > 1
          }],

          "class": "pagination-list VuePagination__pagination" },
        [h(
          "li",
          { "class": "VuePagination__pagination-item page-item VuePagination__pagination-item-prev-chunk " + this.allowedChunkClass(-1) },
          [h(
            "a",
            { "class": "page-link pagination-previous", attrs: { href: "javascript:void(0);"
              },
              on: {
                "click": this.setChunk.bind(this, -1)
              }
            },
            ["<<"]
          )]
        ), h(
          "li",
          { "class": "VuePagination__pagination-item page-item VuePagination__pagination-item-prev-page " + this.allowedPageClass(this.page - 1) },
          [h(
            "a",
            { "class": "page-link pagination-previous", attrs: { href: "javascript:void(0);"
              },
              on: {
                "click": this.prev.bind(this)
              }
            },
            ["<"]
          )]
        ), items, h(
          "li",
          { "class": "VuePagination__pagination-item page-item VuePagination__pagination-item-next-page " + this.allowedPageClass(this.page + 1) },
          [h(
            "a",
            { "class": "page-link pagination-link", attrs: { href: "javascript:void(0);"
              },
              on: {
                "click": this.next.bind(this)
              }
            },
            [">"]
          )]
        ), h(
          "li",
          { "class": "VuePagination__pagination-item page-item VuePagination__pagination-item-next-chunk " + this.allowedChunkClass(1) },
          [h(
            "a",
            { "class": "page-link pagination-next", attrs: { href: "javascript:void(0);"
              },
              on: {
                "click": this.setChunk.bind(this, 1)
              }
            },
            [">>"]
          )]
        )]
      ), h(
        "p",
        {
          directives: [{
            name: "show",
            value: parseInt(this.records)
          }],

          "class": "VuePagination__count" },
        [this.count]
      )]
    );
  };
};