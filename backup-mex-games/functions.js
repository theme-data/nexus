$(document).ready(function(){


    var tam = $(window).width();
    
  
    
    if (tam >= 768 ){
    
      $('#cabecalho').after('<div id="menuCat"><div class="conteiner"><div class="row-fluid"></div></div></div>');
      $('#menuCat .row-fluid').append($('#cabecalho .menu.superior'));
  
      if ($('.promobar').is(':visible')) {
        $('#cabecalho').addClass('promofixed');
        $('#menuCat').addClass('promofixed');
        $('body').addClass('promofixed');
    }
  
  
    $('.promoclose').click(function(){
      $('.promobar').addClass('hide');
      $('#cabecalho').removeClass('promofixed');
      $('#menuCat').removeClass('promofixed');
      $('body').removeClass('promofixed');
  });
  
      if($('#cabecalho.logo-centro').length) {
    
        $('#cabecalho.logo-centro>.conteiner>.row-fluid>.conteudo-topo:first-child').prepend(
            '<div class="cat">'+
                '<span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
            '</div>'
        );
    
        $('.cat').on('click', function(){
            $('#menuCat').toggleClass('active');
            $('.category').toggleClass('active');
        });
    
        $('#cabecalho.logo-centro .row-fluid .conteudo-topo:last-child .inferior .span12').prepend(
          '<div class="login-top">'+
            '<span class="login-txt"><i class="fa fa-user cor-principal"></i>Entrar</span>'+
            '<ul class="drop-login">'+
              '<div class="append-login">'+
                '<li><a href="../conta/pedido/listar">Meus Pedidos</a></li>'+
                '<li><a href="../conta/index">Minha Conta</a></li>'+
                '<li class="fundo-principal"><a href="../conta/login">Entre ou Cadastre-se</a></li>'+
              '</div>'+
            '</ul>'+
          '</div>'
        );
    
        $('#cabecalho.logo-centro .row-fluid .conteudo-topo:last-child .inferior .span12').prepend(
          '<div class="atd-top">'+
            '<span class="atd-txt"><i class="fa fa-question-circle cor-principal"></i>Suporte</span>'+
            '<ul class="drop-atd">'+
              '<li class="acompanhe-pedido fundo-principal"><a href="http://www2.correios.com.br/sistemas/rastreamento/" target="_blank"><i class="fa fa-truck"></i>Acompanhe seu pedido</a></li>'+
            '</ul>'+
          '</div>'
        );
    
        $('.carrinho>a>i').addClass('cor-principal');
        $('.atd-top ul.drop-atd').prepend($('.barra-inicial .canais-contato.span9>ul>li'));
        $('#cabecalho.logo-centro .row-fluid .conteudo-topo').addClass('span4').removeClass('span3');
        $('#cabecalho.logo-centro .row-fluid > .span6').addClass('span4').removeClass('span6');
        $('#cabecalho.logo-centro .row-fluid .conteudo-topo:first-child .inferior .span12 .busca').appendTo($('.drop-search'));
    
      } else {
    
      $('.conteudo-topo').before(
          '<div class="cat">'+
              '<span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
          '</div>'
      );
    
      $('.cat').on('click', function(){
          $('#menuCat').toggleClass('active');
          $('.category').toggleClass('active');
      });
    
      $('.conteudo-topo .inferior .span8.busca-mobile').after(
        '<div class="login-top">'+
          '<span class="login-txt"><i class="fa fa-user cor-principal"></i>Entrar</span>'+
          '<ul class="drop-login">'+
            '<div class="append-login">'+
              '<li><a href="../conta/pedido/listar">Meus Pedidos</a></li>'+
              '<li><a href="../conta/index">Minha Conta</a></li>'+
              '<li class="fundo-principal"><a href="../conta/login">Entre ou Cadastre-se</a></li>'+
            '</div>'+
          '</ul>'+
        '</div>'
      );
    
      $('.conteudo-topo .inferior .span8.busca-mobile').after(
        '<div class="atd-top">'+
          '<span class="atd-txt"><i class="fa fa-question-circle cor-principal"></i>Suporte</span>'+
          '<ul class="drop-atd">'+
            '<li class="acompanhe-pedido fundo-principal"><a href="http://www2.correios.com.br/sistemas/rastreamento/" target="_blank"><i class="fa fa-truck"></i>Acompanhe seu pedido</a></li>'+
          '</ul>'+
        '</div>'
      );
    
      $('.carrinho>a>i').addClass('cor-principal');
      $('.atd-top ul.drop-atd').prepend($('.barra-inicial .canais-contato.span9>ul>li'));
      
      }
      
    
      if( $('.drop-atd .tel-whatsapp>span').length ){
          $('.drop-atd .tel-whatsapp>span').each(function () {
              var $this = $(this).text();
              var $result = $(this).text().replace("Whatsapp:", "");
              $(this).text($result);
          });
      }
    
      if( $('.drop-atd li:nth-child(2)>span').length ){
          $('.drop-atd li:nth-child(2)>span').each(function () {
              var $this = $(this).text();
              var $result = $(this).text().replace("Telefone:", "");
              $(this).text($result);
          });
      }
    
      if( $('.drop-atd .tel-skype>a').length ){
          $('.drop-atd .tel-skype>a').each(function () {
              var $this = $(this).text();
              var $result = $(this).text().replace("Skype:", "");
              $(this).text($result);
          });
      }
    
      $('#listagemProdutos').after($('.mini-banner'));
      $('.mini-banner .modulo.span4').addClass('span6').removeClass('span4');
      $('.banner .newsletter .titulo').addClass('cor-principal').removeClass('cor-secundaria');
      
  
      if($('.marcas').length) {
    
        $('.slide-maisvendido').before(
          '<div id="marcas">'+
          '<div class="conteiner">'+
            '<div class="row-fluid">'+
            '<div class="titulo-categoria borda-principal cor-principal">'+
              '<strong>Navegue por marcas</strong>'+
            '</div>'+
            '</div>'+
          '</div>'+
        '</div>');
    
        $('#marcas .row-fluid').append($('.marcas'));
    
      } else {
    
      }
    
      $('body').append('<a href="#" onclick="topFunction()" class="back-top borda-principal"><i class="fa fa-chevron-up"></i><span>Voltar<br/>ao topo</span></a>');
    
      window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            $(".back-top").addClass('show');
        } else {
            $(".back-top").removeClass('show');
        }
    }
    
    function topFunction() {
        $('body').animate({scrollTop: '0'}, 200);
    }
    
    $('.carrinho>a span').html('Carrinho');
    /*$('#rodape').before(
      '<div id="sobreLoja">'+
      '<div class="conteiner">'+
        '<div class="row-fluid">'+
          '<div class="sobreLogo span3"></div>'+
          '<div class="sobreLoja span6"></div>'+
          '<div class="sobreFb span3"></div>'+
        '</div>'+
      '</div>'+
    '</div>');
    
    $('#cabecalho .logo').clone().appendTo($('.sobreLogo'));
    $('.sobreLoja').append($('#rodape .sobre-loja-rodape p'));
    $('.sobreFb').append($('#rodape .caixa-facebook'));
    $('.sobreFb').append($('#rodape .institucional .span12.visible-phone'));*/
    
    $('.pagina-categoria .secao-banners').before($('.breadcrumbs'));
    $('.pagina-categoria .breadcrumbs').append($('.conteudo h1'));
    
    if ($('.conteudo-topo .superior .span8 .btn-group:first-child').is(':visible')) {
        $('.login-txt').html('<i class="fa fa-user cor-principal"></i>Olá!');
    }
    
    if ($('.conteudo-topo .superior .span8 .btn-group:first-child').is(':visible')) {
        $('.login-top ul.drop-login').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child .dropdown-menu'));
    }
    
    if ($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child').is(':visible')) {
        $('.login-top .login-txt').html('<i class="fa fa-user cor-principal"></i>Olá!');
    }
    
    if ($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child').is(':visible')) {
        $('.login-top ul.drop-login').replaceWith($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child .dropdown-menu'));
    }
    
    //Header fixo
    $(window).scroll(function(){
        if ($(window).scrollTop() > 150){
            $('#cabecalho').addClass('scroll');
            $('#menuCat').addClass('scroll');
        } else {
            $('#cabecalho').removeClass('scroll');
            $('#menuCat').removeClass('scroll');
        }
    });
    
    }
    
    //inputs login
    $('.cadastro-logar .form-horizontal .controls #id_email').attr("placeholder", "E-mail");
    $('.cadastro-logar .form-horizontal .controls #id_senha').attr("placeholder", "Senha");
    $('.cadastro-logar>.span6:nth-child(2) #id_email').attr("placeholder", "Digite o email que deseja cadastrar:");
    
    $('.pagina-produto').append(
      '<section id="meuModal" class="modal hide in" tabindex="-1" role="dialog" aria-labelledby="meuModalLabel" aria-hidden="false">'+
      '<header class="modal-header">'+
      '<button class="close" data-dismiss="modal" aria-hidden="true"></button>'+
      '<h3 id="meuModalLabel">FORMAS DE PAGAMENTO</h3>'+
      '</header>'+
      '<section class="modal-body">'+
      '</section>'+
      '</section>'
    );
    
    if ($('.atributos div ul li').hasClass('active')) {
        $('.pagina-produto #meuModal .modal-body').append($('.parcelas-produto'));
    }
    
    $('.pagina-produto .produto .span6>.principal > .cep').before('<a class="span4" id="btn-forma-pagamento" data-toggle="modal" data-target="#meuModal"><i class="fa fa-credit-card-alt"></i> Formas de pagamento</a>');
    $('.pagina-produto #meuModal .modal-body').append($('.parcelas-produto'));
    $('.produto #btn-forma-pagamento').after($('.produto-compartilhar .lista-favoritos'));
    $('#rodape > div:last-child .row-fluid > div:last-child a').before('<span class="Pixel"></span><a href="http://pixelset.com.br/" class="pixel-set" target="_blank"><img src="https://cdn.awsli.com.br/1684/1684660/arquivos/LogoPixel.png" alt="Pixel Set"></a>');
    $('#rodape > div:last-child .row-fluid > div:first-child').removeClass('span9 span6 atendimento').addClass('assinatura').attr('style', '');
    $('#rodape > div:last-child .row-fluid > div:last-child').attr('style', '').addClass('assinatura-rodape');
    $('#rodape .assinatura').prepend($('#rodape .institucional .lista-redes'));
    
    if( $('.listagem-linha .listagem-item .bandeiras-produto .bandeira-promocao').length ){
        $('.listagem-linha .listagem-item .bandeiras-produto .bandeira-promocao').each(function () {
            var $this = $(this).text();
            var $result = $(this).text().replace("% Desconto", "");
            $(this).text($result);
        });
    }
    
    if (tam <= 767 ){
        
    $('#listagemProdutos').after($('.mini-banner'));      
    
    $('#cabecalho .conteiner .logo').before(
      '<div class="cat cor-principal">'+
          '<span class="category"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
      '</div>'
    );
    $('#cabecalho .menu.superior .nivel-um').prepend(
      '<div class="cab-nav">'+
        '<a class="close-nav-full"></a>'+
        '<div class="close-nav">'+
            '<span class="category cor-principal"><i><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div><div class="hamb-1 fundo-principal"></div></i></span>'+
        '</div>'+
        '<div class="acc-nav">'+
        '</div>'+
      '</div>'
    );
    
    if ($('#cabecalho .atalhos-mobile .icon-signout').is(':visible')) {
        $('#cabecalho .atalhos-mobile .icon-signout').appendTo($('#cabecalho .acc-nav'));
    }
    
    $('.menu.superior .nivel-um .cab-nav .acc-nav').append($('#cabecalho a.icon-user'));
    $('#cabecalho .cab-nav a').addClass('cor-principal');
    
    $('.cat').click(
      function() {
          $('.menu.superior .nivel-um').toggleClass('active');
      }
    );
    
    $('#cabecalho .close-nav').click(
      function() {
          $('.menu.superior .nivel-um').toggleClass('active');
      }
    );
    
    $('.menu.superior .nivel-um .cab-nav .close-nav-full').click(
      function() {
          $('.menu.superior .nivel-um').toggleClass('active');
      }
    );
    
    $('.produto .conteiner-imagem').before($('.produto .span6> .principal .info-principal-produto'));
    $('.atalhos-mobile li.fundo-principal').addClass('cor-principal borda-principal');
    $('.atalhos-mobile li.fundo-principal a').addClass('cor-principal');
    $('#cabecalho .conteiner .logo').after($('.atalhos-mobile li.fundo-principal'));
    $('#cabecalho>.conteiner>.row-fluid>.span3 > li.fundo-principal > a').append($('.conteudo-topo .inferior .carrinho > a > strong.qtd-carrinho'));
    
    }
    
    });
    
      setTimeout(function(){
         let isLogged = ($('.btn-group .menu-user-name').text() !== "")? true : false;
        
        if(isLogged == true){
             $('.login-conta a').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child'));
             $('#cabecalho .atalhos-mobile .icon-signout').appendTo($('#cabecalho .acc-nav'));
             $('.login-top ul.drop-login').replaceWith($('.conteudo-topo .superior .span8 .btn-group:first-child .dropdown-menu'));
             $('.login-top .login-txt').html('<i class="fa fa-user cor-principal"></i>Olá!');
             $('.login-top ul.drop-login').replaceWith($('.conteudo-topo:first-child>.superior>.span12>.btn-group:first-child .dropdown-menu'));
        }
    },500)