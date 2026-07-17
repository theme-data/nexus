$(document).ready(function() {

// alterações gerais
$('.pagina-inicial .secao-banners .conteiner').append($('.mini-banner'));
$('.selos li:first-child img').attr('src','https://cdn.awsli.com.br/2830/2830294/arquivos/site-protegido.svg');
$('#rodape>div:last-child .conteiner .row-fluid div:not(.span12)').before(`<div style="" class="assinatura-rodape"><a href="https://www.pixelset.com.br/" class="symm" target="_blank"><img src="https://cdn.awsli.com.br/2727/2727537/arquivos/devby-pixel.svg" alt="Symm.agency" width="120px" height="35px"></a></div>`)
$('#cabecalho .conteiner .row-fluid .logo a img').clone().prependTo($('#rodape>div:last-child .conteiner .row-fluid > .span9.span12'));
$('.assinatura-rodape').append($('#rodape>div:last-child .conteiner .row-fluid div:not(.span12, .assinatura-rodape)'));
$('.assinatura-rodape div a img').attr('src','https://cdn.awsli.com.br/2830/2830294/arquivos/li-logo-rp.svg');
$('.conteudo-topo .inferior .busca-mobile input').attr('placeholder','Buscar...');
$('.pagina-login .cadastro-logar .form-horizontal .controls #id_email').attr('placeholder','E-mail');
$('.pagina-login .cadastro-logar .form-horizontal .controls #id_senha').attr('placeholder','Senha');
$('.pagina-login .caixa-sombreada fieldset > div:not(.control-group) #id_email').attr('placeholder','Digite o email que deseja cadastrar');
$('.banner.cheio li').each(function () {
    const $li = $(this);
    const $img = $li.find('img[usemap]');
    const useMapName = $img.attr('usemap')?.replace('#', '');

    if (useMapName) {
    const $map = $li.find(`map[name="${useMapName}"]`);
    const $a = $li.find('a').first();

    if ($map.length && $a.length) {
        $a.append($map.children());
        $map.remove();
    }
    }
});
$('#barraNewsletter .componente .titulo').append($('#barraNewsletter .componente .texto-newsletter'));
$('#barraNewsletter .componente .botao').addClass('principal');
$('.banner.cheio .flex-direction-nav li.flex-nav-prev').after($('.banner.cheio .flex-control-nav'));
$('#rodape .institucional > .conteiner > .row-fluid > .span9 > .row-fluid').append(`
    <div class="append-support">
    <div class="info-section">
    <span class="titulo">Atendimento</span>
    <p>
        <div><img alt"Horário de atendimento" src="https://cdn.awsli.com.br/2830/2830294/arquivos/footer-clock.svg"/><div><strong>Horário de atendimento</strong> <span>
        Segunda a sexta: 11:30 ás 22:00h <br>
        Sabado: 10:00h ás 18:00h <br>
        Domingo e Feriado: Fechado
</span></div></div>
        <div>
            <strong>Envie uma mensagem:</strong>
            <div>
                <img alt="Envie uma mensagem" src="https://cdn.awsli.com.br/2830/2830294/arquivos/footer-envelope.svg"/>
                <div>
                    <span>
                        <a href="mailto:contato@mexgames.com.br">contato@mexgames.com.br</a>
                        <span>Mex Games</span>
                    </span>
                </div>
            </div>
        </div>
        <div>
            <img alt="WhatsApp" src="https://cdn.awsli.com.br/2830/2830294/arquivos/footer-whatsapp.svg"/>
            <div>
                <strong>Estamos no WhatsApp:</strong>
                <span>
                    <a href="https://wa.me/556199627041?text=Ol%C3%A1!%20Preciso%20de%20suporte.%20Pode%20me%20ajudar%3F" target="_blank" rel="noopener noreferrer">(61) 9962-7041</a>
                </span>
            </div>
        </div>
    </p>
    </div>
    
    <div class="info-section">
    <span class="titulo">Envio</span>
    <p>
        Todos os nossos jogos são enviados por e-mail ou WhatsApp. Os jogos são originais e completos.
    </p>
    </div>
    </div>
`);
$('.barra-inicial .lista-redes').removeClass('span3').appendTo($('.barra-inicial .canais-contato ul'));
$('.barra-inicial .conteiner > .row-fluid').prepend(`
    <div class="append-benefits">
       <div>
           <i></i><span>Jogos originais</span>
       </div>
       <div>
           <i></i><span>Receba em até 30 minutos</span>
       </div>
       <div>
           <i></i><span>Segurança garantida</span>
       </div>
     </div>
`);

$(function () {
    var $container = $('#listagemProdutos');
  
    var $titulo = $container.find('.vitrine-mas-vendido');
    var $ul = $titulo.next('ul');
  
    if (!$titulo.length || !$ul.length) return;
  
    // clona
    var $cloneTitulo = $titulo.clone(true, true)
      .addClass('mais-vendidos-destaque');
  
    var $cloneUl = $ul.clone(true, true)
      .addClass('mais-vendidos-destaque');
  
    // insere no final
    $container
      .find('ul.produtos-carrossel')
      .last()
      .after($cloneTitulo, $cloneUl);
  });

  $('body').append(`<a href="https://wa.me/556199627041?text=Ol%C3%A1!%20Preciso%20de%20suporte.%20Pode%20me%20ajudar%3F" target="_blank" class="whatsapp-float-btn" title="Fale conosco no WhatsApp">`);
  


$('.pagina-inicial #barraNewsletter').before(`
    <div class="about-banner">
      <div class="about-banner-content">
        <div class="about-banner-icon-title">
          <!--<img src="https://cdn.awsli.com.br/2830/2830294/arquivos/controller.png" alt="Mascote" class="about-banner-icon" />-->
          <div class="about-banner-title">
            <h2>Boas-vindas à Mex Games.</h2>
          </div>
        </div>
        <div class="about-banner-description">
          <p>A MEX GAMES é uma empresa especializada na venda de jogos eletrônicos, oferecendo aos clientes produtos originais e de alta qualidade. Nosso compromisso é proporcionar a melhor experiência de compra online, garantindo segurança, rapidez na entrega e suporte personalizado.</p>
        </div>
      </div>
      <div class="about-banner-image">
        <img src="https://cdn.awsli.com.br/2727/2727537/arquivos/mex-char.png" alt="Personagem Samurai" />
      </div>
    </div>
    `);

$('.about-banner-btn').on('click', function() {
    var $btn = $(this);
    var $desc = $btn.closest('.about-banner-content').find('.about-banner-description');
    if ($desc.hasClass('open')) {
        $desc.removeClass('open');
        $btn.html('Ver mais <span class="about-banner-btn-arrow">&#9660;</span>');
    } else {
        $desc.addClass('open');
        $btn.html('Ver menos <span class="about-banner-btn-arrow">&#9650;</span>');
    }
});

var $slider = $('#listagemProdutos ul .flex-viewport > ul');

$slider.removeAttr('style');
$slider.find('li').removeAttr('style');

$slider.slick({
    dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
                dots: true
            }
            }
        ]
});

