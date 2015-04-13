jQuery(document).ready(function(){

    // оформление select
    // $("select").select2();

    // сетка для товаров
    if (screen.width > 640) {
      var options = {
        container: $('.card_list'),
        offset: 20,
        autoResize: true,
        outerOffset: 0,
        itemWidth: 190,
        flexibleWidth: '80%'
      };
    }
    if (screen.width < 640) {
      var options = {
        container: $('.card_list'),
        offset: 15,
        autoResize: true,
        outerOffset: 0,
        itemWidth: 120,
        flexibleWidth: '80%'
      };
    }
    var handler = $('.card_item');
    handler.wookmark(options);





    // поповеры
    // var settings = {
    //         trigger:'click',
    //         title:false,
    //         multi:false,
    //         closeable:false,
    //         style:''
    // };
    // function initPopover(){
    //     $('a.dropdown_link').each(function () {
    //       var $this = $(this);
    //       $this.webuiPopover($.extend({}, settings, {
    //         content: $this.next('.dropdown_block').html()
    //       }));
    //     })
    // }
    // initPopover();


    // отступ контента от шапки
    // var headerHeight = $('header').outerHeight(),
    //     navHeight = $('nav.fixed').outerHeight(),
    //     topHeight = headerHeight + navHeight+30;
    // if (screen.width < 640) {
    //   $('body').css('padding-top', headerHeight);
    // };
    // if (screen.width > 640) {
    //   $('body').css('padding-top', topHeight);
    // };

    // карта
    // var infoHeight = $('.product_id_info').outerHeight(),
    //     mapHeight = $('.product_id_map').outerHeight();
    // $('.product_id_map').css('top',infoHeight+20)

    // $('.expand_but').click(
    //   function(){
    //   $('.product_id_map').addClass('expanded').css('height', infoHeight+mapHeight+20)}
    // );

    // левое меню для мобил
    // $(".show_header_menu").click(function() {
    //   var toggle_el = $('aside');
    //   $(toggle_el).toggleClass("open_aside");
    // });

    // if (screen.width < 640) {
    //   var heightSubmenu = $('aside').outerHeight()-$('.back_menu').outerHeight()
    //   $('.menu_left_submenu_content').css('height', heightSubmenu)
    // };



});