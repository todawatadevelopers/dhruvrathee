!function(e){var o=parseInt(astra.infinite_total)||"",r=parseInt(astra.infinite_count)||"",n=astra.ajax_url||"",t=astra.infinite_nonce||"",a=astra.pagination||"",s=astra.masonryEnabled||!1,d=!0,i=astra.infinite_scroll_event||"",l=jQuery(".ast-pagination-infinite .ast-loader");if(""!=typeof a&&"infinite"==a){if("undefined"!=typeof wp&&void 0!==wp.customize)return;if(""!=typeof i)switch(i){case"click":e(".ast-load-more").click(function(a){if(a.preventDefault(),"undefined"!=r&&""!=r&&"undefined"!=o&&""!=o){if(o<r)return!1;c(r),r++}});break;case"scroll":if(e(".ast-load-more").hide(),0<e("#main").find("article:last").length){var f=jQuery(window).outerHeight()/1.25;e(window).scroll(function(){if(e(window).scrollTop()+f>=e("#main").find("article:last").offset().top){if(o<r)return!1;1==d&&(c(r),r++,d=!1)}})}}function c(a){e(".ast-load-more").removeClass(".active").hide(),l.show();var i={action:"astra_pagination_infinite",page_no:a,nonce:t,query_vars:astra.query_vars,astra_infinite:"astra_pagination_ajax"};e.post(n,i,function(a){e(window).trigger("astAddedAjaxPosts");var i=e(a);l.hide(),e(".ast-load-more").addClass("active").show(),e("#main > .ast-row").append(i);var n=astra.grid_layout||"3";1==s&&1<n&&(e("#main > .ast-row").masonry("appended",i,!0),e("#main > .ast-row").imagesLoaded(function(){e("#main > .ast-row").masonry("reload")}),e("#main > .ast-row").trigger("masonryItemAdded"));var t=astra.no_more_post_message||"";o<r&&e(".ast-pagination-infinite").html('<span class="ast-load-more no-more active" style="display: inline-block;">'+t+"</span>"),d=!0})}}}(jQuery);