// TAGS DE PRÉ-VENDA E CUPOM POR PRODUTO
var tagsProdutos = [
    {
        id: '359139343', // ID do produto
        tags: [
            { tipo: 'pre-venda', texto: 'Pré-venda' },
            { tipo: 'cupom', texto: 'CUPOM: 10OFF' }
        ]
    },
    // Adicione mais objetos conforme necessário
];

tagsProdutos.forEach(function(produto) {
    var $item = $('.listagem-linha .prod-id-' + produto.id);
    if ($item.length) {
        var $bandeiras = $item.find('.bandeiras-produto');
        if ($bandeiras.length) {
            produto.tags.forEach(function(tag) {
                // Define o HTML correto para cada tipo de tag
                var tagHtml = '';
                if (tag.tipo === 'pre-venda') {
                    tagHtml = '<span class="bandeira-prevenda">' + tag.texto + '</span>';
                } else if (tag.tipo === 'cupom') {
                    tagHtml = '<span class="bandeira-cupom">' + tag.texto + '</span>';
                }
                $bandeiras.append(tagHtml);
            });
        }
    }

    // Adiciona as badges na página de produto
    var $nomeProduto = $('.produto-' + produto.id + ' .produto div.principal .nome-produto');
    if ($nomeProduto.length) {
        // Gera o HTML das tags dentro de uma div com a classe "append-flags"
        var tagsHtml = '';
        produto.tags.forEach(function(tag) {
            if (tag.tipo === 'pre-venda') {
                tagsHtml += '<span class="bandeira-prevenda">' + tag.texto + '</span>';
            } else if (tag.tipo === 'cupom') {
                tagsHtml += '<span class="bandeira-cupom">' + tag.texto + '</span>';
            }
        });
        // Envolve as tags na div "append-flags"
        var flagsDiv = '<div class="append-flags">' + tagsHtml + '</div>';
        // Adiciona antes do .nome-produto
        $nomeProduto.before(flagsDiv);
    }
});

// Move os <a> em ordem de .banner.tarja conforme numerosBanner

// Defina os arrays conforme necessário
var numerosBanner = [1, 2]; // Exemplo: [1, 2] para o primeiro e segundo banner, etc.
var idsVitrine = ['22673203', '22673229']; // Exemplo: ['23507360', '23507361']

// Seleciona todos os <a> banners na ordem dentro do .banner.tarja
var $bannersTarja = $('.banner.tarja > a');

// Função para mover vários banners (<a>) para várias vitrines por ordem
function moverBannersParaVitrinesPorOrdem(numerosBanner, idsVitrine) {
  for (var i = 0; i < numerosBanner.length; i++) {
    var numeroBanner = numerosBanner[i];
    var idVitrine = idsVitrine[i];
    // Seleciona o <a> pelo índice (usando 1-based do array de configuração)
    var $bannerSelecionado = $bannersTarja.eq(numeroBanner - 1);
    // Adiciona a classe tarja-moved
    $bannerSelecionado.addClass('tarja-moved');
    // Monta o seletor da vitrine pelo ID
    var seletorVitrine = '.vitrine-' + idVitrine;
    // Move o <a> antes da vitrine desejada, se ambos existirem
    if ($bannerSelecionado.length && $(seletorVitrine).length) {
      $(seletorVitrine).before($bannerSelecionado);
    }
  }
}

// Chame a função
moverBannersParaVitrinesPorOrdem(numerosBanner, idsVitrine);


// Defina as variáveis para personalizar o banner
var bannerTitulo = "Marvel's Spider-Man 2";
var bannerDescricao = "Mascare-se para mais heroísmos emocionantes de arremessos de teias enquanto Marvel’s Spider-Man 2 chega ao PC.";
var bannerPreco = "R$ 299,99";
var bannerDesconto = "-10% OFF";
var bannerTextoBotao = "Comprar agora";
var bannerLinkBotao = "#";
var bannerVideoUrl = "https://www.youtube.com/embed/ENf1yjCMpZo";
var videoId = "ENf1yjCMpZo";
var bannerVideoWidth = 360;
var bannerVideoHeight = 202;
var bannerImgUrl = "https://cdn.awsli.com.br/2727/2727537/arquivos/mex-fundo.png"; // URL da imagem do banner

// Opções para ativar/desativar seções
var mostrarGamePromo = false;       // true para mostrar, false para ocultar a seção "game-promo"
var mostrarVideoFundo = false;      // true para mostrar, false para ocultar a seção "video-fundo"
var mostrarImagemBanner = true;     // true para mostrar, false para ocultar a imagem do banner
var mostrarBannerFundo = true;      // true para mostrar o banner de fundo, false para ocultar totalmente o .banner-fundo

var htmlBanner = '';
if (mostrarBannerFundo) {
  // Monta o HTML do banner como antes
  htmlBanner = `
    <div class="banner-fundo">
      ${mostrarImagemBanner ? `<div class="banner-img"><img src="${bannerImgUrl}" alt="${bannerTitulo}"></div>` : ''}
      ${mostrarGamePromo ? `
        <div class="game-promo">
            <div class="game-title">${bannerTitulo}</div>
            <div class="game-description">
                ${bannerDescricao}
            </div>
            <div class="game-price-section">
                <span class="game-price">${bannerPreco}</span>
                <span class="discount-tag">${bannerDesconto}</span>
            </div>
            <a href="${bannerLinkBotao}" class="buy-now-btn">
                ${bannerTextoBotao}
            </a>
        </div>
      ` : ''}
      ${mostrarVideoFundo ? `
        <div class="video-fundo">
          <iframe width="${bannerVideoWidth}" height="${bannerVideoHeight}" src="${bannerVideoUrl}?rel=0?version=3&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=${videoId}" frameborder="0" allowfullscreen></iframe>
        </div>
      ` : ''}
    </div>
  `;
  // Insere o HTML antes do seletor .secao-banners
  $('.pagina-inicial .secao-banners').before(htmlBanner);
} else {
  // Se o banner de fundo não deve aparecer, adiciona a classe no-bg à .secao-banners
  $('.pagina-inicial .secao-banners').addClass('no-bg');
}

// Variáveis para personalizar as informações da tarja de benefícios
var benefit1Icon = "https://cdn.awsli.com.br/2830/2830294/arquivos/tarja-icon-mailcheck_one.svg";
var benefit1IconAlt = "Ícone de e-mail";
var benefit1Title = "Receba por e-mail";
var benefit1Description = "Seu código digital vai direto para o seu e-mail";

