$(document).ready(function() {

// alterações gerais
$('.selos li:first-child img').attr('src','https://cdn.awsli.com.br/2830/2830294/arquivos/site-protegido.svg');
$('#rodape>div:last-child .conteiner .row-fluid div:not(.span12)').before(`<div style="" class="assinatura-rodape"><a href="https://wa.me/5511939593709" class="symm" target="_blank"><img src="https://cdn.awsli.com.br/1041/1041512/arquivos/desenvolvido-symm.svg" alt="Symm.agency" width="120px" height="35px"></a></div>`)
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
        <div><img alt"Horário de atendimento" src="https://cdn.awsli.com.br/2830/2830294/arquivos/footer-clock.svg"/><div><strong>Horário de atendimento</strong> <span>Todos os dias, das 09h às 22h</span></div></div>
        <div>
            <strong>Envie uma mensagem:</strong>
            <div>
                <img alt="Envie uma mensagem" src="https://cdn.awsli.com.br/2830/2830294/arquivos/footer-envelope.svg"/>
                <div>
                    <span>
                        <a href="mailto:contato@playce.com.br">contato@playce.com.br</a>
                        <span> Playce - Games e Gift cards </span>
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
        Todos os nossos gift cards e produtos digitais são enviados de forma 100% online, garantindo agilidade e segurança.
    </p>
    </div>
    </div>
`);
$('.barra-inicial .lista-redes').removeClass('span3').appendTo($('.barra-inicial .canais-contato ul'));
$('.barra-inicial .conteiner > .row-fluid').prepend(`
    <div class="append-benefits">
       <div>
           <i></i><span>Keys originais</span>
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
          <!--<img src="https://cdn.awsli.com.br/2830/2830294/arquivos/controller.png" alt="Mascote Playce" class="about-banner-icon" />-->
          <div class="about-banner-title">
            <h2>Gift Cards Online com Entrega Imediata e Pagamento Seguro | Playce</h2>
          </div>
        </div>
        <div class="about-banner-description">
          <p>Na Playce você compra gift cards online com entrega imediata, pagamento seguro e ativação rápida. Somos uma loja especializada na venda de gift card digital para PlayStation, PSN, Xbox, Nintendo, Google Play, Steam e outras plataformas. Se você procura onde comprar gift card confiável, com envio automático e suporte eficiente, aqui é o lugar certo.</p>
          <p>
            Trabalhamos com código digital original, enviado por e-mail ou disponibilizado na área do cliente logo após a confirmação do pagamento. Nosso sistema é automatizado, garantindo agilidade na entrega e segurança na transação. Aceitamos Pix, cartão de crédito e outros meios de pagamento seguros, oferecendo praticidade para quem deseja comprar gift card online no Brasil.
            <br><br>
            Na Playce, você encontra gift card PSN Brasil, gift card Xbox Live, crédito Google Play, saldo Steam e cartões presente digitais com diferentes valores. Ideal para adicionar saldo à conta, comprar jogos, assinaturas, conteúdos extras, aplicativos, filmes e muito mais. Se você busca gift card barato, com preço competitivo e envio rápido, temos as melhores opções.
            <br><br>
            Nossa loja virtual é confiável, com proteção antifraude e atendimento especializado. Prezamos pela segurança dos dados, transparência nas informações e rapidez na liberação do código. Ao comprar gift card digital na Playce, você recebe um produto oficial, pronto para resgatar na plataforma desejada.
            <br><br>
            Seja para uso próprio ou para presentear, comprar gift card online é a forma mais prática e segura de adquirir créditos digitais. Escolha o valor, finalize a compra e receba seu código em poucos minutos. A Playce é referência em gift cards digitais com entrega rápida, suporte eficiente e experiência de compra simples.
            <br><br>
            Garanta agora seu gift card online com envio imediato e aproveite todas as vantagens de comprar em uma loja especializada, segura e focada em agilidade.
          </p>
        </div>
        <button class="about-banner-btn" type="button">
          Ver mais <span class="about-banner-btn-arrow">&#9660;</span>
        </button>
      </div>
      <div class="about-banner-image">
        <img src="https://cdn.awsli.com.br/2391/2391623/arquivos/char-playce-1.png" alt="Personagem Samurai" />
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
        slidesToShow: 4,
        slidesToScroll: 4,
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
var idsVitrine = ['17316132', '18566102']; // Exemplo: ['23507360', '23507361']

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
var bannerImgUrl = "https://cdn.awsli.com.br/2391/2391623/arquivos/bg-home-2.png"; // URL da imagem do banner

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

$('.listagem-item').each(function() {
    var $item = $(this);
    var $bandeira = $item.find('.bandeira-promocao');
    var $precoPromocional = $item.find('strong.preco-promocional');
    if ($bandeira.length && $precoPromocional.length) {
        $bandeira.insertAfter($precoPromocional.first());
    }
});

$('.listagem-item').each(function() {
    var $item = $(this);
    var $bandeiras = $item.find('.bandeiras-produto');
    var $infoProduto = $item.find('.info-produto');
    if ($bandeiras.length && $infoProduto.length) {
        $bandeiras.insertBefore($infoProduto.first());
    }
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
                    <a href="https://www.playce.com.br/conta/login">
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

        // Ajuste na página de produto
        if ($('.produto .conteiner-imagem .produto-detalhe-info').length === 0) {
            $('.produto .conteiner-imagem').append(`
                <div class="produto-detalhe-info"></div>
            `);
        }
        
        // Move elementos para produto-detalhe-info (somente se não estiverem lá)
        if ($('.produto .produto-detalhe-info .info-principal-produto').length === 0) {
            $('.produto .produto-detalhe-info').append($('.pagina-produto .produto div.principal .info-principal-produto'));
        }
        if ($('.produto .produto-detalhe-info .produto-detalhe').length === 0) {
            $('.produto .produto-detalhe-info').append($('.produto-detalhe'));
        }
        if ($('.produto .produto-detalhe-info .append-share-fav').length === 0) {
            $('.produto .produto-detalhe-info').append($('.pagina-produto .produto div.principal .append-share-fav'));
        }

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
        
        if ($('#principal-konfidency').length === 0) {
            $('.pagina-produto .produto div.principal').after(`
                <div id="principal-konfidency">
                    <img src="https://cdn.awsli.com.br/2830/2830294/arquivos/konfi.png" alt="Konfidency"/>
                    <div>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <p><strong>Nota 5.0</strong> baseado em +1000 avaliações</p>
                </div>
                `);
        }

        $('.canais-contato ul li.hidden-phone').append(`
            <div class="append-content-sup">
                <div class="info-section">
                    <span class="titulo">Atendimento</span>
        
                    <div class="atendimento-float">
                    <img alt="Horário de atendimento" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-clock.svg"/>
                    <div>
                        <strong>Horário de atendimento</strong>
                        <span>Todos os dias, das 09h às 22h</span>
                    </div>
                    </div>
        
                    <div class="mensagem-float">
                    <strong>Envie uma mensagem:</strong>
                    <div>
                        <img alt="Envie uma mensagem" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-mail.svg"/>
                        <div>
                        <a href="mailto:contato@playce.com.br">contato@playce.com.br</a>
                        <span> Playce - Games e Gift cards </span>
                        </div>
                    </div>
                    </div>
        
                    <div class="whats-float">
                    <img alt="WhatsApp" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-whats.svg"/>
                    <div>
                        <strong>Estamos no WhatsApp:</strong>
                        <a href="https://wa.me/556199627041?text=Ol%C3%A1!%20Preciso%20de%20suporte.%20Pode%20me%20ajudar%3F" target="_blank">(61) 9962-7041</a>
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
                                    <span>Todos os dias, das 09h às 22h</span>
                                </div>
                                </div>
                    
                                <div class="mensagem-float">
                                <strong>Envie uma mensagem:</strong>
                                <div>
                                    <img alt="Envie uma mensagem" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-mail.svg"/>
                                    <div>
                                    <a href="mailto:contato@playce.com.br">contato@playce.com.br</a>
                                    <span> Playce - Games e Gift cards </span>
                                    </div>
                                </div>
                                </div>
                    
                                <div class="whats-float">
                                <img alt="WhatsApp" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-whats.svg"/>
                                <div>
                                    <strong>Estamos no WhatsApp:</strong>
                                    <a href="https://wa.me/556199627041?text=Ol%C3%A1!%20Preciso%20de%20suporte.%20Pode%20me%20ajudar%3F" target="_blank">(61) 9962-7041</a>
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

        $('body').append(`
            <div class="floating-bar">
              <a class="floating-bar-item contact-float" style="cursor: pointer;">
                <span class="icon-contato"></span>
                <span class="floating-bar-label">Contato</span>
              </a>
              <a class="floating-bar-item" href="https://www.playce.com.br/conta/login" onclick="window.location.href='/conta/login'; return false;">
                <span class="icon-conta"></span>
                <span class="floating-bar-label">Conta</span>
              </a>
              <a class="floating-bar-item" href="https://www.playce.com.br/conta/pedido/listar" onclick="window.location.href='/conta/pedido/listar'; return false;">
                <span class="icon-pedidos"></span>
                <span class="floating-bar-label">Meus códigos</span>
              </a>
              <!--<a class="floating-bar-item" href="https://www.playce.com.br/favoritos">
                <span class="icon-favoritos"></span>
                <span class="floating-bar-label">Favoritos</span>
              </a>-->
              <a class="floating-bar-item search-bar" href="#">
                <span class="icon-buscar"></span>
                <span class="floating-bar-label">Buscar</span>
              </a>
            </div>
        `);

        $('.search-bar').on('click', function () {
            $('.busca #form-buscar input#auto-complete').focus();
        });


        if ($('#cabecalho .sign-up-header').length === 0) {
            $('#cabecalho .span3 > .logo').after(`
                <div class="sign-up-header">
                    <a href="https://www.playce.com.br/conta/login">
                        <i class="user"></i>
                    </a>
                </div>    
            `);
        }
        
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
                      <span>Todos os dias, das 09h às 22h</span>
                    </div>
                  </div>
        
                  <div class="mensagem-float">
                    <strong>Envie uma mensagem:</strong>
                    <div>
                      <img alt="Envie uma mensagem" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-mail.svg"/>
                      <div>
                        <a href="mailto:contato@playce.com.br">contato@playce.com.br</a>
                        <span> Playce - Games e Gift cards </span>
                      </div>
                    </div>
                  </div>
        
                  <div class="whats-float">
                    <img alt="WhatsApp" src="https://cdn.awsli.com.br/2830/2830294/arquivos/float-whats.svg"/>
                    <div>
                      <strong>Estamos no WhatsApp:</strong>
                      <a href="https://wa.me/556199627041?text=Ol%C3%A1!%20Preciso%20de%20suporte.%20Pode%20me%20ajudar%3F" target="_blank">(61) 9962-7041</a>
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
            <div class="chave-digital"><img src="https://cdn.awsli.com.br/2775/2775575/arquivos/envelope-red.svg" alt="Código digital"/>Código digital</div>
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

    if ($('.produto .principal > .acoes-produto .add-cart-product').length === 0) {
        $('.produto .principal > .acoes-produto .comprar .botao.principal').clone().text('Adicionar ao carrinho').addClass('add-cart-product botao-comprar-ajax').appendTo($('.produto .principal > .acoes-produto'));
    }

// Estrutura para múltiplas categorias, cada uma com seu próprio FAQ e título customizável
var faqsPorCategoria = [
    {
        id: '2338722', // Exemplo de ID de categoria
        titulo: "PlayStation", // Título customizável para esta categoria
        faqs: [
            {
                pergunta: "O que é um Gift Card da PlayStation Store?",
                resposta: "Um Gift Card da PlayStation Store é um cartão pré-pago que pode ser utilizado para adicionar créditos à sua conta PlayStation, permitindo a compra de jogos, assinaturas e outros conteúdos digitais."
            },
            {
                pergunta: "Como posso resgatar um Gift Card da PlayStation Store?",
                resposta: "<ol><li>No console PlayStation 4 ou PlayStation 5:<ol type='a'><li>Acesse a PlayStation Store no menu principal.</li><li>Selecione 'Resgatar Códigos'.</li><li>Digite o código do Gift Card e siga as instruções.</li></ol></li><li>Pela web ou aplicativo do PlayStation App:<ol type='a'><li>Faça login na sua conta PlayStation.</li><li>No menu, selecione 'Resgatar Códigos'.</li><li>Digite o código de 12 dígitos do cartão.</li></ol></li></ol>"
            },
            {
                pergunta: "Onde posso comprar Gift Cards da PlayStation Store?",
                resposta: "Você pode adquirir Gift Cards em lojas físicas, supermercados, lojas online ou diretamente em revendedores autorizados."
            },
            {
                pergunta: "Posso usar um Gift Card para comprar assinaturas do PlayStation Plus?",
                resposta: "Sim, os créditos adicionados à sua conta com o Gift Card podem ser usados para adquirir assinaturas do PlayStation Plus."
            },
            {
                pergunta: "É possível comprar moedas virtuais de jogos, como V-Bucks do Fortnite, com um Gift Card?",
                resposta: "Sim, após resgatar o Gift Card, você pode usar o saldo para comprar moedas virtuais de diversos jogos disponíveis na PlayStation Store."
            }
        ]
    },
    // Adicione outros objetos de categoria conforme necessário, mudando o id, o título e as perguntas/respostas
];

// Função para criar o HTML do FAQ, agora aceita o título como parâmetro
function criarFaqHtml(faqs, titulo) {
    var html = '<div class="faq-categoria"><h2>' + (titulo || 'Perguntas Frequentes') + '</h2>';
    faqs.forEach(function(faq, idx) {
        html += `
        <div class="faq-item">
            <button class="faq-pergunta" type="button" aria-expanded="false" aria-controls="faq-resposta-${idx}">${faq.pergunta}</button>
            <div class="faq-resposta" id="faq-resposta-${idx}" style="display:none;">${faq.resposta}</div>
        </div>
        `;
    });
    html += '</div>';
    return html;
}

// Insere o FAQ em cada categoria definida, usando o título customizável se existir
faqsPorCategoria.forEach(function(cat) {
    var seletor = '.categoria-' + cat.id + ' .secao-principal .conteudo.span9';
    if ($(seletor).length > 0) {
        // Evita duplicação
        if ($(seletor + ' .faq-categoria').length === 0) {
            $(seletor).append(criarFaqHtml(cat.faqs, cat.titulo));
        }
    }
});

// Evento para abrir/fechar as respostas
$(document).on('click', '.faq-pergunta', function() {
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


// =====================================================
// FINALIZAÇÃO DO PEDIDO
// =====================================================

$(document).ready(function(){

$('.pedido-finalizado .cabecalho-interno').append(`
<div class="right-order">
<div class="right-container">
    <strong class="order-title">Pedido #</strong>
</div>
</div>
`);

$('.order-title').append($('.numero-pedido'));

$(document).ready(function () {
// Procura o texto "Aguardando pagamento" dentro da área do pedido finalizado
var aguardandoPagamento = $('.pedido-finalizado')
.find('span')
.filter(function () {
    return $(this).text().toLowerCase().includes('aguardando pagamento');
});

if (aguardandoPagamento.length) {
// Adiciona a classe no body
$('body').addClass('aguardando-pedido');

// HTML que será inserido
var statusHtml = `
    <div class="order-status aguardando-pagamento">
    <span>Status</span>
    <strong>Aguardando Pagamento</strong>
    </div>
`;

// Insere no right-container (evita duplicar)
if (!$('.right-container .order-status').length) {
    $('.right-container').append(statusHtml);
}
}
});

$(document).ready(function () {
var $table = $('.resumo-compra table');

if (!$table.length || !$('.right-container').length) return;

var productsHtml = '';

// =========================
// PRODUTOS
// =========================
$table.find('tbody tr').each(function () {
var $row = $(this);

var $img = $row.find('.imagem img');
var $info = $row.find('.produto-info');
var $price = $row.find('.preco-produto strong');

// Só processa linha de produto
if (!$info.length) return;
    
    var image = $img.attr('src') || '';
    var title = $info
                            .clone()               
                            .find('.sku, small, br')
                            .remove()              
                            .end()
                            .text()
                            .replace(/sku[:\s]*\w+/i, '')
                            .trim();
    var quantity = $row.find('td').eq(2).text().trim();
    var price = $price.text().trim();

productsHtml += `
    <div class="product-card">
    <div class="product-top">
        <img src="${image}" alt="${title}">
        <div class="product-title">${title}</div>
    </div>
    <div class="product-bottom">
        <span>Quantidade: ${quantity}</span>
        <strong>${price}</strong>
    </div>
    </div>
`;
});

// =========================
// RESUMO
// =========================
var subtotal = $table.find('.subtotal strong').text().trim();
var frete = $table.find('.frete-preco')
.text()
.replace(/valor\s*envio[:\s]*/i, '')
.trim();
var total = $table.find('.total strong').text().trim();

var resumeHtml = `
<h3>Resumo</h3>
<div class="resume-card">

    <div class="resume-row">
    <span>Subtotal</span>
    <strong>${subtotal}</strong>
    </div>

    <div class="resume-row">
    <span>Valor do envio</span>
    <strong>${frete}</strong>
    </div>

    <div class="resume-row total">
    <span>Total</span>
    <strong>${total}</strong>
    </div>
</div>
`;

// =========================
// INSERÇÃO FINAL
// =========================
if (!$('.right-container .order-summary-custom').length) {
$('.right-container').append(`
    <div class="order-summary-custom">
    ${productsHtml}
    ${resumeHtml}
    </div>
`);
}
});

$('.right-order').append(`

<div class="order-info">
<div class="order-info-item">
    <i><img src="https://cdn.awsli.com.br/2830/2830294/arquivos/hand_package.svg" alt="Envio por e-mail"></i><span>O código do seu pedido será enviado por <strong>e-mail</strong>.</span>
</div>
<div class="order-info-item">
    <i><img src="https://cdn.awsli.com.br/2830/2830294/arquivos/package_2.svg" alt="Envio por e-mail"></i><span>Você pode acessar o seu código na página <strong>Meus pedidos</strong>.</span>
</div>
</div>

`);

// =========================
// DADOS COMUNS
// =========================
var orderId = $('.numero-pedido')
.text()
.replace(/\D/g, '')
.trim();

if (!orderId) return;

var orderUrl = `https://www.playce.com.br/conta/pedido/${orderId}/listar_reduzido`;

// =====================================================
// PEDIDO PAGO (alert-success)
// =====================================================
var $successAlert = $('.status-pagamento .alert-success #mensagemPago');

if ($successAlert.length && !$successAlert.next('.acessar-pedido-wrapper').length) {
$successAlert.after(`
    <div class="acessar-pedido-wrapper pedido-pago">
    <a href="${orderUrl}" class="botao principal acessar-pedido">
        Acessar pedido
    </a>
    <p class="acessar-pedido-texto">
        Você pode acompanhar os detalhes do seu pedido a qualquer momento.
    </p>
    </div>
`);
}

// =====================================================
// PEDIDO ENVIADO
// =====================================================
var $tituloStatus = $('.status-pagamento .mensagem h3');

if ($tituloStatus.length && $tituloStatus.text().toLowerCase().includes('pedido enviado')) {

    var $pedidoEnviadoAlert = $('.status-pagamento p.lead');

    if ($pedidoEnviadoAlert.length && !$pedidoEnviadoAlert.next('.acessar-pedido-wrapper').length) {
        $pedidoEnviadoAlert.after(`
            <div class="acessar-pedido-wrapper pedido-pago">
                <a href="${orderUrl}" class="botao principal acessar-pedido">
                    Acessar pedido
                </a>
                <p class="acessar-pedido-texto">
                    Você pode acompanhar os detalhes do seu pedido a qualquer momento.
                </p>
            </div>
        `);
    }

}

// =====================================================
// PEDIDO ENTREGUE (alert-warning)
// =====================================================
var $mensagem = $('.status-pagamento .alert.alert-warning .mensagem');
var titulo = $mensagem.find('h3').text().trim().toLowerCase();

if ($mensagem.length && titulo.includes('pedido entregue')) {

// =========================
// NOVO: ALTERA TEXTO DO .lead
// =========================
    $mensagem.find('.lead')
    .addClass('entregue')
    .html(`
    <span>
        Seu pedido foi entregue.<br>
        <strong>Acesse o código clicando no botão abaixo.</strong>
    </span>
    `);

// =========================
// BOTÃO (mantém o que já existia)
// =========================
if (!$mensagem.next('.acessar-pedido-wrapper').length) {
    $mensagem.after(`
    <div class="acessar-pedido-wrapper pedido-entregue">
        <a href="${orderUrl}" class="botao principal acessar-pedido">
        Acessar pedido
        </a>
        <p class="acessar-pedido-texto">
        Este pedido já foi entregue. Você pode consultar os detalhes sempre que quiser.
        </p>
    </div>
    `);
}
}

$('.alert').each(function () {
    var $alert = $(this);
    var textoH3 = $alert.find('h3').text().trim();

    if (textoH3.toLowerCase() === 'pedido enviado') {
      $alert.addClass('p-enviado');
    }
  });

});

$(document).ready(function () {

/* =====================================================
    ESTRUTURA DOS FILTROS
===================================================== */
$('.conteudo .ordenar-listagem.topo .row-fluid').after(`
    <div class="filter-pg-cat">
        <div class="filter-row">
            <div class="filter-group filtro-plataforma" data-title="Plataforma">
                <button class="filter-btn">Plataforma <span class="arrow"></span></button>
                <div class="drop-cat"></div>
            </div>

            <div class="filter-group filtro-tipo" data-title="Tipo">
                <button class="filter-btn">Tipo <span class="arrow"></span></button>
                <div class="drop-cat"></div>
            </div>

            <div class="filter-group filtro-marca" data-title="Por marcas">
                <button class="filter-btn">Marcas <span class="arrow"></span></button>
                <div class="drop-cat"></div>
            </div>

            <div class="filter-group filtro-preco" data-title="Filtrar por preço">
                <button class="filter-btn">Preço <span class="arrow"></span></button>
                <div class="drop-cat"></div>
            </div>
        </div>
    </div>
`);

/* =====================================================
    MOVE OS ITENS
===================================================== */
$('.menu.lateral.outras ul.nivel-um > li').appendTo($('.filtro-plataforma .drop-cat'));
$('.menu.lateral:not(.outras) ul.nivel-dois > li').appendTo($('.filtro-tipo .drop-cat'));

var $marcas = $('.faceta-marca .atributo-lista ul > li');
$marcas.length
    ? $marcas.appendTo($('.filtro-marca .drop-cat'))
    : $('.filtro-marca .drop-cat').append('<span class="sem-resultado">Nenhuma marca encontrada</span>');

var $precos = $('.faceta-preco .atributo-lista ul > li');
$precos.length
    ? $precos.appendTo($('.filtro-preco .drop-cat'))
    : $('.filtro-preco .drop-cat').append('<span class="sem-resultado">Nenhum preço encontrado</span>');

/* =====================================================
    HEADER MOBILE DOS DROPS
===================================================== */
function montarHeaderMobile() {
    if ($(window).width() >= 768) return;

    $('.filter-group').each(function () {
        var $drop = $(this).find('.drop-cat');
        if ($drop.find('.drop-header').length) return;

        $drop.prepend(`
            <div class="drop-header">
                <span class="drop-title">${$(this).data('title')}</span>
                <button class="drop-close">
                    <img src="https://cdn.awsli.com.br/2830/2830294/arquivos/close.svg" alt="fechar">
                </button>
            </div>
        `);
    });
}

montarHeaderMobile();

/* =====================================================
    DROPDOWN MOBILE — TOGGLE REAL
===================================================== */
$(document).on('click', '.filter-btn', function (e) {

    if ($(window).width() < 768) {
        e.preventDefault();

        var $drop = $(this).closest('.filter-group').find('.drop-cat');
        var isOpen = $drop.hasClass('drop-active');

        // fecha todos
        $('.drop-cat')
            .removeClass('drop-active drop-show')
            .css('display', 'none');

        // abre somente se não estava aberto
        if (!isOpen) {
            $drop
                .css('display', 'block')
                .addClass('drop-active');

            setTimeout(function () {
                $drop.addClass('drop-show');
            }, 10);
        }
    }
});

// Fechar pelo botão X
$(document).on('click', '.drop-close', function () {

    var $drop = $(this).closest('.drop-cat');

    $drop.removeClass('drop-show');

    setTimeout(function () {
        $drop
            .removeClass('drop-active')
            .css('display', 'none');
    }, 300);
});

/* =====================================================
    CHIPS (DESKTOP + MOBILE)
===================================================== */
var $tituloPagina = $('.ordenar-listagem.topo .row-fluid h1.titulo');

if (!$('.filtros-ativos-desktop').length) {
    $tituloPagina.after('<div class="filtros-ativos filtros-ativos-desktop"></div>');
}

if (!$('.filtros-ativos-mobile').length) {
    $('.filter-pg-cat').prepend('<div class="filtros-ativos filtros-ativos-mobile"></div>');
}

function montarFiltrosAtivosPagina() {

    var isMobile = $(window).width() < 768;
    var $container = isMobile
        ? $('.filtros-ativos-mobile')
        : $('.filtros-ativos-desktop');

    $('.filtros-ativos').empty();

    var totalAtivos = 0;

    $('.filter-pg-cat .drop-cat li.active').each(function () {
        var texto = $(this).find('label, a').first().text().trim();
        var href = $(this).find('a').attr('href');
        if (!href) return;

        totalAtivos++;

        $container.append(`
            <div class="filtro-chip" data-href="${href}">
                <span>${texto}</span>
                <button class="remover-filtro">
                    <img src="https://cdn.awsli.com.br/2830/2830294/arquivos/close.svg">
                </button>
            </div>
        `);
    });

    if (totalAtivos > 0) {
        $container.append('<button class="limpar-todos-filtros">Limpar todos</button>');
    }
}

montarFiltrosAtivosPagina();

/* =====================================================
    AÇÕES DOS CHIPS
===================================================== */
$(document).on('click', '.remover-filtro', function (e) {
    e.preventDefault();
    var href = $(this).closest('.filtro-chip').data('href');
    if (href) window.location.href = href;
});

$(document).on('click', '.limpar-todos-filtros', function (e) {
    e.preventDefault();
    window.location.href = window.location.pathname;
});

/* =====================================================
    RESIZE
===================================================== */
$(window).on('resize', function () {
    montarHeaderMobile();
    montarFiltrosAtivosPagina();
});

/* =====================================================
    ALTERA TEXTO DO CARRINHO
===================================================== */

function verificarEdicaoCliente() {
    
    if ($('.cliente-editar-dados-link:visible').length) {

        $('#formularioEndereco')
            .closest('fieldset')
            .find('legend.titulo.cor-secundaria')
            .text('Escolha a forma de envio')
            .addClass('titulo-editando');

    }
}

// roda ao carregar
$(document).ready(function () {
    verificarEdicaoCliente();
});

// roda novamente caso a página altere via ajax/dinâmico (checkout costuma fazer isso)
$(document).ajaxComplete(function () {
    verificarEdicaoCliente();
});

$('#principal-konfidency').append('<div class="konfidency-store-review" data-type="horizontal" data-color="light"></div>');

});

$(document).ready(function () {

    function getTotalCarrinho() {
      let texto = $('.preco-carrinho-total').text();
  
      let valor = texto.replace('R$', '')
        .replace(/\./g, '')
        .replace(',', '.')
        .trim();
  
      return parseFloat(valor) || 0;
    }
  
    function abrirModalLimite() {
      if ($('#modal-limite-boleto').length) return;
  
      $('body').append(`
        <div id="modal-limite-boleto" style="
          position: fixed;
          top:0; left:0;
          width:100%; height:100%;
          background: rgba(0,0,0,0.6);
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:9999;
        ">
          <div style="
            background:#fff;
            padding:20px;
            border-radius:8px;
            max-width:400px;
            text-align:center;
          ">
            <h3>Limite do Boleto</h3>
            <p>O valor máximo para pagamento via boleto é de <strong>R$ 600,00</strong>.</p>
            <button id="fechar-modal-boleto" style="
              margin-top:15px;
              padding:10px 20px;
              cursor:pointer;
            ">Entendi</button>
          </div>
        </div>
      `);
    }
  
    function verificarBoleto(dispararModal = false) {
      let boletoSelecionado = $('#radio-proxy-pagali-v2-boleto-74').is(':checked');
      let total = getTotalCarrinho();
  
      let $botaoFinalizar = $('.campos-pedido .acao-editar button:first-child');
  
      // Salva texto original só uma vez
      if (!$botaoFinalizar.data('texto-original')) {
        $botaoFinalizar.data('texto-original', $botaoFinalizar.text());
      }
  
      if (boletoSelecionado && total > 600) {
  
        if (dispararModal) {
          abrirModalLimite();
        }
  
        $botaoFinalizar
          .prop('disabled', true)
          .text('Limite máximo no boleto R$ 600')
          .css({
            opacity: 0.5,
            cursor: 'not-allowed'
          });
  
        if ($('#btn-voltar-carrinho').length === 0) {
          $botaoFinalizar.after(`
            <a id="btn-voltar-carrinho" class="botao" style="
              margin-left:10px;
              padding:10px 15px;
              cursor:pointer;
              background: #f1f1f1;
              color: #000!important;
            ">
              Alterar quantidade
            </a>
          `);
        }
  
      } else {
  
        // Sempre volta pro texto original ao sair do boleto
        $botaoFinalizar
          .prop('disabled', false)
          .text($botaoFinalizar.data('texto-original'))
          .css({
            opacity: '',
            cursor: ''
          });
  
        $('#btn-voltar-carrinho').remove();
      }
    }
  
    $(document).on('click', '#fechar-modal-boleto', function () {
      $('#modal-limite-boleto').remove();
    });
  
    $(document).on('click', '#btn-voltar-carrinho', function () {
      window.location.href = './carrinho/index';
    });
  
    $(document).on('change', 'input[name="forma_pagamento"]', function () {
      let isBoleto = $('#radio-proxy-pagali-v2-boleto-74').is(':checked');
      verificarBoleto(isBoleto);
    });
  
    verificarBoleto(false);
  
  });