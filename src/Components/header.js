import react from "react";

function Header() {
  const user = localStorage.getItem("currentUser");

  return (
    <div className="bg-pink-200 sticky top-0 flex m-3 p-3 justify-between">
      <div className="flex space-x-5">
        <a href="/">
          <div>Дагина</div>
        </a>
        <a href="/sormuus">Сормуус</a>
        <a href="/manicure">Маникюр</a>
        <a href="/vaks">Вакс</a>
      </div>
      {!user ? (
        <div>
          <a href="/login">Нэвтрэх</a>
        </div>
      ) : (
        <div className="space-x-2">
          <a href="/zahialga">Захиалга</a>
          <button
            onClick={() => {
              localStorage.removeItem("currentUser");
              window.location.reload();
            }}
          >
            Гарах
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
