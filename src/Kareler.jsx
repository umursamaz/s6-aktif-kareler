import React from "react";

// Bu değişkeni YALNIZCA bir state'in ilk değeri olarak kullan.
const kareIdListesi = ["sqA", "sqB", "sqC", "sqD"];

export default function Kareler() {
  // ADIM 1: State'leri burada tanımlayabilirsin.

  const classAdiAl = (id) => {
    /*
    ADIM 2
    Bu bir click handler değil, JSX içinde kullanılan bir yardımcı(helper) fonksiyondur. (aşağıda kullanımına bakabilirsin)
    - Eğer argüman olarak verilen id state'de tutulan id ile eşleşirse, 'active' stringini return etmeli.
    - Diğer durumlar için boş string dönmeli.
    */
    /* return aktifKare === id ? "active" : ""; */
  };

  const aktifEt = (id) => {
    /*
    ADIM 3
    - Bu click handler, tıklandığında aktif kare bilgisini saklayan state'i React'a uygun şekilde güncellemeli.
    - Eğer tıklanan önceden aktifse, aktifliğini kaldırmalıyız. (aktif kare bilgisini saklayan state'i sıfırlayabiliriz)
    */
    /* setAktifKare(aktifKare === id ? null : id); */
  };

  /*
    ADIM 4: 
    - Alttaki kodu yorum içinden çıkar ve map metodu ile nasıl kullanıldıklarını incele. (yorumdan çıkarırken süslü parantezleri silme.)
    - Yorum içinden çıkardıktan sonra sayfada görebiliyor hale geleceksin.
    - 'kareIdListesi' değişkeni yerine, bu bilgiyi en başta bir state'e kaydedip, onu .map() ile kullanmak daha doğru olur.
  */

  return (
    <div className="container">
      <h1>Aktif Kare</h1>
      <div className="squares">
        {/*
        kareIdListesi.map((id) => (
          <div
            key={id}
            data-testid={id}
            className={`square ${classAdiAl(id)}`}
            onClick={() => aktifEt(id)}
          />
        ))*/}
      </div>
    </div>
  );
}
