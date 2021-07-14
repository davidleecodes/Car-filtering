import React, { useState, useEffect } from "react";

export default function Search({ getSetData, getSetOptions, options }) {
  const defaultSearch = {
    make: "",
    model: "",
    year: "",
    max: "",
  };
  const [searchQuery, setSearchQuery] = useState(defaultSearch);

  useEffect(() => {
    if (options && options.models.length === 0) {
      let query = { ...defaultSearch, make: searchQuery.make };
      setSearchQuery(query);
      getSetOptions(query);
    }
  }, [options]);

  function handleChange(e) {
    let query = { ...searchQuery, [e.target.name]: e.target.value };
    setSearchQuery(query);
    getSetOptions(query);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getSetData(searchQuery);
    setSearchQuery(defaultSearch);
    getSetOptions({});
  }
  return (
    <div>
      <div className="search_container">
        <div className="search_group">
          <div className="select_field">
            <label>Make</label>
            <select
              id="makes"
              name="make"
              value={searchQuery.make}
              onChange={handleChange}
            >
              <option value="">All makes</option>
              <optgroup label="Popular makes">
                <option value="acura">Acura</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="buick">Buick</option>
                <option value="cadillac">Cadillac</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="chrysler">Chrysler</option>
                <option value="dodge">Dodge</option>
                <option value="ford">Ford</option>
                <option value="gmc">GMC</option>
                <option value="honda">Honda</option>
                <option value="hyundai">Hyundai</option>
                <option value="infiniti">INFINITI</option>
                <option value="jaguar">Jaguar</option>
                <option value="jeep">Jeep</option>
                <option value="kia">Kia</option>
                <option value="land_rover">Land Rover</option>
                <option value="lexus">Lexus</option>
                <option value="lincoln">Lincoln</option>
                <option value="mazda">Mazda</option>
                <option value="mercedes_benz">Mercedes-Benz</option>
                <option value="mitsubishi">Mitsubishi</option>
                <option value="nissan">Nissan</option>
                <option value="porsche">Porsche</option>
                <option value="ram">RAM</option>
                <option value="subaru">Subaru</option>
                <option value="tesla">Tesla</option>
                <option value="toyota">Toyota</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="volvo">Volvo</option>
              </optgroup>
              <optgroup label="Other makes">
                <option value="ac">AC</option>
                <option value="alfa_romeo">Alfa Romeo</option>
                <option value="am_general">Am General</option>
                <option value="american_motors">American Motors</option>
                <option value="aston_martin">Aston Martin</option>
                <option value="austin_healey">Austin-Healey</option>
                <option value="bentley">Bentley</option>
                <option value="bugatti">Bugatti</option>
                <option value="datsun">Datsun</option>
                <option value="detomaso">DeTomaso</option>
                <option value="delorean">Delorean</option>
                <option value="eagle">Eagle</option>
                <option value="fiat">FIAT</option>
                <option value="ferrari">Ferrari</option>
                <option value="fisker">Fisker</option>
                <option value="genesis">Genesis</option>
                <option value="geo">Geo</option>
                <option value="hudson">Hudson</option>
                <option value="hummer">Hummer</option>
                <option value="international">International</option>
                <option value="isuzu">Isuzu</option>
                <option value="jensen">Jensen</option>
                <option value="kaiser">Kaiser</option>
                <option value="karma">Karma</option>
                <option value="koenigsegg">Koenigsegg</option>
                <option value="lamborghini">Lamborghini</option>
                <option value="lotus">Lotus</option>
                <option value="mg">MG</option>
                <option value="mini">MINI</option>
                <option value="maserati">Maserati</option>
                <option value="maybach">Maybach</option>
                <option value="mclaren">McLaren</option>
                <option value="mercury">Mercury</option>
                <option value="nash">Nash</option>
                <option value="oldsmobile">Oldsmobile</option>
                <option value="opel">Opel</option>
                <option value="packard">Packard</option>
                <option value="pagani">Pagani</option>
                <option value="panoz">Panoz</option>
                <option value="plymouth">Plymouth</option>
                <option value="polestar">Polestar</option>
                <option value="pontiac">Pontiac</option>
                <option value="rolls_royce">Rolls-Royce</option>
                <option value="saab">Saab</option>
                <option value="saturn">Saturn</option>
                <option value="scion">Scion</option>
                <option value="studebaker">Studebaker</option>
                <option value="sunbeam">Sunbeam</option>
                <option value="suzuki">Suzuki</option>
                <option value="triumph">Triumph</option>
                <option value="willys">Willys</option>
                <option value="smart">smart</option>
              </optgroup>
            </select>
          </div>

          <div className="select_field">
            <label>Model</label>
            <select
              id="models"
              name="model"
              value={searchQuery.model}
              onChange={handleChange}
            >
              <option value="">All models</option>
              {options &&
                options.models.map((model) => (
                  <option value={model} key={model}>
                    {model}
                  </option>
                ))}
            </select>
          </div>

          <div className="select_field">
            <label>Year</label>
            <select
              id="year"
              name="year"
              value={searchQuery.year}
              onChange={handleChange}
            >
              <option value="">Any</option>
              {!options && (
                <>
                  <option value="">2021</option>
                  <option value="">2020</option>
                  <option value="">2019</option>
                </>
              )}
              {options &&
                options.years.sort().map((year) => (
                  <option value={year} key={year}>
                    {year}
                  </option>
                ))}
            </select>
          </div>

          <div className="select_field">
            <label>Price</label>
            <select
              id="make-model-max-price"
              name="max"
              value={searchQuery.max}
              onChange={handleChange}
            >
              <option value="">No max price</option>
              <option value="2000">$2,000</option>
              <option value="4000">$4,000</option>
              <option value="6000">$6,000</option>
              <option value="8000">$8,000</option>
              <option value="10000">$10,000</option>
              <option value="15000">$15,000</option>
              <option value="20000">$20,000</option>
              <option value="25000">$25,000</option>
              <option value="30000">$30,000</option>
              <option value="35000">$35,000</option>
              <option value="40000">$40,000</option>
              <option value="45000">$45,000</option>
              <option value="50000">$50,000</option>
              <option value="60000">$60,000</option>
              <option value="70000">$70,000</option>
              <option value="80000">$80,000</option>
              <option value="90000">$90,000</option>
              <option value="100000">$100,000</option>
              <option value="125000">$125,000</option>
              <option value="150000">$150,000</option>
              <option value="175000">$175,000</option>
            </select>
          </div>
        </div>

        <button className="search_btn" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
}