var benefit2Icon = "https://cdn.awsli.com.br/2830/2830294/arquivos/tarja-icon-send_one.svg";
var benefit2IconAlt = "Ícone de envio rápido";
var benefit2Title = "Entrega rápida e segura";
var benefit2Description = "Enviado logo após a confirmação do pagamento";

var benefit3Icon = "https://cdn.awsli.com.br/2830/2830294/arquivos/tarja-icon-star_one.svg";
var benefit3IconAlt = "Ícone de avaliação";
var benefit3Title = "Avaliação 4.9 dos clientes";
var benefit3Description = "Quem compra, recomenda.";

// Monta o HTML usando as variáveis acima
var htmlBenefits = `
  <div class="benefits-row">
    <div class="benefit-item">
      <img src="${benefit1Icon}" alt="${benefit1IconAlt}">
      <div>
        <span>${benefit1Title}</span>
        <p><strong>${benefit1Description}</strong></p>
      </div>
    </div>
    <div class="benefit-item">
      <img src="${benefit2Icon}" alt="${benefit2IconAlt}">
      <div>
        <span>${benefit2Title}</span>
        <p><strong>${benefit2Description}</strong></p>
      </div>
    </div>
    <div class="benefit-item">
      <img src="${benefit3Icon}" alt="${benefit3IconAlt}">
      <div>
        <span>${benefit3Title}</span>
        <p><strong>${benefit3Description}</strong></p>
      </div>
    </div>
  </div>
`;

// Insere o HTML no local desejado (substitua o seletor conforme necessário)
$('.pagina-inicial .secao-banners').after(htmlBenefits);

// Ajusta as tags na vitrine
$('.listagem-item .bandeira-promocao').each(function() {
    var texto = $(this).text();
    // Substitui "Desconto" (case-insensitive) por "OFF"
    var novoTexto = texto.replace(/Desconto/i, 'OFF');
    $(this).text(novoTexto);
});


$('.pagina-produto .span5 > .principal').append(`<div class="append-share-fav"></div>`);
$('.append-share-fav').append($('.produto-compartilhar .lista-favoritos'));

// Botão de compartilhar nas redes sociais
var btnShare = $('<button type="button" class="btn-share">Compartilhar</button>');
$('.append-share-fav').append(btnShare);

btnShare.on('click', function() {
    var url = window.location.href;
    var title = document.title;

    // Opções de redes sociais
    var shareLinks = [
        {
            nome: 'Facebook',
            classe: 'facebook',
            url: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url)
        },
        {
            nome: 'X (Twitter)',
            classe: 'x-twitter',
            url: 'https://x.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title)
        },
        {
            nome: 'WhatsApp',
            classe: 'whatsapp',
            url: 'https://api.whatsapp.com/send?text=' + encodeURIComponent(title + ' ' + url)
        }
    ];

    // Cria um menu simples de compartilhamento
    var $menu = $('<div class="share-menu"></div>');
    shareLinks.forEach(function(rede) {
        var $link = $('<a href="' + rede.url + '" target="_blank" rel="noopener noreferrer" class="' + rede.classe + '">' + rede.nome + '</a><br>');
        $menu.append($link);
    });

    // Remove menu anterior, se existir
    $('.share-menu').remove();

    // Adiciona o menu após o botão
    btnShare.after($menu);

    // Fecha o menu ao clicar fora
    $(document).on('click.shareMenu', function(e) {
        if (!$(e.target).closest('.btn-share, .share-menu').length) {
            $('.share-menu').remove();
            $(document).off('click.shareMenu');
        }
    });
});

// Verifica se o h1 da busca contém o texto "não encontrou nenhum resultado"
var $h1Busca = $('.pagina-busca .conteudo h1');
if ($h1Busca.length && $h1Busca.text().toLowerCase().indexOf('não encontrou nenhum resultado') !== -1) {
    $('.pagina-busca .conteudo.span9').addClass('no-results');
    $('.pagina-busca .coluna.span3').addClass('no-results');
}
    

    $('.produto .conteiner-imagem #abreZoom').remove();
    
    // Remove atributos data-target e data-toggle seguindo boas práticas
    $('.links-rodape ul li:first-child > a, .canais-contato ul li > a').each(function() {
        $(this).removeAttr('data-target data-toggle');
    });

// Input de quantidade antes do botão de comprar
$('.listagem-item .botao-comprar').each(function() {
    // Evita duplicar o input se já existir
    if($(this).prev('.quantidade-wrapper').length === 0) {
        var quantidadeHtml = '<div class="quantidade-wrapper">' +
            '<button type="button" class="btn-quantidade btn-menos" >-</button>' +
            '<input type="number" min="1" value="1" class="input-quantidade" />' +
            '<button type="button" class="btn-quantidade btn-mais">+</button>' +
            '</div>';
        $(quantidadeHtml).insertBefore($(this));
    }
});

// Após inserir os inputs, force o slick a recalcular
$('.slick-initialized').slick('setPosition');

// Atualiza o link ao alterar a quantidade
function atualizarHref($input) {
    var quantidade = parseInt($input.val(), 10);
    if (isNaN(quantidade) || quantidade < 1) quantidade = 1;
    $input.val(quantidade);
    var $botao = $input.closest('.quantidade-wrapper').next('.botao-comprar');
    var hrefOriginal = $botao.attr('href').replace(/\/adicionar\/(\d+)?$/, '/adicionar');
    $botao.attr('href', hrefOriginal + '/' + quantidade);
}

// Eventos para input manual
$(document).on('input change', '.input-quantidade', function() {
    atualizarHref($(this));
});

// Evento para botão de menos
$(document).on('click', '.btn-menos', function() {
    var $input = $(this).siblings('.input-quantidade');
    var valorAtual = parseInt($input.val(), 10) || 1;
    if (valorAtual > 1) {
        $input.val(valorAtual - 1).trigger('change');
    }
});

