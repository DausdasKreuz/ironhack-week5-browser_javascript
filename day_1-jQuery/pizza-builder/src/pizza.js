$(document).on('ready', function() {
  $('.sauce').toggleClass('sauce-white');
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  $('.btn-sauce').toggleClass('active');
  $('.price ul li:eq(3)').toggle();
  $('.price ul li:last').toggle();

  var price_pep = parseInt($('.price>ul>li:first').html().charAt(1));
  var price_mush = parseInt($('.price>ul>li:eq(1)').html().charAt(1));
  var price_green_p = parseInt($('.price>ul>li:eq(2)').html().charAt(1));
  var price_White_s = 0;//parseInt($('.price>ul>li:eq(3)').html().charAt(1));
  var price_crust_g_f = 0;//parseInt($('.price>ul>li:last').html().charAt(1));
  var default_price = 10;
  var total_price = default_price + price_pep + price_mush + price_green_p;

  $('.price strong').text('$' + total_price);

  $('.btn-pepperonni').on('click', function() {
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass('active');
    $('.price>ul>li:first').toggle();
    if ($('.btn-pepperonni').hasClass('active')) {
      price_pep = 1;
    } else {
      price_pep = 0;
    }

    total_price = default_price + price_pep + price_mush + price_green_p + price_crust_g_f + price_White_s;
    $('.price strong').text('$' + total_price);
  });

  $('.btn-mushrooms').on('click', function() {
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass('active');
    $('.price>ul>li:eq(1)').toggle();
    if ($('.btn-mushrooms').hasClass('active')) {
      price_mush = 1;
    } else {
      price_mush = 0;
    }

    total_price = default_price + price_pep + price_mush + price_green_p + price_crust_g_f + price_White_s;
    $('.price strong').text('$' + total_price);
  });

  $('.btn-green-peppers').on('click', function() {
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass('active');
    $('.price>ul>li:eq(2)').toggle();
    if ($('.btn-green-peppers').hasClass('active')) {
      price_green_p = 1;
    } else {
      price_green_p = 0;
    }

    total_price = default_price + price_pep + price_mush + price_green_p + price_crust_g_f + price_White_s;
    $('.price strong').text('$' + total_price);
  });

  $('.btn-sauce').on('click', function() {
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    $('.price>ul>li:eq(3)').toggle();
    if ($('.btn-sauce').hasClass('active')) {
      price_White_s = 3;
    } else {
      price_White_s = 0;
    }

    total_price = default_price + price_pep + price_mush + price_green_p + price_crust_g_f + price_White_s;
    $('.price strong').text('$' + total_price);
  });

  $('.btn-crust').on('click', function() {
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    $('.price>ul>li:last').toggle();
    if ($('.btn-crust').hasClass('active')) {
      price_crust_g_f = 5;
    } else {
      price_crust_g_f = 0;
    }

    total_price = default_price + price_pep + price_mush + price_green_p + price_crust_g_f + price_White_s;
    $('.price strong').text('$' + total_price);
  });


});
