var userLanguage = typeof userLanguage != 'undefined' ? userLanguage : 'pt-br';

function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}

$(() => {
  $('.language-option').click((e) => {
    switch ($(e.currentTarget).attr('data-name')) {
      case 'pt-br': {
        document.cookie = 'django_language=pt-br; path=/;';
      }
      break;
      case 'en': {
        document.cookie = 'django_language=en; path=/;';
      }
      break;
    }
  });

  if ($(document).width() < 768) {
    $('#sidebarToggleTop').click();
  }

  if (document.cookie.indexOf(`django_language=${userLanguage}`) == -1) {
    document.cookie = `django_language=${userLanguage}; path=/;`;
    location.reload();
  }
});
