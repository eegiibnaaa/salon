import react from "react";

function Header() {
  return (
    <div className="bg-pink-200 sticky top-0 flex m-3 p-3 justify-between">
      <div className="flex space-x-5">
        <a href="/">
          <div>Дагина</div>
        </a>
        <a href="/uilchilgee">Сормуус</a>
        <a href="/uilchilgee">Маникюр</a>
        <a href="/uilchilgee">Вакс</a>
      </div>
      <div>
        <a href="/zahialga">Захиалга</a>
      </div>
    </div>
  );
}

export default Header;
