function buscarClima() {
  const cidade = document.getElementById("cidade").value;
  const loadingElement = document.getElementById("loading");
  loadingElement.style.display = "block";
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=113e086b43234d183feef7d344612aab&lang=pt`)
    .then((response) => response.json())
    .then((data) => {
      let temperatura = (data.main.temp - 273.15).toFixed(2); // Converte para Celsius
      let descricao = data.weather[0].description;
      document.getElementById(
        "temperatura"
      ).textContent = `Temperatura: ${temperatura}°C`;
      document.getElementById(
        "descricao"
      ).textContent = `Descrição: ${descricao}`;
      loadingElement.style.display = "none";
    })
    .catch((error) => {
      console.log("Erro:", error);
      alert("Erro ao buscar dados. Tente novamente.");
      loadingElement.style.display = "none";
    });
}
// async function buscarClima() {
//   const cidade = document.getElementById("cidade").value;
//   const loadingElement = document.getElementById("loading");
//   loadingElement.style.display = "block";
//   try {
//     const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=113e086b43234d183feef7d344612aab`);
//     const dados = await resposta.json();
//     let temperatura = (dados.main.temp - 273.15).toFixed(2); // Converte para Celsius
//     let descricao = dados.weather[0].description;document.getElementById("temperatura").textContent = `Temperatura: ${temperatura}°C`;
//     document.getElementById("descricao").textContent = `Descrição: ${descricao}`;
//   } catch (erro) {
//     console.log("Erro:", erro);
//     alert("Erro ao buscar dados. Tente novamente.");
//   } finally {
//     loadingElement.style.display = "none"; // Sempre esconde o loading
//   }
// }