// Evento para botão de mais
$(document).on('click', '.btn-mais', function() {
    var $input = $(this).siblings('.input-quantidade');
    var valorAtual = parseInt($input.val(), 10) || 1;
    $input.val(valorAtual + 1).trigger('change');
});

    if ($(window).width() > 768) {
        // desktop
        // Antes de adicionar, verifica se já existe para evitar duplicação
        if ($('.conteudo-topo .sign-up-header').length === 0) {
            $('.conteudo-topo .inferior .busca-mobile').after(`
                <div class="sign-up-header">
                    <a href="./conta/login">
                        <span>Entrar</span>
                        <i class="user"></i>
                    </a>
                </div>    
            `);
        }

        $('.pagina-produto .span12.produto').prepend($('.info-principal-produto .breadcrumbs'));
        $('.pagina-produto').prepend($('.append-bg-product'));
        $('.pagina-categoria .conteudo').prepend($('.pagina-categoria .breadcrumbs'));
        $('.pagina-busca .conteudo').prepend($('.pagina-busca .breadcrumbs'));
        $('.pagina-categoria .conteudo .ordenar-listagem.topo > .row-fluid').prepend($('.pagina-categoria .conteudo h1'));
        $('.pagina-busca .conteudo .ordenar-listagem.topo > .row-fluid').prepend($('.pagina-busca .conteudo h1'));
        
        

        // badges de categoria

        var badgesCategorias = [
            {
                codigoCategoria: '23387220',
                urlImagemBadge: 'https://cdn.awsli.com.br/2830/2830294/arquivos/badge-playstation.png'
            },
            {
                codigoCategoria: '23387224',
                urlImagemBadge: 'https://cdn.awsli.com.br/2830/2830294/arquivos/badge-xbox.png'
            }
            // Adicione mais objetos conforme necessário
        ];

        badgesCategorias.forEach(function(badge) {
            $('.listagem-item.prod-cat-' + badge.codigoCategoria).each(function() {
                var $item = $(this);
                if ($item.find('.badge-category-list[data-categoria="' + badge.codigoCategoria + '"]').length === 0) {
                    var $badge = $('<div class="badge-category-list" data-categoria="' + badge.codigoCategoria + '"><img src="' + badge.urlImagemBadge + '" alt="Badge Categoria" /></div>');
                    var $bandeiras = $item.find('.bandeiras-produto');
                    if ($bandeiras.length) {
                        $badge.insertBefore($bandeiras);
                    }
                }
            });
        });

        // // Verifica se está na página de categoria OU na página de busca antes de executar
        // if ($('.pagina-categoria').length > 0 || $('.pagina-busca').length > 0) {
        //     // Altera o atributo data-produtos-linha para 3
        //     $('#listagemProdutos').attr('data-produtos-linha', '3');
            
        //     // Reorganiza os produtos em grupos de 3 por linha
        //     var produtos = $('.listagem-item').parent('li');
        //     var totalProdutos = produtos.length;
            
        //     // Remove todas as linhas existentes
        //     $('.listagem-linha').remove();
            
        //     // Cria novas linhas com 3 produtos cada
        //     for (var i = 0; i < totalProdutos; i += 3) {
        //         var novaLinha = $('<li class="listagem-linha"></li>');
        //         var novoUl = $('<ul></ul>');
                
        //         // Adiciona até 3 produtos na linha atual
        //         for (var j = 0; j < 3 && (i + j) < totalProdutos; j++) {
        //             var produto = produtos.eq(i + j);
        //             produto.removeClass('span3').addClass('span4');
        //             novoUl.append(produto);
        //         }
                
        //         novaLinha.append(novoUl);
        //         $('#listagemProdutos > ul').append(novaLinha);
        //     }
        // }

        // Tenta substituir o .sign-up-header pelo .menu-user-logged, com até 5 tentativas caso não esteja disponível imediatamente
        function tentarSubstituirMenuUserLogged(tentativasRestantes = 5) {
            var $menuUserLogged = $('.btn-group.menu-user-logged');
            var $signUpHeader = $('.sign-up-header');
            // Verifica se o usuário está logado pelo atributo style vazio ou undefined
            if (($menuUserLogged.attr('style') === '' || $menuUserLogged.attr('style') === undefined) && $signUpHeader.length) {
                $signUpHeader.replaceWith($menuUserLogged.show());
                // Deixa apenas o primeiro nome no menu-user-name após a substituição
                $('.menu-user-name').text(function(i, text) {
                    return text.split(' ')[0];
                });
            } else if (tentativasRestantes > 0) {
                setTimeout(function() {
                    tentarSubstituirMenuUserLogged(tentativasRestantes - 1);
                }, 300);
            }
        }
        tentarSubstituirMenuUserLogged();

        $('.produto>.row-fluid:nth-child(2) > div.span7').append($('#buy-together-position1'));
        $('.produto>.row-fluid:nth-child(2) > div.span7').append($('.produto .row-fluid .span12 .abas-custom'));
        $('.produto>.row-fluid:nth-child(2) > div.span7').append($('.listagem.aproveite-tambem'));
        (function tentarInserirReviews() {
            var $aproveiteTambem = $('.pagina-produto .listagem.aproveite-tambem');
            var $reviews = $('.pagina-produto .konfidency-reviews-details.conteiner');
            // Verifica se os reviews já não estão antes do aproveiteTambem
            if ($aproveiteTambem.length && $reviews.length && !$aproveiteTambem.prev('.konfidency-reviews-details').length) {
                $aproveiteTambem.before($reviews);
            } else if (!($aproveiteTambem.prev('.konfidency-reviews-details').length)) {
                setTimeout(tentarInserirReviews, 250);
            }
        })();

        if ($('.pagina-produto .produto div.principal .gateways-rodape').length === 0) {
            $('.pagina-produto .produto div.principal').append($('#rodape .pagamento .gateways-rodape'));
        }
        
        
        $('.canais-contato ul li.hidden-phone').append(`
            <div class="append-content-sup">
                <div class="info-section">
                    <span class="titulo">Atendimento</span>
        
                    <div class="atendimento-float">
                    <img alt="Horário de atendimento" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-clock.svg"/>
                    <div>
                        <strong>Horário de atendimento</strong>
                        <span>
                            Segunda a sexta: 11:30 ás 22:00h <br>
                            Sabado: 10:00h ás 18:00h <br>
                            Domingo e Feriado: Fechado
                        </span>
                    </div>
                    </div>
        
                    <div class="mensagem-float">
                    <strong>Envie uma mensagem:</strong>
                    <div>
                        <img alt="Envie uma mensagem" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-mail.svg"/>
                        <div>
                        <a href="mailto:contato@mexgames.com.br">contato@mexgames.com.br</a>
                        <span>Mex Games</span>
                        </div>
                    </div>
                    </div>
        
                    <div class="whats-float">
                    <img alt="WhatsApp" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-whats.svg"/>
                    <div>
                        <strong>Estamos no WhatsApp:</strong>
                        <a href="https://wa.me/553398075947?text=Ol%C3%A1!%20Preciso%20de%20suporte.%20Pode%20me%20ajudar%3F" target="_blank">(33) 9807-5947</a>
                    </div>
                </div>
            </div>
        `);

        $('.carrinho-checkout .atendimento').replaceWith(`
            <div class="atd-top-checkout"><i></i>Precisa de ajuda?
            <div class="append-content-sup">
                            <div class="info-section">
                                <span class="titulo">Atendimento</span>
                    
                                <div class="atendimento-float">
                                <img alt="Horário de atendimento" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-clock.svg"/>
                                <div>
                                    <strong>Horário de atendimento</strong>
                                    <span>
                                        Segunda a sexta: 11:30 ás 22:00h <br>
                                        Sabado: 10:00h ás 18:00h <br>
                                        Domingo e Feriado: Fechado
                                    </span>
                                </div>
                                </div>
                    
                                <div class="mensagem-float">
                                <strong>Envie uma mensagem:</strong>
                                <div>
                                    <img alt="Envie uma mensagem" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-mail.svg"/>
                                    <div>
                                        <a href="mailto:contato@mexgames.com.br">contato@mexgames.com.br</a>
                                        <span>Mex Games</span>
                                    </div>
                                </div>
                                </div>
                    
                                <div class="whats-float">
                                <img alt="WhatsApp" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-whats.svg"/>
                                <div>
                                    <strong>Estamos no WhatsApp:</strong>
                                    <a href="https://wa.me/553398075947?text=Ol%C3%A1!%20Preciso%20de%20suporte.%20Pode%20me%20ajudar%3F" target="_blank">(33) 9807-5947</a>
                                </div>
                            </div>
                        </div>
                        </div>
            `);

    } else {
        //mobile 
        $('#cabecalho .span3 > .logo').before($('.conteudo-topo .busca-mobile .atalho-menu'));
        $('#cabecalho .span3 > .logo').after($('.conteudo-topo .inferior .hidden-phone .carrinho'));
        $('.menu.superior').append('<div class="fecha-menu"><button class="close-menu">X</button></div>');
        $('.fecha-menu').click(function(){
           $('.menu.superior .nivel-um').removeClass('active');
        });
        
        $('.menu.superior .nivel-um').prepend(`
            <div class="account-menu">
              <div class="hello-menu">
                <i></i><span>Olá, visitante!<a href="../conta/login">Entrar <span>ou</span> Cadastrar</a></span>
              </div>
              <div class="items-menu">
                <a href="/conta/login" onclick="window.location.href='/conta/login'; return false;" class="myaccount">
                    Minha conta
                </a>
                <a href="/conta/pedido/listar" onclick="window.location.href='/conta/pedido/listar'; return false;" class="myorders">
                    Meus pedidos
                </a>
              </div>
            </div>
        `);

        $('.search-bar').on('click', function () {
            $('.busca #form-buscar input#auto-complete').focus();
        });


        if ($('#cabecalho .sign-up-header').length === 0) {
            $('#cabecalho .span3 > .logo').after(`
                <div class="search-header">
                    <a href="javascript:void(0)" class="toggle-search">
                        <i class="icon-search"></i>
                    </a>
                </div>
                <div class="sign-up-header">
                    <a href="./conta/login">
                        <i class="user"></i>
                    </a>
                </div>    
            `);
        }
        
        $(document).on('click', '.toggle-search', function (e) {
            e.preventDefault();
            e.stopPropagation();
    
            $('#cabecalho .conteudo-topo').toggleClass('active');
        });

        $('.ordenar-listagem.topo').before($('.conteudo h1'));

        // Mapeamento de imagens de banners para alterar dinamicamente pelo usemap
        /*
        var bannersMapeados = [
            { map: '4080625', imagem: 'https://cdn.awsli.com.br/2830/2830294/arquivos/tempest-m1.png' },
            { map: '4081482', imagem: 'https://cdn.awsli.com.br/2830/2830294/arquivos/siege-m.png' }
        ];

        bannersMapeados.forEach(function(banner) {
            $('img[usemap="#map-banner-' + banner.map + '"]').attr('src', banner.imagem);
        });
        */

        // Tenta mover .produto-detalhe após .konfidency-reviews-summary de forma reativa (com tentativas limitadas)
        /*
        (function retryMoveProdutoDetalhe(maxRetries) {
            var moved = false;
            var retries = 0;
            function tryMove() {
                var $summary = $('.konfidency-reviews-summary');
                var $detalhe = $('.produto-detalhe');
                if ($summary.length && $detalhe.length && !$summary.next().is($detalhe)) {
                    $summary.after($detalhe);
                    moved = true;
                }
                if (!moved && retries < maxRetries) {
                    retries++;
                    setTimeout(tryMove, 150);
                }
            }
            tryMove();
        })(20);
        */

        // Quando clicar no <i> dentro do menu de categorias, alterna a classe "open" no <ul> irmão correspondente de forma individual
        $('.menu.superior .nivel-um .icon-chevron-down').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var $li = $(this).closest('li');
            var $ul = $li.children('ul.nivel-dois');
            $ul.toggleClass('open');
        });

        $('.benefits-row').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
        
        $('body').append(`
            <div class="support-float centered">
              <div class="append-content-sup">
                <div class="close-support"><i></i></div>
        
                <div class="info-section">
                  <span class="titulo">Atendimento</span>
        
                  <div class="atendimento-float">
                    <img alt="Horário de atendimento" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-clock.svg"/>
                    <div>
                      <strong>Horário de atendimento</strong>
                      <span>Segunda a sexta: 11:30 ás 22:00h <br>
                            Sabado: 10:00h ás 18:00h <br>
                            Domingo e Feriado: Fechado
                        </span>
                    </div>
                  </div>
        
                  <div class="mensagem-float">
                    <strong>Envie uma mensagem:</strong>
                    <div>
                      <img alt="Envie uma mensagem" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-mail.svg"/>
                      <div>
                        <a href="mailto:contato@mexgames.com.br">contato@mexgames.com.br</a>
                        <span>Mex Games</span>
                      </div>
                    </div>
                  </div>
        
                  <div class="whats-float">
                    <img alt="WhatsApp" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-whats.svg"/>
                    <div>
                      <strong>Estamos no WhatsApp:</strong>
                      <a href="https://wa.me/553398075947?text=Ol%C3%A1!%20Preciso%20de%20suporte.%20Pode%20me%20ajudar%3F" target="_blank">(33) 9807-5947</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `);
        
          // Abrir / fechar no X
          $('.close-support').on('click', function () {
            $('.support-float.centered').toggleClass('open');
          });
        
          // Abrir pelo botão flutuante
          $('.floating-bar .floating-bar-item:first-child').on('click', function () {
            $('.support-float.centered').toggleClass('open');
          });

          $('.pagina-categoria .conteudo.span9 > .titulo').append(`
            <button class="cat-filter botao">Ordenar por<i></i></button>
        `);
        
        $('.pagina-categoria').append(`
        <div class="append-filter-cat"><div class="filter-container"></div><div class="close-filter"></div></div>
        `);
        
        // Evento para abrir o filtro
        $(document).on('click', '.cat-filter', function() {
            $('.append-filter-cat').addClass('open');
        });
        
        // Evento para fechar o filtro
        $(document).on('click', '.append-filter-cat .close-filter', function() {
            $('.append-filter-cat').removeClass('open');
        });
        
        $('.append-filter-cat .filter-container').append($('.filtro-coluna'));
        $('.filter-container').prepend($('.ordenar-listagem .dropdown-menu'));

        $('.hello-menu').after($('.btn-group.menu-user-logged'));
        $('.menu-user-logged').append($('a.menu-user-logout'));

        // Retente até conseguir mover o div#avisoEnvio para depois de .dados-cadastro
        (function tryMoveAvisoEnvio(retries) {
            if ($('#avisoEnvio').length && $('.dados-cadastro').length) {
                $('#avisoEnvio').insertAfter('.dados-cadastro');
            } else if (retries > 0) {
                setTimeout(function() {
                    tryMoveAvisoEnvio(retries - 1);
                }, 100);
            }
        })(10); // Tenta até 10 vezes, com intervalo de 100ms
        
        $('.filter-container ul.dropdown-menu.pull-right').prepend(`<i class="close-filter"></i>`)
    } // fecha o else do mobile

