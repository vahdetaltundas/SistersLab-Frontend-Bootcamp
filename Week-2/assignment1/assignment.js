const pokemons = [
    { id: 3, name: 'Bulbasaur', type: 'Grass', experience: 64 },
    { id: 7, name: 'Charmander', type: 'Fire', experience: 52 },
    { id: 13, name: 'Squirtle', type: 'Water', experience: 63 },
    { id: 56, name: 'Caterpie', type: 'Bug', experience: 39 },
    { id: 1408, name: 'Ekans', type: 'Poison', experience: 58 },
    { id: 63, name: 'Eevee', type: 'Normal', experience: 65 },
    { id: 27, name: 'Pikachu', type: 'Electric', experience: 112 },
    { id: 31, name: 'Pidgey', type: 'Flying', experience: 50 },
    { id: 21, name: 'Meowth', type: 'Normal', experience: 58 },
    { id: 22, name: 'Snorlax', type: 'Normal', experience: 154 },
    { id: 35, name: 'Psyduck', type: 'Water', experience: 54 },
    { id: 35, name: 'Deneme', type: 'Electric', experience: 54 },
  ];
  
  //Yukarıdaki dizi içinde bulunan "Water" türündeki Pokemonları `filter` kullanarak filtrelemek istiyoruz.
  //Filtreleme işlemi sonucunda kaç "Water" türündeki Pokemon olduğunu ve bu Pokemon'ların isimlerini bulmanız gerekiyor.
  const pokemonWater=pokemons.filter((pokemon)=>pokemon.type==="Water");
  console.log(`"Water" türündeki Pokemon sayısı: ${pokemonWater.length}`);
  console.log(`"Water" türündeki Pokemon isimleri: ${pokemonWater.map((pokemon)=>pokemon.name)} `);
  
  //Yukarıdaki dizide bulunan her bir Pokemon'un deneyim puanını 2 katına çıkarmak ve bu işlem sonucunda yeni bir dizi oluşturmak istiyorsunuz.
  //Bu yeni dizi, her Pokemon'un adını ve yeni deneyim puanını içermelidir.
  const doubledExperience=pokemons.map((pokemon)=>{
    return [{"Name":pokemon.name},{"Experience":pokemon.experience*2}];
  })
  console.log(doubledExperience);
  
  //Pokemon dizisinde, tüm "Water" türündeki Pokemonlar deneyim puanlarının en az 60 olduğu bir koşulu karşılıyor mu ?
  // Ayrıca, "Fire" türündeki Pokemonlar içinden en az birinin deneyim puanı 70 veya daha fazla mı ?
  // Bu iki koşulu kontrol eden ve sonuçları ekrana yazdıran bir kod yazın.
  
  const allWaterPokemonsHighExperience=pokemonWater.filter((pokemon)=>pokemon.experience<60)
  console.log(
    `Tüm 'Water' türündeki Pokemonlar deneyim puanı en az 60 mı? 
    ${pokemonWater.length==allWaterPokemonsHighExperience.length ? "evet":"hayır"}`
  );


  const pokemonFire=pokemons.filter((pokemon)=>pokemon.type=="Fire");
  const someFirePokemonHighExperience=pokemonFire.find((pokemon)=>pokemon.experience>70);
  console.log(
    `'Fire' türündeki Pokemonlardan en az biri deneyim puanı 70 veya daha fazla mı?
    ${(someFirePokemonHighExperience)?"var":"yok"}`
  );
  
  //Pokemon dizisinde bulunan "Electric" türündeki Pokemon'ların deneyim puanlarının toplamını
  // kullanarak hesaplamak istiyorsunuz.
  
  const totalElectricExperience=pokemons.reduce((accumulator, currentValue)=>{
    if(currentValue.type=="Electric"){
        return accumulator+currentValue.experience;
    }
    else
        return accumulator
  },accumulator=0)

  console.log(
    "Electric türündeki Pokemon'ların toplam deneyim puanı: " +
      totalElectricExperience
  );
  
  //Pokemon dizisinde, her türdeki Pokemon'ların deneyim puanlarının ortalamasını hesaplamak istiyorsunuz.
  const typeExperienceAverages=pokemons.reduce((accumulator, currentValue)=> accumulator+currentValue.experience,accumulator=0)/pokemons.length;
  
  console.log(`Pokemon deneyim puanları ortalaması = ${typeExperienceAverages} yuvarlanmış hali ${Math.ceil(typeExperienceAverages)}`);