// 1. Ta fram brödet ur påsen
function getToast(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const el = "<p>1. Bröd framtaget</p>";
      document.querySelector("body").insertAdjacentHTML("beforeend", el);
      resolve();
    }, time);
  });
}
// 2. Rosta
function toast(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const el = "<p>2. Brödet rostat</p>";
      document.querySelector("body").insertAdjacentHTML("beforeend", el);
      resolve();
    }, time);
  });
}
// 3. Smöra mackan
function butter(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const el = "<p>3. Toasten smörad</p>";
      document.querySelector("body").insertAdjacentHTML("beforeend", el);
      resolve();
    }, time);
  });
}
// 4 Lägg på en skiva ost
function cheese(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const el = "<p>4. Osten pålagd</p>";
      document.querySelector("body").insertAdjacentHTML("beforeend", el);
      resolve();
    }, time);
  });
}

async function makeToast() {
  try {
    await getToast(1000);
    await toast(3000);
    await butter(2000);
    await cheese(1000);
  } catch (err) {
    console.error(err);
  }
}
makeToast();