// Input de quantidade no carrinho (página de produto)
// Encontra o input de quantidade
const $qtyInput = $('input[name="qtde-carrinho"]');

if ($qtyInput.length === 0) {
    // Se não encontrar o input, pula para o código abaixo
    console.log('Input de quantidade não encontrado');
} else {

// Obtém o valor inicial
const initialQty = parseInt($qtyInput.val()) || 1;

// HTML do novo input com botões
const newInputHtml = `
    <div class="qty-control">
    <button type="button" class="qty-btn qty-minus">−</button>
    <input type="number" class="qty-input" value="${initialQty}" min="1">
    <button type="button" class="qty-btn qty-plus">+</button>
    </div>
`;

// Substitui o input antigo
$qtyInput.replaceWith(newInputHtml);

// Referências dos novos elementos
const $newInput = $('.qty-input');
const $minusBtn = $('.qty-minus');
const $plusBtn = $('.qty-plus');
const $buyLink = $('a[href*="/adicionar"]');

// Função para atualizar o link
function updateBuyLink() {
    const qty = parseInt($newInput.val()) || 1;
    
    $buyLink.each(function() {
    let href = $(this).attr('href');
    
    // Remove quantidade existente no final da URL
    href = href.replace(/\/\d+$/, '');
    
    // Adiciona a nova quantidade se for diferente de 1
    if (qty > 1) {
        href += '/' + qty;
    }
    
    $(this).attr('href', href);
    });
}

// Botão menos
$(document).on('click', '.qty-minus', function(e) {
    e.preventDefault();
    let currentQty = parseInt($newInput.val()) || 1;
    if (currentQty > 1) {
    $newInput.val(currentQty - 1);
    updateBuyLink();
    }
});

// Botão mais
$(document).on('click', '.qty-plus', function(e) {
    e.preventDefault();
    let currentQty = parseInt($newInput.val()) || 1;
    $newInput.val(currentQty + 1);
    updateBuyLink();
});

// Quando o usuário digita no input
$(document).on('change', '.qty-input', function() {
    let qty = parseInt($(this).val());
    
    // Validação
    if (isNaN(qty) || qty < 1) {
    $(this).val(1);
    }
    
    updateBuyLink();
});

// Atualiza o link na primeira carga
updateBuyLink();
} // fecha o else do $qtyInput

    // Código que executa em ambos (desktop e mobile)
    if ($('.pagina-produto .produto div.principal .chave-digital').length === 0) {
        $('.pagina-produto .produto div.principal').prepend(`
            <div class="chave-digital">Receba seu produto por E-mail</div>
        `);
    }

    if ($('#avisoEnvioCart').length === 0) {
        $('.pagina-carrinho .finalizar-compra > .cabecalho-interno').after(`<div id="avisoEnvioCart"><span>Todos os nossos envios são feitos por e-mail. <strong>Importante:</strong> Verifique se está comprando o <strong>produto correto para sua plataforma</strong> antes de finalizar a compra.</span></div>`);
    }

    if ($('.produto .produto-detalhe-info .produto-detalhe-alerta').length === 0) {
        $('.produto .produto-detalhe-info').append(`
            <div class="produto-detalhe-alerta">
               <span>* Todos os produtos do nosso site <strong>são códigos 100% originais</strong>, enviados por e-mail.</span>
             </div>
        `);
    }

