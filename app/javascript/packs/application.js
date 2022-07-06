// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

$(function () {
  $('.js-text_field').on('keyup', function () {
    let title = $.trim($(this).val());

    $.ajax({
      type: 'GET',
      url: '/messages/searches',
      data: { title: title },
      dataType: 'json'
    })
      .done(function (data) {
        $('.js-messages li').remove();

        // 以下のコードを追加する
        $(data).each(function (i, message) {
          $('.js-messages').append(
            `<li class="message"><a href="/messages/${message.id}">${message.title}</a></li>`
          );
        });
      })
  });
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
