//设置__webpack_public_path__
const $path = document.querySelector('meta[name="AppPublic"]');
const $content = ($path as Element)
  ? ($path as Element).getAttribute('content')
  : null;

__webpack_public_path__ = $content || '/';