// Estrutura do FAQ
var faqs = [
    {
        pergunta: "O que vou receber quando comprar um jogo ?",
        resposta: "Uma licença do jogo original para inserir em seu console. Os dados de acesso serão enviados em seu WhatsApp cadastrado em nossa loja. Basta adicionar os dados em seu console para liberar o download do jogo completo no servidor oficial do seu console."
    },
    {
        pergunta: "É seguro comprar nesta loja?",
        resposta: "Sim! A Mex Games existe há mais de 3 anos com CNPJ ativo. Somos um ponto de venda OFICIAL de grandes empresas de produtos e serviços digitais. Com mais de 50 mil pedidos enviados e uma base de 5 mil clientes cadastrados em nosso WhatsApp. Pode ter a certeza que está comprando com segurança de uma loja que além de vender jogos proporciona o melhor suporte e experiência do cliente, sendo uma das únicas com escritório físico. Além disso temos diversos depoimentos e feedback positivos em nosso Instagram (@mexgamess)."
    },
    {
        pergunta: "Qual o prazo de entrega?",
        resposta: "O prazo normal para entrega é de até 10 minutos após o seu pagamento aprovado por nossa loja, porém em dias que nossa loja recebe um grande número de pedido esse prazo pode-se estender para alguns minutos a mais. Garantimos a entrega do pedido no mesmo dia em que o pagamento é aprovado. ATENÇÃO: Esse prazo é somente válido em dias úteis de segunda a sexta feira das 11:30 às 22 horas. Sábado de 10 às 18 horas."
    },
    {
        pergunta: "Qual a garantia desse jogo ?",
        resposta: "Oferecemos garantia vitalícia para todos jogos comprados em nosso site, isso quer dizer que o jogo é seu pra sempre, você pode usar ele ilimitado. Oferecemos suporte permanente para todos jogos comprados em nosso site. Entretanto existem algumas regras para podermos oferecer essa Garantia e Suporte: Respeitar o guia de instalação. Não alterar os dados da conta, email, senha, telefone ou qualquer outra coisa. Não acessar a conta em mais de 1 console, emprestar ou compartilhar o jogo. Não pode usar a licença de uma forma diferente que foi estipulada para você. Se você seguir essas regras você terá acesso ao jogo pra sempre. Garantindo total tranquilidade para você aproveitar seus jogos sempre que desejar."
    },
    {
        pergunta: "Ao trocar de console, vender ou em caso de defeito, eu corro o risco de perder meus jogos?",
        resposta: "Em caso de defeitos, todos os jogos comprados em nossa loja têm garantia de reinstalação, basta você salvar os dados de acesso e inserir novamente em seu console e a licença será ativada novamente em seu console novo, ou no mesmo console, caso ele seja formatado. Após feito isso, basta fazer o download do jogo e instalar novamente e tudo volta a funcionar como antes. Em caso de venda ou troca de console, HD ou SSD, para você não perder o seu jogo, envie um vídeo em nosso WhatsApp DELETANDO os dados de acesso ao jogo do console que vai vender para que a licença seja removida dele e salve ela ou anote. Quando você comprar um novo console, basta você inserir novamente os dados de acesso ao novo console para que a licença seja ativada nele. Desta forma, você vai poder fazer um novo download do jogo em seu console através dos servidores oficiais do console."
    }
];

