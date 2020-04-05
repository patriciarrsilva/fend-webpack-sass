function handleClick() {
  const getData = async (url) => {
    const response = await fetch(url);

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  getData(
    'https://api.openweathermap.org/data/2.5/weather?zip=99554,us&appid=53cf82947a1f90b5b4a94bda52fd24b6'
  ).then((data) => {
    document.getElementById('temp').innerHTML = data.main.temp;
  });
}

export { handleClick };