// Cria o HTML
function criarFaqHtml(faqs, titulo) {
    var html = '<div class="faq-categoria">';
    html += '<h2>' + (titulo || 'Perguntas Frequentes') + '</h2>';

    faqs.forEach(function(faq, idx) {
        html += `
            <div class="faq-item">
                <button class="faq-pergunta" type="button" aria-expanded="false" aria-controls="faq-resposta-${idx}">
                    ${faq.pergunta}
                </button>
                <div class="faq-resposta" id="faq-resposta-${idx}" style="display:none;">
                    ${faq.resposta}
                </div>
            </div>
        `;
    });

    html += '</div>';

    return html;
}

$(function () {

    if ($('.pagina-produto').length && $('#descricao').length) {

        if ($('#descricao').next('.faq-categoria').length === 0) {
            $('#descricao').after(
                criarFaqHtml(faqs, 'Perguntas Frequentes')
            );
        }

    }

});

// Abrir/fechar FAQ
$(document).on('click', '.faq-pergunta', function () {

    var $btn = $(this);
    var $resposta = $btn.next('.faq-resposta');
    var aberto = $btn.attr('aria-expanded') === 'true';

    $('.faq-pergunta').attr('aria-expanded', 'false');
    $('.faq-resposta').slideUp(200);

    if (!aberto) {
        $btn.attr('aria-expanded', 'true');
        $resposta.slideDown(200);
    }

});

// Defina as variáveis de conteúdo
var featuredImg = "https://cdn.awsli.com.br/2391/2391623/arquivos/meio-desk.png";
var featuredTitle = "GTA 6";
var featuredText = "Será o oitavo título principal da franquia Grand Theft Auto, sendo o sucessor de GTA V.";
var featuredLink = "#"; // Link alterável para o banner de destaque

// Toggle para bandeira de pré-venda
var mostrarBandeiraPrevenda = true; // Defina como false para remover a bandeira

var prevendaHtml = mostrarBandeiraPrevenda ? '<span class="bandeira-prevenda">Pré-venda</span>' : '';

// Só adicionar se ainda não existe para evitar duplicação
if ($('#listagemProdutos > .vitrine-17314880+ul .append-featured').length === 0) {
    $('#listagemProdutos > .vitrine-17314880+ul').after(`
        <div class="banner-featured append-featured">
            <a href="${featuredLink}" class="container-featured">
                <img src="${featuredImg}" alt="${featuredTitle}" class="bn-featured-image">
                <div class="append-text">
                    <h2 class="bn-featured-title">${featuredTitle}${prevendaHtml}</h2>
                    <p>${featuredText}</p>
                </div>
            </a>
        </div>
    `);
}

// Caso 1: Frete dentro de span
$('.tr-checkout-frete td.text-right span').each(function() {
if ($(this).text().trim() === 'Frete:') {
    $(this).text('Envio:');
}
});

// Caso 2: Frete como texto direto dentro do td.subtotal
$('td.subtotal').each(function() {
const html = $(this).html();
$(this).html(html.replace('Frete:', 'Envio:'));
});

$(function() {

    if ($(window).width() <= 768) return;
  
    const $menu = $('.menu.superior > .nivel-um');
  
    // Se já existir, não faz nada
    if ($menu.find('> .submenu-clone').length) return;
  
    // Insere o item "Categorias"
    $menu.prepend(`
      <div class="submenu-clone">
        <span>Categorias<i class="icon-chevron-down"></i></span>
      </div>
    `);
  
    // Clona o menu original
    const $menuClonado = $menu.clone();
  
    // Remove o submenu-clone de dentro do clone (pra evitar loop infinito)
    $menuClonado.find('.submenu-clone').remove();
  
    // Joga dentro do submenu-clone
    $menu.find('> .submenu-clone').append($menuClonado);
  
  });

  $('.pagina-categoria .secao-principal').append($('.coluna > .componente > .interno'));
  
  $('.tabela-pedidos tbody tr').each(function () {

    const $linha = $(this);

    // Pega o texto de todos os <b> da linha
    const textoStatus = $linha.find('b').text().toLowerCase().trim();

    // Verifica se contém exatamente "pedido entregue"
    if (textoStatus.includes('pedido entregue')) {

      const $linkPedido = $linha.find('td:first-child > a');

      // Evita duplicar o botão
      if ($linkPedido.find('.btn-resgatar').length === 0) {
        $linkPedido.append('<span class="btn-resgatar">Resgatar</span>');
      }
    }

  });

  // Tenta até conseguir, depois que conseguir, para de tentar
  (function tryAppendSubtitulo() {
    if ($('.compre-junto__titulo .compre-junto__subtitulo').length) return; // já conseguiu, para de tentar
    var $titulo = $('.compre-junto__titulo');
    if ($titulo.length) {
      $titulo.append(`<p class="compre-junto__subtitulo">Aproveite e leve mais por menos</p>`);
      return; // conseguiu, para de tentar
    }
    setTimeout(tryAppendSubtitulo, 100); // tenta de novo daqui a pouco
  })();

});


$(document).ready(function () {
  
    /* ======================================================
       1. CRIA BOTÃO FILTRAR
    ====================================================== */

    $('.ordenar-listagem.topo .row-fluid').append(`
        <button class="btn btn-filtrar" data-toggle="modal" data-target="#modalFiltros">
            Filtrar
        </button>
    `);

    $('body').append(`
        <div id="modalFiltros" class="modal fade" tabindex="-1" style="display: none;">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Filtros</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                        <div class="modal-ordenar">
                          <h4>Ordenar por:</h4>
                        </div>
                        <div class="modal-filtros"></div>
                    </div>

                </div>
            </div>
        </div>
    `);

    $('.ordenar-listagem.topo .dropdown-menu')
        .appendTo('#modalFiltros .modal-ordenar');

    $('.filtro-coluna').appendTo('#modalFiltros .modal-filtros');

});

$(document).ready(function(){
    $(function () {

        function configurarLicencas() {
    
            $('.atributo-item').each(function () {
                const $item = $(this);
                const variacao = ($item.attr('data-variacao-nome') || '')
                    .trim()
                    .toLowerCase();
    
                $item.removeClass('primaria secundaria');
    
                if (variacao.includes('primária') || variacao.includes('primaria')) {
                    $item.addClass('primaria');
                }
    
                if (variacao.includes('secundária') || variacao.includes('secundaria')) {
                    $item.addClass('secundaria');
                }
            });
    
            const $primaria = $('.atributo-item.primaria');
    
            if ($primaria.length && !$primaria.closest('li').hasClass('active')) {
                $primaria.trigger('click');
            }
        }
    
        configurarLicencas();
    
        const observer = new MutationObserver(function () {
            configurarLicencas();
        });
    
        observer.observe(document.querySelector('.atributos'), {
            childList: true,
            subtree: true
        });
    
    });
});

// =====================================================
// CARRINHO E SURPRISE BOX
// =====================================================

$(document).ready(function () {

    // =====================================================
    // CRIA O RESUMO
    // =====================================================
    $('.finalizar-compra > .caixa-sombreada').append(`
      <div class="cart-resume">
        <div class="cart-resume-container">
          <h3>Resumo</h3>
          <div class="cart-resume-subtotal"></div>
          <div class="cart-resume-total"></div>
          <div class="cart-resume-button"></div>
          <div class="cart-resume-coupon">
            <div class="resume-toggle-coupon">
              <span class="toggle-button">
                <img src="https://cdn.awsli.com.br/2775/2775575/arquivos/coupon.svg"/>
                Tem um cupom?
              </span>
              <i class="icon-chevron-down"></i>
            </div>
          </div>
        </div>
        <div class="cart-email-send">
          <i></i>
          <span>Envio feito por e-mail.</span>
        </div>
      </div>
    `);
  
    // =====================================================
    // SUBTOTAL
    // =====================================================
    var $subtotalTarget = $('.cart-resume-subtotal');
    var $hiddenRow = $('tr.hidden-phone.bg-dark');
  
    if ($subtotalTarget.length && $hiddenRow.length) {
      $('<div class="hidden-phone bg-dark"></div>')
        .append($hiddenRow.children())
        .appendTo($subtotalTarget);
        $('.formas-envio').appendTo($subtotalTarget);
      $hiddenRow.remove();
    }
  
    // =====================================================
    // BOTÃO FINALIZAR + EMBALAGEM + FRETE
    // =====================================================
    var $buttonTarget = $('.cart-resume-button');
  
    if ($buttonTarget.length) {
      $('form[action*="/checkout/redirect/"]').appendTo($buttonTarget);
    }
  
    // =====================================================
    // TOTAL
    // =====================================================
    var $totalTarget = $('.cart-resume-total');
    var $totalRow = $('tr.bg-dark').has('.line-18');
  
    if ($totalTarget.length && $totalRow.length) {
      $('<div class="bg-dark line-18"></div>')
        .append($totalRow.find('td').children())
        .appendTo($totalTarget);
      $totalRow.remove();
    }
  
    // =====================================================
    // CUPOM (COM E SEM CUPOM APLICADO)
    // =====================================================
    var $couponTarget = $('.cart-resume-coupon');
  
    if ($couponTarget.length) {
  
      var $formCupomRow = $('tr.bg-dark').has('form[action*="/carrinho/cupom/"]');
      if ($formCupomRow.length) {
        $('<div class="bg-dark cart-coupon"></div>')
          .append($formCupomRow.find('form'))
          .appendTo($couponTarget);
        $formCupomRow.remove();
      }
  
      var $cupomAplicadoRow = $('tr.bg-dark.possui-cupom');
      if ($cupomAplicadoRow.length) {
        $('<div class="bg-dark cart-coupon aplicado"></div>')
          .append($cupomAplicadoRow.find('td').children())
          .appendTo($couponTarget);
        $cupomAplicadoRow.remove();
      }
    }
  
    // =====================================================
    // VALOR DO CUPOM NO SUBTOTAL
    // =====================================================
    var $cupomValor = $('.cupom-valor');
    if ($cupomValor.length && $subtotalTarget.length) {
      if ($cupomValor.is(':visible') || $.trim($cupomValor.text()) !== '') {
        $cupomValor.appendTo($subtotalTarget);
      }
    }
    
    $('tr[data-produto-id]').addClass('cart-product');
    $('.pagina-carrinho:not(.carrinho-checkout) .tabela-carrinho').prepend(`<h3>Meu carrinho </h3>`);
    
     // =====================================================
    // ADICIONA BOX SURPRESA
    // =====================================================
  
  });
  
  // =====================================================
  // TOGGLE DO CUPOM (FORA DO READY)
  // =====================================================
  $(document).on('click', '.resume-toggle-coupon', function (e) {
    e.preventDefault();
    $('.cart-resume-coupon').toggleClass('open');
  });
  

  $('.pagina-inicial .vitrine-22673218').before(`
    <div class="how-works">
    
        <div class="h-video">
    
            <div class="h-title">
                <p>COMO FUNCIONA</p>
    
                <h3>
                    Comprar na Mex Games é rápido e seguro.
                    <span>Assista!</span>
                </h3>
            </div>
    
            <div class="h-video-frame">
                <iframe
                    src="https://www.youtube.com/embed/PqRMV36VPnU?si=KYHnzDq4U12so5CI"
                    title="Como comprar na Mex Games"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>
    
        </div>
    
        <div class="h-steps">
    
            <div class="h-title">
                <p>PORQUE COMPRAR NA</p>
                <h3>Mex Games</h3>
            </div>
    
            <ul>
    
                <li>
                    <strong>1</strong>
    
                    <div>
                        <span>Escolha seu jogo</span>
                        <p>Navegue e adicione no carrinho.</p>
                    </div>
                </li>
    
                <li>
                    <strong>2</strong>
    
                    <div>
                        <span>Finalize o pagamento</span>
                        <p>Ambiente 100% seguro e protegido.</p>
                    </div>
                </li>
    
                <li>
                    <strong>3</strong>
    
                    <div>
                        <span>Receba sua chave por e-mail ou WhatsApp</span>
                        <p>Envio em até 10 minutos.</p>
                    </div>
                </li>
    
                <li>
                    <strong>4</strong>
    
                    <div>
                        <span>Ative e jogue.</span>
    
                        <p>
                            Acesse a conta e
                            <em>divirta-se!</em>
                        </p>
                    </div>
                </li>
    
            </ul>
    
        </div>
    
    </div>
    `);