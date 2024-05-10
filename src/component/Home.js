import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

function Home() {
  // const [recipe, setRecipe] = useState([]);

  // const fetchApi = async () => {
  //   const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-04-04&sortBy=publishedAt&apiKey=62e8d42905c942a8935fedb1b9f809d3`;
  //   try {
  //     let recipeResponse = await fetch(url);
  //     if (recipeResponse.ok) {
  //       let response = await recipeResponse.json();
  //       setRecipe(response.articles);
  //     } else {
  //       console.error("Failed to fetch data");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchApi();
  // }, []);

    const recipe= [
      {
        "source": {
          "id": null,
          "name": "Feber.se"
        },
        "author": "Hugo Engström",
        "title": "Apple bekräftar förändringar för iPadOS i EU",
        "description": "Snart kommer alternativa app-butiker\n\n\n\n\n\n\nNu har även Appel själv bekräftat att man kommer att implementera samma förändringar i app-ekosystemet för iPadOS som de tidigare gjort för iOS i EU. Detta beslut kommer efter att EU-kommissionens klassificering om a…",
        "url": "https://feber.se/mobil/apple-bekraftar-forandringar-for-ipados-i-eu/467266/",
        "urlToImage": "https://static.feber.se/article_images/58/80/51/588051.jpg",
        "publishedAt": "2024-05-03T07:20:00Z",
        "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+39527 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "Tesla layoffs: Pakistani-origin woman laid off by Elon Musk says it’s ‘Very hard to let go of’ - Hindustan Times",
        "description": "Tesla layoffs: Pakistani-origin woman laid off by Elon Musk says it’s ‘Very hard to let go of’Hindustan Times Tesla Fires Charger Team Amid Hundreds of LayoffsThe New York Times As Questions Swirl Around Tesla's Superchargers, the Race Is On to Fill the Power…",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=173715094",
        "urlToImage": null,
        "publishedAt": "2024-05-03T07:12:52Z",
        "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Frandroid"
        },
        "author": "Marie Lizak",
        "title": "La situation serait chaotique chez Tesla",
        "description": "Alors que Tesla semble traverser une très mauvaise passe, des employés ont pris la parole. Selon eux, travailler pour le constructeur de voitures électriques serait loin d’être rose, voire carrément chaotique.",
        "url": "https://www.frandroid.com/marques/tesla/2011814_la-situation-serait-chaotique-chez-tesla",
        "urlToImage": "https://images.frandroid.com/wp-content/uploads/2024/04/tesla-cybertruck-00001-scaled.jpeg",
        "publishedAt": "2024-05-03T07:05:31Z",
        "content": "Alors que Tesla semble traverser une très mauvaise passe, des employés ont pris la parole. Selon eux, travailler pour le constructeur de voitures électriques serait loin dêtre rose, voire carrément c… [+3946 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Feber.se"
        },
        "author": "Wille Wilhelmsson",
        "title": "Ny Nokia 3210 kan presenteras nästa vecka",
        "description": "Klassisk telefon ser ut att göra en comeback efter 25 år\n\n\n\n\n\n\nDet verkar som om HMD Global, det finska mobilföretaget som idag tillverkar Nokia-mobiler, kommer att presentera en ny version av den klassiska mobiltelefonen Nokia 3210.\n\nDet var den 18 mars som …",
        "url": "https://feber.se/mobil/ny-nokia-3210-kan-presenteras-nasta-vecka/467265/",
        "urlToImage": "https://static.feber.se/article_images/58/80/48/588048.jpg",
        "publishedAt": "2024-05-03T07:00:00Z",
        "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+40524 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Marketscreener.com"
        },
        "author": null,
        "title": "DAIMLER TRUCK : JP Morgan reaffirms its Buy rating",
        "description": "(marketscreener.com) JP Morgan analyst Jose Asumendi maintains his Buy rating on the stock. The target price is unchanged and still at EUR 56.https://www.marketscreener.com/quote/stock/DAIMLER-TRUCK-HOLDING-AG-130552545/news/DAIMLER-TRUCK-JP-Morgan-reaffirms-…",
        "url": "https://www.marketscreener.com/quote/stock/DAIMLER-TRUCK-HOLDING-AG-130552545/news/DAIMLER-TRUCK-JP-Morgan-reaffirms-its-Buy-rating-46619298/",
        "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
        "publishedAt": "2024-05-03T06:47:35Z",
        "content": "Martin Daum, CEO of Daimler Truck, is not afraid of competition from Tesla\r\nMarch 18, 2024 at 12:04 pm EDT"
      },
      {
        "source": {
          "id": null,
          "name": "Hurriyet Daily News"
        },
        "author": "hurriyetdailynews.com",
        "title": "Auto market shrinks 22 percent in April",
        "description": "The combined sales of passenger cars and light commercial vehicles declined by 22.3 percent in April from a year ago to around 76,000 units, the data from the Automotive Distributors’ and Mobility Association (ODMD) showed on May 3.",
        "url": "https://www.hurriyetdailynews.com/auto-market-shrinks-22-percent-in-april-193102",
        "urlToImage": "https://image.hurimg.com/i/hurriyet/75/200x200/663487d98e519ffa68c95a26.jpg",
        "publishedAt": "2024-05-03T06:45:22Z",
        "content": "ISTANBUL\r\nThe combined sales of passenger cars and light commercial vehicles declined by 22.3 percent in April from a year ago to around 76,000 units, the data from the Automotive Distributors and Mo… [+1570 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Mail.ru"
        },
        "author": "Известия",
        "title": "В России появился первый электропикап Tesla Cybertrack",
        "description": "Электрический пикап Tesla Cybertrack впервые привезли в Россию. В Москву автомобиль доставил основатель и руководитель Moscow Tesla Club Алексей Еремчук, говорится в сообщении компании, которое поступило «Известиям» 2 мая.",
        "url": "https://auto.mail.ru/article/92986-v-rossii-poyavilsya-pervyij-elektropikap-tesla-cyb/",
        "urlToImage": "https://resizer.mail.ru/p/2a258ace-9f18-5133-abd4-8bf76114e9f2/AQABti7vDeeILP5Bpk36F3smX3cwS-fMgJWwXL0w0f3d6OyzROSlXrn0Sk89jydU0Fxisb0vyB4RbNpZQp_yfP_H5cs.jpg",
        "publishedAt": "2024-05-03T06:42:24Z",
        "content": "Cybertruck   2023 ,    —  . , 600 ..,   «» 4,1 . ,   550 .    $80 ."
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "finance.yahoo.com",
        "title": "Tesla, Boeing, Visa: Big Names Worth Talking About",
        "description": "In this podcast, Motley Fool host Dylan Lewis and analyst Mason Moser talk about Tesla's down results and up market reaction, how Boeing's backlog insulates it from short-term delivery hiccups, and why Visa's results are boring...and that's A-OK. To catch ful…",
        "url": "https://biztoc.com/x/945b801eeafa3f69",
        "urlToImage": "https://c.biztoc.com/p/945b801eeafa3f69/s.webp",
        "publishedAt": "2024-05-03T06:42:06Z",
        "content": "In this podcast, Motley Fool host Dylan Lewis and analyst Mason Moser talk about Tesla's down results and up market reaction, how Boeing's backlog insulates it from short-term delivery hiccups, and w… [+287 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Interia.pl"
        },
        "author": "Krzysztof Pochłód",
        "title": "Ile producent zarabia na sprzedaży auta? Kwoty szokują",
        "description": "Według najnowszych analiz ekspertów, część producentów samochodów zarabia na swoich produktach imponujące kwoty. Rekordziści są w stanie \"wycisnąć\" przeszło pół miliona złotych od sztuki.",
        "url": "https://motoryzacja.interia.pl/wiadomosci/news-ile-producent-zarabia-na-sprzedazy-auta-kwoty-szokuja,nId,7488568",
        "urlToImage": "https://i.iplsc.com/-/000J23IB8C4G0KY3-C461-F4.jpg",
        "publishedAt": "2024-05-03T06:40:17Z",
        "content": "Ostatnie lata dla brany motoryzacyjnej byy bardzo trudne. Producenci zmagali si najpierw z zaamaniem sprzeday w czasach pandemii, a potem problemami z utrzymaniem acucha dostaw od chwili wybuchu konf… [+2127 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Feber.se"
        },
        "author": "Roger Åberg",
        "title": "Minecraft firar 15 år med nya tavlor",
        "description": "Skapade av Kristoffer som gjorde originalen\n\n\n\n\n\n\nDet är nu femton år sedan Minecraft kom och det börjar bli dags att fräscha upp konsten på väggarna. Idag finns det 26 tavlor i spelet och dessa kommer nu att kompletteras med 20 nya. Fem av dessa är skapade a…",
        "url": "https://feber.se/spel/minecraft-firar-15-ar-med-nya-tavlor/467264/",
        "urlToImage": "https://static.feber.se/article_images/58/80/47/588047.jpg",
        "publishedAt": "2024-05-03T06:40:00Z",
        "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+39048 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Marketscreener.com"
        },
        "author": null,
        "title": "DAIMLER TRUCK : Jefferies gives a Buy rating",
        "description": "(marketscreener.com) Analyst Michael Aspinall from Jefferies research considers the stock attractive and recommends it with a Buy rating. The target price continues to be set at EUR 55.https://www.marketscreener.com/quote/stock/DAIMLER-TRUCK-HOLDING-AG-130552…",
        "url": "https://www.marketscreener.com/quote/stock/DAIMLER-TRUCK-HOLDING-AG-130552545/news/DAIMLER-TRUCK-Jefferies-gives-a-Buy-rating-46619253/",
        "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
        "publishedAt": "2024-05-03T06:39:48Z",
        "content": "Martin Daum, CEO of Daimler Truck, is not afraid of competition from Tesla\r\nMarch 18, 2024 at 12:04 pm EDT"
      },
      {
        "source": {
          "id": null,
          "name": "Hibridosyelectricos.com"
        },
        "author": "Javier Gómara",
        "title": "Uno de los eléctricos no Tesla más interesantes del mercado pronto tendrá una gran actualización",
        "description": "Ya desde el principio, Hyundai y KIA aseguraron que su intención era dominar el mundo eléctrico. Poco a poco los coreanos han ido ampliando su familia con lanzamientos cada vez más interesantes. En KIA el lanzamiento del EV6 marcó un antes y un después. El pr…",
        "url": "https://www.hibridosyelectricos.com/coches/kia-ev6-2025-preview_73910_102.html",
        "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/68/19/44/kia-ev6-2025-delantera_17_2000x1126.jpeg",
        "publishedAt": "2024-05-03T06:36:25Z",
        "content": "Ya desde el principio, Hyundai y KIA aseguraron que su intención era dominar el mundo eléctrico. Poco a poco los coreanos han ido ampliando su familia con lanzamientos cada vez más interesantes. En K… [+3800 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Noupe.com"
        },
        "author": "Ramziya Muhammed",
        "title": "15 Ways to Increase AOV of your Shopify Store",
        "description": "Success in e-commerce revolves around acquiring more customers. However, there may be more efficient strategies than obsessing solely on expanding your customer base. The Average Order Value (AOV) metric unlocks opportunities for greater revenue without const…",
        "url": "https://www.noupe.com/business-online/15-ways-to-increase-aov-of-your-shopify-store.html",
        "urlToImage": "https://www.noupe.com/wp-content/uploads/2024/05/growtika-mlpsHpUUCHY-unsplash.jpg",
        "publishedAt": "2024-05-03T06:20:23Z",
        "content": "Success in e-commerce revolves around acquiring more customers. However, there may be more efficient strategies than obsessing solely on expanding your customer base.\r\nThe Average Order Value (AOV) m… [+8993 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Feber.se"
        },
        "author": "Bobby Green",
        "title": "Två nya modeller från Ferrari",
        "description": "Fokus på V12 på klassiskt vis\n\n\n\n\n\n\n\n\n\n\n\n\nNu rullar Ferrari ut de två nya modellerna Ferrari 12Cilindri och 12Cilindri Spider. Som namnen antyder har bilarna tolv cylindrar och här är det old school som gäller, inget tramsande med hybrid-lösningar och liknand…",
        "url": "https://feber.se/bil/tva-nya-modeller-fran-ferrari/467262/",
        "urlToImage": "https://static.feber.se/article_images/58/80/13/588013.jpg",
        "publishedAt": "2024-05-03T06:20:00Z",
        "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+38948 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Turbo.fr"
        },
        "author": "Maxime Duchemin",
        "title": "Salon de l’Auto de Pékin : un salon comme à la belle époque !",
        "description": "Depuis le 25 avril et jusqu'à la fin de la semaine, se tient le Salon de l'Auto de Pékin. De nombreuses nouveautés y ont d'ailleurs été présentées car, à l'inverse des salons européens, toutes les marques ou presque ont fait le déplacement pour participer à l…",
        "url": "https://www.turbo.fr/salons-auto/salon-de-lauto-de-pekin-un-salon-comme-la-belle-epoque-195582",
        "urlToImage": "https://www.turbo.fr/sites/default/files/2024-05/BMW_0.jpeg",
        "publishedAt": "2024-05-03T06:00:43Z",
        "content": "Depuis le 25 avril et jusqu'à la fin de la semaine, se tient le Salon de l'Auto de Pékin. De nombreuses nouveautés y ont d'ailleurs été présentées car, à l'inverse des salons européens, toutes les ma… [+4986 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New Zealand Herald"
        },
        "author": "Bonnie Culbertson",
        "title": "Plan an eco-friendly holiday to Margaret River, Western Australia",
        "description": "The eco-conscious way to have a luxe time in Australia.",
        "url": "https://www.nzherald.co.nz/travel/plan-an-eco-friendly-holiday-to-margaret-river-western-australia/EVQZMG6YM5ECXPKG6YTP7RHQPI/",
        "urlToImage": "https://www.nzherald.co.nz/resizer/v2/NTKAK42U7LYZAIETTB4HHCCXN4.jpg?auth=6170eba6bb4f652ff1172cf740c6a8209f9e8315f6e943407d8ecf0100338883&width=1200&height=675&quality=70&smart=true",
        "publishedAt": "2024-05-03T06:00:00Z",
        "content": "Western Australia's Margaret River emerges as an ideal destination for environmentally conscious travellers seeking natural beauty and sustainability. Photo / Tourism Western AustraliaWriter Bonnie C… [+6461 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Feber.se"
        },
        "author": "Wille Wilhelmsson",
        "title": "Netflix släpper dokumentär om neandertalare",
        "description": "Kolla in hur urtidsmänniskor levde och dog\n\n\n\n\n\n\n\n\n\n\nNetflix har börjat visa dokumentärfilmen Neandertalarnas hemlighet där man visar upp hur urtidsmänniskorna neandertalarna hade det under de hundratusentals år de levde på jorden. \n\nDokumentären är baserad p…",
        "url": "https://feber.se/internet/netflix-slapper-dokumentar-om-neandertalare/467263/",
        "urlToImage": "https://i.ytimg.com/vi/b5YtgLSU_sE/hqdefault.jpg",
        "publishedAt": "2024-05-03T06:00:00Z",
        "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+38419 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Overclockers.ru"
        },
        "author": "Алексей Сычёв",
        "title": "Производители автокомпонентов начали перекладывать вину на друг друга после ДТП с жертвами в Китае",
        "description": "Совместное производство проверяется на прочность в беде.",
        "url": "https://overclockers.ru/hardnews/show/133837/proizvoditeli-avtokomponentov-nachali-perekladyvat-vinu-na-drug-druga-posle-dtp-s-zhertvami-v-kitae",
        "urlToImage": "https://overclockers.ru/st/images/preview/yj1IX69FSMd2cWaD.jpg",
        "publishedAt": "2024-05-03T05:58:00Z",
        "content": "Tesla , , . Caixin, 26 , .\r\n Seres Group Huawei Aito M7 Plus 115 / , . , , . , , .\r\nHuawei , , , , Robert Bosch. , . Bosch 29 , Aito M7 Plus . , , - ."
      },
      {
        "source": {
          "id": null,
          "name": "Phonandroid"
        },
        "author": "William Zimmer",
        "title": "Tesla prépare son propre assistant vocal, plus besoin de quitter les yeux de la route",
        "description": "Lors de votre prochain voyage en Tesla, un nouveau copilote artificiel pourrait vous accompagner. Le constructeur automobile se prépare à lancer son propre assistant vocal pour gérer les commandes et les contrôles mains libres dans ses véhicules électriques, …",
        "url": "https://www.phonandroid.com/tesla-prepare-son-propre-assistant-vocal-plus-besoin-de-quitter-les-yeux-de-la-route.html",
        "urlToImage": "https://wp-pa.phonandroid.com/uploads/2024/04/tesla-prix-fsd.jpg",
        "publishedAt": "2024-05-03T05:54:20Z",
        "content": "Lors de votre prochain voyage en Tesla, un nouveau copilote artificiel pourrait vous accompagner. Le constructeur automobile se prépare à lancer son propre assistant vocal pour gérer les commandes et… [+2513 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "Tesla layoffs: Pakistani-origin woman laid off by Elon Musk says it's 'Very hard to let go of' - Hindustan Times",
        "description": "Tesla layoffs: Pakistani-origin woman laid off by Elon Musk says it's 'Very hard to let go of'Hindustan Times A list of all the Tesla execs who recently leftBusiness Insider As Questions Swirl Around Tesla's Superchargers, the Race Is On to Fill the Power Gap…",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=173714906",
        "urlToImage": null,
        "publishedAt": "2024-05-03T05:52:31Z",
        "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "hindustantimes.com",
        "title": "Tesla layoffs: Pakistani-origin woman laid off by Elon Musk says it’s ‘Very hard to let go of…’",
        "description": "“It was a privilege and an honour to work with the most dedicated people who poured their heart and soul into building charging technology and a network that not only served Tesla drivers but also welcomed all EVs, making travelling with an EV a seamless expe…",
        "url": "https://biztoc.com/x/0b7fc052e5195f69",
        "urlToImage": "https://c.biztoc.com/p/0b7fc052e5195f69/og.webp",
        "publishedAt": "2024-05-03T05:50:05Z",
        "content": "It was a privilege and an honour to work with the most dedicated people who poured their heart and soul into building charging technology and a network that not only served Tesla drivers but also wel… [+280 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "ET Online",
        "title": "How this Meta engineer landed a $500K job and two other big tech offers? Resume strategy revealed",
        "description": "Hemant Pandey, a software engineer, recently made headlines for landing a $500,000 senior role at Meta, with offers from TikTok and LinkedIn. His journey from Amazon to Tesla and then to Meta showcases the impact of a well-crafted resume and personal branding…",
        "url": "https://economictimes.indiatimes.com/magazines/panache/how-this-meta-engineer-landed-a-500k-job-and-two-other-big-tech-offers-resume-strategy-revealed/articleshow/109804606.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-109805370,width-1200,height-630,imgsize-1093666,overlay-etpanache/photo.jpg",
        "publishedAt": "2024-05-03T05:43:30Z",
        "content": "Hemant Pandey, a software engineer with an impressive career trajectory, recently made headlines for securing a $500,000 senior software engineer role at Meta, alongside enticing offers from TikTok a… [+2903 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "cnbc.com",
        "title": "China's automakers must adapt quickly or lose out on the EV boom in the face of regulatory scrutiny abroad and competition at home",
        "description": "BEIJING — Chinese automakers, including state-owned auto giant GAC Group, can't afford to take it easy in the country's electric car boom if they want to survive. Adoption of battery and hybrid-powered cars has surged in China, but an onslaught of new models …",
        "url": "https://biztoc.com/x/d74acb1d023a6c29",
        "urlToImage": "https://c.biztoc.com/p/d74acb1d023a6c29/s.webp",
        "publishedAt": "2024-05-03T05:42:05Z",
        "content": "BEIJING Chinese automakers, including state-owned auto giant GAC Group, can't afford to take it easy in the country's electric car boom if they want to survive. Adoption of battery and hybrid-powered… [+292 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "cnbc.com",
        "title": "Don't rate Tesla's Full Self Driving too highly, tech investor says: 'By no means autonomous driving'",
        "description": "News of electric car giant Tesla's progress toward rolling out its advanced driver-assistance feature in China isn't as groundbreaking as investors are treating it, according to a top tech investor. Mark Hawtin, GAM Investment Management's investment director…",
        "url": "https://biztoc.com/x/a5be1152d4498e07",
        "urlToImage": "https://c.biztoc.com/p/a5be1152d4498e07/s.webp",
        "publishedAt": "2024-05-03T05:42:04Z",
        "content": "News of electric car giant Tesla's progress toward rolling out its advanced driver-assistance feature in China isn't as groundbreaking as investors are treating it, according to a top tech investor.M… [+257 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "forbes.com.au",
        "title": "Jeff Bezos overtakes Elon Musk as world's second richest person on back of Amazon surge",
        "description": "Amazon founder and chairman Jeff Bezos, who has an estimated net worth of $199.6 billion, is once again the second-wealthiest person in the world as of Thursday, overtaking Tesla CEO Elon Musk, who has an estimated net worth of $197.4 billion, and marking the…",
        "url": "https://biztoc.com/x/fc3574dc88093e58",
        "urlToImage": "https://c.biztoc.com/p/fc3574dc88093e58/s.webp",
        "publishedAt": "2024-05-03T05:38:09Z",
        "content": "Amazon founder and chairman Jeff Bezos, who has an estimated net worth of $199.6 billion, is once again the second-wealthiest person in the world as of Thursday, overtaking Tesla CEO Elon Musk, who h… [+248 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Numerama"
        },
        "author": "Raphaëlle Baut",
        "title": "Les voitures électriques françaises prennent leur revanche",
        "description": "4 voitures électriques françaises dominent le classement des immatriculations du mois d’avril 2024. C’est une bonne nouvelle pour Peugeot et Renault. Dommage que ce soit un succès en trompe-l’œil. Les mois se suivent, mais ne se ressemblent pas toujours conce…",
        "url": "https://www.numerama.com/vroom/1736766-les-voitures-electriques-francaises-prennent-leur-revanche.html",
        "urlToImage": "https://www.numerama.com/wp-content/uploads/2023/11/peugeot-e-208-2023.jpg",
        "publishedAt": "2024-05-03T05:31:00Z",
        "content": "4 voitures électriques françaises dominent le classement des immatriculations du mois davril 2024. Cest une bonne nouvelle pour Peugeot et Renault. Dommage que ce soit un succès en trompe-lil.\r\nLes m… [+5044 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hibridosyelectricos.com"
        },
        "author": "Alberto Pérez",
        "title": "Peugeot ya trabaja en un nuevo rival para Tesla: una berlina eléctrica con el nombre de 'E-508'",
        "description": "Peugeot cuenta a día de hoy con una gama de coches eléctricos muy generosa. Entre sus modelos destaca el E-208 como vehículo práctico urbano para el día a día, un E-308 que da la posibilidad incluso de realizar viajes o un E-3008 con una dinámica muy trabajad…",
        "url": "https://www.hibridosyelectricos.com/coches/peugeot-ya-trabaja-en-nuevo-rival-tesla-berlina-electrica-con-nombre-e-508_73894_102.html",
        "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/68/09/88/peugeot-inception-concept-2_17_2000x1126.jpeg",
        "publishedAt": "2024-05-03T05:30:00Z",
        "content": "Peugeot cuenta a día de hoy con una gama de coches eléctricos muy generosa. Entre sus modelos destaca el E-208 como vehículo práctico urbano para el día a día, un E-308 que da la posibilidad incluso … [+2938 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Golem.de"
        },
        "author": "Andreas Donath",
        "title": "Künstliche Intelligenz: Tesla soll fahrzeuginternen Sprachassistenten vorbereiten",
        "description": "Tesla könnte bald einen eigenen Sprachassistenten einführen, wie aus dem Quellcode des jüngsten Softwareupdates hervorgeht. (Tesla, KI)",
        "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkuenstliche-intelligenz-tesla-soll-fahrzeuginternen-sprachassistenten-vorbereiten-2405-184789.html&referer=https%3A%2F%2Ft.co%2Fe532d7e8a0",
        "urlToImage": null,
        "publishedAt": "2024-05-03T05:28:01Z",
        "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": null,
        "title": "China's automakers must adapt quickly or lose out on the EV boom",
        "description": "Adoption of battery and hybrid-powered cars has surged in China, but an onslaught of new models has fueled a price war, while regulatory scrutiny grows abroad.",
        "url": "https://www.cnbc.com/2024/05/03/chinas-automakers-must-adapt-quickly-or-lose-out-on-the-ev-boom.html",
        "urlToImage": null,
        "publishedAt": "2024-05-03T05:27:00Z",
        "content": "Chinese new energy vehicle giant shows off the latest version of its Han electric sedan at the Beijing auto show on April 26, 2024.\r\nBEIJING Chinese automakers, including state-owned auto giant GAC G… [+7654 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": null,
        "title": "Don't rate Tesla Full Self Driving too highly, tech investor says: 'By no means autonomous driving'",
        "description": "A top fund manager focusing on tech says Tesla's Full Self Driving product lacks qualities that would make it an example of truly \"self-driving\" technology.",
        "url": "https://www.cnbc.com/2024/05/03/dont-rate-teslas-full-self-driving-too-highly-tech-investor-says.html",
        "urlToImage": null,
        "publishedAt": "2024-05-03T05:26:00Z",
        "content": "People are shopping at a Tesla store in Shanghai, China, on Feb. 17, 2024.\r\nNews of electric car giant Tesla's progress toward rolling out its advanced driver-assistance feature in China isn't as gro… [+2832 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Cornucopia.se"
        },
        "author": "Lars Wilderang",
        "title": "Veckan avslutas med positiva börser i Asien – Swedbank infiltrerades av Ryssland och FSB – Unionen sätter Tesla i blockad, förbjuder medlemmar att lämna facket – svenskt PMI positivt",
        "description": "Börsveckan avslutas med positiva börser i de asiatiska tidszonerna och den svenska kronan stärks. Swedbank rapporterar att inköpschefsindex PMI steg och är nu i den positiva tillväxtzonen, så svensk konjunktur fortsätter återhämta sig föga överraskande. I en …",
        "url": "https://cornucopia.se/2024/05/veckan-avslutas-med-positiva-borser-i-asien-swedbank-infiltrerades-av-ryssland-och-fsb-unionen-satter-tesla-i-blockad-forbjuder-medlemmar-att-lamna-facket-svenskt-pmi-positivt/",
        "urlToImage": "https://cornucopia.se/wp-content/uploads/2023/02/estland_narva_swedbank.jpg",
        "publishedAt": "2024-05-03T05:24:54Z",
        "content": "4Artikeln innehåller annonslänkar för Bokus och Adlibris.\r\nBörsveckan avslutas med positiva börser i de asiatiska tidszonerna och den svenska kronan stärks. Swedbank rapporterar att inköpschefsindex … [+6626 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Post"
        },
        "author": "Alec Gearty",
        "title": "Wife of California doctor who drove Tesla off cliff with family inside speaks in court for first time as kids ask ‘when’s daddy coming home?’",
        "description": "California doctor Dharmesh Patel was reportedly emotional as he listened to his wife Neha Patel reflect on the horrific crash for the first time in a Redwood City, Calif. court.",
        "url": "https://nypost.com/2024/05/03/us-news/wife-of-california-doctor-dharmesh-patel-who-drove-tesla-off-cliff-with-family-inside-speaks-in-court-for-first-time/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/05/wife-tesla-doctor-drove-family-81127831.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2024-05-03T05:23:28Z",
        "content": "The wife of the California doctor accused of intentionally driving a Tesla off a cliff with his family inside last year begged prosecutors to drop his attempted murder charges during courtroom testim… [+3601 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Publico.es"
        },
        "author": "David Bollero",
        "title": "kaosTICa - EEUU abre su abanico de proveedores para incorporar la IA a sus drones",
        "description": "Mientras los ojos se dirigen a Israel y las matanzas de civiles que realiza con sus drones, impulsados por Inteligencia Artificial (IA) de deficiente efectividad, su mayor aliado EEUU avanza en su programa de Collaborative Combat Aircraft (CCA). Recientemente…",
        "url": "https://blogs.publico.es/kaostica/2024/05/03/eeuu-abre-su-abanico-de-proveedores-para-incorporar-la-ia-a-sus-drones/",
        "urlToImage": "https://blogs.publico.es/kaostica/files/2024/05/PososAnarquia_Drones.jpg",
        "publishedAt": "2024-05-03T05:15:29Z",
        "content": "3 mayo, 2024Los sistemas de Anduril buscan que un operador manejar simultáneamente diversas aeronaves autónomas. - Anduril\r\nMientras los ojos se dirigen a Israel y las matanzas de civiles que realiza… [+4945 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Overclockers.ru"
        },
        "author": "Алексей Сычёв",
        "title": "Tesla готовит к запуску собственный голосовой интерфейс для электромобилей",
        "description": "Чтобы не отставать от китайских конкурентов.",
        "url": "https://overclockers.ru/hardnews/show/133835/tesla-gotovit-k-zapusku-sobstvennyj-golosovoj-interfejs-dlya-elektromobilej",
        "urlToImage": "https://overclockers.ru/st/images/preview/zAVcE41BTLCD4coU.jpg",
        "publishedAt": "2024-05-03T05:10:00Z",
        "content": "Electrek, 2024.14.3 Tesla , ( ), «Jenny Neutral» Microsoft.\r\n , Tesla. , Amazon Music. (Elon Musk) , . , , . , ."
      },
      {
        "source": {
          "id": null,
          "name": "Turbo.fr"
        },
        "author": "Renaud Mearini",
        "title": "PHOTOS - Top 20 des ventes de voitures neuves, peu de changements en avril",
        "description": "Retour sur le classement des vingt voitures particulières neuves les plus vendues en France pour le mois de mars 2024, avec la Peugeot 208, toujours numéro un, devant les Renault Clio et Dacia Sandero.\nDurant le mois d'avril 2024, les ventes de voitures parti…",
        "url": "https://www.turbo.fr/peugeot/208/photos/photos-top-20-des-ventes-de-voitures-neuves-peu-de-changements-en-avril",
        "urlToImage": "https://www.turbo.fr/sites/default/files/2024-05/Top-20-Ventes-Voitures-France-Avril-2024.jpg",
        "publishedAt": "2024-05-03T05:00:44Z",
        "content": "Retour sur le classement des vingt voitures particulières neuves les plus vendues en France pour le mois de mars 2024, avec la Peugeot 208, toujours numéro un, devant les Renault Clio et Dacia Sander… [+961 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Bankier.pl"
        },
        "author": "Redaktor Bankier.pl",
        "title": "Miliony Polaków klikają w linki wyłudzające dane i pieniądze",
        "description": "Liderem na liście cyberzagrożeń wciąż pozostaje phishing, oparty na coraz bardziej wyrafinowanej socjotechnice. W 2023 roku polscy internauci często klikali w linki zachęcające do szybkich i zyskownych inwestycji, ale...",
        "url": "https://www.bankier.pl/wiadomosc/Liczba-oszustw-w-internecie-bedzie-rosnac-8738159.html",
        "urlToImage": "https://galeria.bankier.pl/p/7/d/a352137ff3ca2e-948-568-0-0-2911-1746.jpg",
        "publishedAt": "2024-05-03T05:00:00Z",
        "content": "Liderem na licie cyberzagroe wci pozostaje phishing, oparty na coraz bardziej wyrafinowanej socjotechnice. W 2023 roku polscy internauci czsto klikali w linki zachcajce do szybkich i zyskownych inwes… [+7374 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "npr.org",
        "title": "Want to understand America's labor movement? Head south : Consider This from",
        "description": "You're reading the Consider This newsletter, which unpacks one major news story each day. Subscribe here to get it delivered to your inbox, and listen to more from the Consider This podcast. If you measure success in headlines, the last 12 months have been a …",
        "url": "https://biztoc.com/x/9df78263df15610d",
        "urlToImage": "https://c.biztoc.com/p/9df78263df15610d/og.webp",
        "publishedAt": "2024-05-03T04:54:05Z",
        "content": "You're reading the Consider This newsletter, which unpacks one major news story each day. Subscribe here to get it delivered to your inbox, and listen to more from the Consider This podcast.If you me… [+291 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Marketscreener.com"
        },
        "author": null,
        "title": "News Highlights: Top Energy News of the Day - Friday at 12 AM ET",
        "description": "(marketscreener.com) \nOil holds steady as traders weigh rise in U.S. supplies, Middle East cease-fire talks \n \n\n Oil futures end on a mixed note Thursday, but remained on track to post notable losses for the week. \n\n \nU.S. Natural Gas Futures Rise on LNG Dema…",
        "url": "https://www.marketscreener.com/business-leaders/SCOTT-SHEFFIELD-4328/news/News-Highlights-Top-Energy-News-of-the-Day-Friday-at-12-AM-ET-46613241/",
        "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
        "publishedAt": "2024-05-03T04:15:21Z",
        "content": "Oil holds steady as traders weigh rise in U.S. supplies, Middle East cease-fire talks \r\nOil futures end on a mixed note Thursday, but remained on track to post notable losses for the week. \r\nU.S. Nat… [+1803 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Globalresearch.ca"
        },
        "author": "Global Research News",
        "title": "Last Month’s Most Popular Articles",
        "description": "German Government Admits There Was No Pandemic Baxter Dmitry, April 4, 2024 Video: “Wiping Gaza Off The Map”: Big Money Agenda. Confiscating Palestine’s Maritime Natural Gas Reserves Felicity Arbuthnot, April 23, 2024 Epidemic of 15-19 Year Olds Dropping Dead…",
        "url": "https://www.globalresearch.ca/last-months-most-popular-articles-16/5856299",
        "urlToImage": "https://www.globalresearch.ca/wp-content/uploads/2024/04/Germany-article-678x381.jpg.optimal.jpg",
        "publishedAt": "2024-05-03T04:12:56Z",
        "content": "German Government Admits There Was No Pandemic\r\nBaxter Dmitry, April 4, 2024\r\nVideo: Wiping Gaza Off The Map: Big Money Agenda. Confiscating Palestines Maritime Natural Gas Reserves\r\nFelicity Arbuthn… [+2199 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "futurism.com",
        "title": "Tesla Tells Excited Young Interns That Their Internships Have Been Canceled",
        "description": "Students are left scrambling for internships on LinkedIn. College interns often serve as seed corn for companies looking to groom these youngsters to become future leaders for the business. So it's a bad sign that Tesla is rescinding summer internship offers …",
        "url": "https://biztoc.com/x/48c785b19c5290db",
        "urlToImage": "https://c.biztoc.com/p/48c785b19c5290db/og.webp",
        "publishedAt": "2024-05-03T04:12:06Z",
        "content": "Students are left scrambling for internships on LinkedIn.College interns often serve as seed corn for companies looking to groom these youngsters to become future leaders for the business.So it's a b… [+301 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "MrSun",
        "title": "日本母親問「是否該給小孩買遊戲機」引熱議，網提醒不買很難融入同儕交友圈",
        "description": "相信不少玩家在小時候，對於父母來說「打電動／玩遊戲」就是一件罪大惡極的事情，幾乎都是等到有能力，或是長大後才真正開始接觸，不然多數都是跑去同學朋友家偷玩、跑去網咖偷玩、趁父母不在家偷開電腦等。而最近在日本就有一位媽媽上網詢問「是否該給小孩買遊戲機」，吸引超過 3600 萬人觀看與熱議。\r\n假如為人父母，大家會給小孩買遊戲機嗎？（圖源：Getty Images）\r\n事件起因是一位在 X 上叫做 はるるん 的媽媽（該帳號已經限制觀看，只能從備份網站上查看），在網路上發文詢問：「小學 3 年級的兒子。我們在家並不會給他…",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_128ba3bf-6f9f-4879-8e13-d87b446034d2",
        "urlToImage": null,
        "publishedAt": "2024-05-03T04:02:09Z",
        "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Lewrockwell.com"
        },
        "author": "James Bovard",
        "title": "The World Economic Forum Is Still Conspiring Against Your Freedom",
        "description": "Last January, humanity’s elite gathered again in Davos, Switzerland, to plan out the rest of our lives. World Economic Forum (WEF) honchos are morally superior because they are devoted to destroying your freedom to save the Earth, or at least to safeguard pla…",
        "url": "https://www.lewrockwell.com/2024/05/james-bovard/the-world-economic-forum-is-still-conspiring-against-your-freedom/",
        "urlToImage": "https://lrc-cdn.s3.amazonaws.com/assets/2021/02/LRC-share.jpg",
        "publishedAt": "2024-05-03T04:01:00Z",
        "content": "Last January, humanitys elite gathered again in Davos, Switzerland, to plan out the rest of our lives. World Economic Forum (WEF) honchos are morally superior because they are devoted to destroying y… [+12375 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Autocar"
        },
        "author": "Nick Gibbs",
        "title": "What the hell is happening at Tesla?",
        "description": "Mass sackings, Musk's public outbursts and previously announced plans lying in the gutter\n\n\n\nWhat a difference a year makes. In spring last year, Tesla threw open the doors of its Texas Gigafactory to investors in order to lay out plans for global domination …",
        "url": "https://www.autocar.co.uk/car-news/business-electric-vehicles/what-hell-happening-tesla",
        "urlToImage": "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/tesla_parts_0.jpg",
        "publishedAt": "2024-05-03T04:00:00Z",
        "content": "What a difference a year makes. In spring last year, Tesla threw open the doors of its Texas Gigafactory to investors in order to lay out plans for global domination of the automotive industry with s… [+337 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CleanTechnica"
        },
        "author": "David Waterworth",
        "title": "Two EVs For The Price Of One!",
        "description": "Recently at a Coffee, Cake and EVs morning, a friend told me how he had just bought a Great Wall ORA Cat for only AU$30,000! That’s cheaper than a petrol Corolla! Mind you, the AU$6,000 government rebate helped. The ORA Cat was launched a year ago for $46,000…",
        "url": "https://cleantechnica.com/2024/05/02/two-evs-for-the-price-of-one/",
        "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/05/new-electric-cars-for-sales-Australia.jpeg",
        "publishedAt": "2024-05-03T03:50:54Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nRecently at a Coffee, Cake and EVs morning, a friend told me how he had just bought a Great Wall ORA Cat for … [+6384 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "Tesla, Boeing, Visa: Big Names Worth Talking About",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_862946d8-c451-421a-91e3-1fd2480f449e",
        "urlToImage": null,
        "publishedAt": "2024-05-03T03:49:00Z",
        "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Paul Tan's Automotive News"
        },
        "author": "Gerard Lye",
        "title": "Tesla Model 3 rendered as a hatchback and wagon",
        "description": "Tesla Model 3 hatchback rendering The Tesla Model 3 is the brand’s cheapest electric vehicle (EV) that is offered as a sedan only, but what if there were other body styles available? That’s exactly what […]\nThe post Tesla Model 3 rendered as a hatchback and w…",
        "url": "https://paultan.org/2024/05/03/tesla-model-3-rendered-as-a-hatchback-and-wagon/",
        "urlToImage": "https://paultan.org/image/2024/05/Tesla-Model-3-hatchback-Theo-render-1-1200x628.jpg",
        "publishedAt": "2024-05-03T03:19:59Z",
        "content": "Tesla Model 3 hatchback rendering\r\nThe Tesla Model 3 is the brands cheapest electric vehicle (EV) that is offered as a sedan only, but what if there were other body styles available? Thats exactly wh… [+2074 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Rebecca Bellan",
        "title": "Hyundai is spending $1B to keep self-driving startup Motional alive",
        "description": "Hyundai has agreed to spend nearly $1 billion on Motional, an investment that will give the automaker a majority stake while providing the self-driving",
        "url": "https://techcrunch.com/2024/05/02/hyundai-is-spending-close-to-1-billion-to-keep-self-driving-startup-motional-alive/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/10/Motional_IONIQ5AV_Uber-2.jpg?resize=1200,800",
        "publishedAt": "2024-05-03T03:08:32Z",
        "content": "Hyundai has agreed to spend nearly $1 billion on Motional, an investment that will give the automaker a majority stake while providing the self-driving startup with the necessary capital to keep oper… [+3994 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Edward Snowden Schools Elon Musk on 'Freedom of Expression' Using McDonald's Following X Owner's Proposal To Temporarily Banish Flag Replacers",
        "description": "Edward Snowden, the former National Security Agency contractor turned whistleblower, has taken to X, to express his views on a poll created by Tesla and SpaceX CEO Elon Musk who also owns the platform formerly called Twitter. What Happened: Snowden’s post def…",
        "url": "https://biztoc.com/x/41a2d09b80218be1",
        "urlToImage": "https://c.biztoc.com/p/41a2d09b80218be1/s.webp",
        "publishedAt": "2024-05-03T02:56:03Z",
        "content": "Edward Snowden, the former National Security Agency contractor turned whistleblower, has taken to X, to express his views on a poll created by Tesla and SpaceX CEO Elon Musk who also owns the platfor… [+301 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Energycentral.com"
        },
        "author": "[Energy Central] Katherine Johnson",
        "title": "The KJ Show Episode 86: EV's Long and Winding Road",
        "description": "Every week, I host 'The KJ Show,' which offers a mix of breaking news and practical advice on how the energy industry affects the consumer. During this fast-paced show, I combine weekly energy updates with conversations with leaders in the energy efficiency c…",
        "url": "https://energycentral.com/c/ec/kj-show-episode-86-evs-long-and-winding-road",
        "urlToImage": "https://energycentral.com/sites/default/files/styles/og_meta/public/ece/node_main/2024/5/kj.jpg?itok=2T1fV5lj",
        "publishedAt": "2024-05-03T02:37:08Z",
        "content": "Every week, I host 'The KJ Show,' which offers a mix of breaking news and practical advice on how the energy industry affects the consumer. During this fast-paced show, I combine weekly energy update… [+1629 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Iltalehti.fi"
        },
        "author": null,
        "title": "Katsastus\u00adasemat tylyttävät Tesloja: Ruosteongelmia, alustan pettämisiä, sateessa putoavia puskureita",
        "description": "Tesla on noussut raketin lailla automaailman jättiläiseksi. Nopean nousun kääntöpuolena vaikuttaa olevan laatuongelmia. Saksan katsastusviranomainen TÜV julkisti viime vuoden tilastonsa. Siellä näkyvät kaikkien automerkkien ja mallien hylkäysprosentit eri ikä…",
        "url": "https://www.iltalehti.fi/autouutiset/a/31a432bb-1591-4da8-8ea4-71aa9f9001e1",
        "urlToImage": "https://img.ilcdn.fi/1HvDE7lqSuFEbeMFCh3aRF3wSBs=/1200x630/top/filters:watermark(assets.ilcdn.fi/ilsome_v2.jpg,25,0,0)/img-s3.ilcdn.fi/0681c8ec2becb2c508d16710dfadbb53ce7f772653e7a7304ba0469c9ec27b71.jpg",
        "publishedAt": "2024-05-03T02:30:06Z",
        "content": "Saksan katsastusviranomainen TÜV julkisti viime vuoden tilastonsa. Siellä näkyvät kaikkien automerkkien ja mallien hylkäysprosentit eri ikäluokissa. Aivan uusista autoista ei katsastusdataa saada, si… [+1716 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Forbes.com.mx"
        },
        "author": "Molly Bohannon",
        "title": "Jeff Bezos supera a Elon Musk como la segunda persona más rica del mundo",
        "description": "Forbes México.\n Jeff Bezos supera a Elon Musk como la segunda persona más rica del mundo\n\nEl fundador de Amazon tiene un patrimonio neto estimado de 199,600 mdd, superior a los 197,400 mdd del CEO de Tesla.\nJeff Bezos supera a Elon Musk como la segunda person…",
        "url": "https://www.forbes.com.mx/jeff-bezos-supera-a-elon-musk-como-la-segunda-persona-mas-rica-del-mundo/",
        "urlToImage": "https://cdn.forbes.com.mx/2017/06/bezos_getty_1-e1623075364690.jpg",
        "publishedAt": "2024-05-03T02:25:30Z",
        "content": "El fundador de Amazon, Jeff Bezos, quien tiene un patrimonio neto estimado de 199,600 millones de dólares (mdd), vuelve a ser la segunda persona más rica del mundo hasta este jueves, superando al CEO… [+1820 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com.mx"
        },
        "author": "Adolfo Reséndiz",
        "title": "Elon Musk reclama su corona de vuelta: Tesla se vuelve rey mundial en venta de autos eléctricos y BYD no hace más que caer",
        "description": "Tesla ha vuelto a tomar el centro del escenario en el mundo de los autos eléctricos, recuperando su posición como líder mundial en ventas después de superar a su competidor chino BYD en el primer trimestre de 2024.\n<!-- BREAK 1 -->\nCon 386,810 vehículos eléct…",
        "url": "https://www.xataka.com.mx/automovil/elon-musk-reclama-su-corona-vuelta-tesla-se-vuelve-rey-mundial-venta-autos-electricos-byd-no-hace-que-caer",
        "urlToImage": "https://i.blogs.es/65c332/tesla-ventas/840_560.jpeg",
        "publishedAt": "2024-05-03T02:23:00Z",
        "content": "Tesla ha vuelto a tomar el centro del escenario en el mundo de los autos eléctricos, recuperando su posición como líder mundial en ventas después de superar a su competidor chino BYD en el primer tri… [+2113 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "finance.yahoo.com",
        "title": "Tesla Interns Face The Heat Of Musk's Budget Squeeze",
        "description": "Tesla Inc (NASDAQ:TSLA) has left aspiring summer interns in a quandary, rescinding offers shortly before their scheduled start dates. The abrupt decision has left many students scrambling to secure alternative opportunities. \"At 8:46a.m., I opened a Tesla ema…",
        "url": "https://biztoc.com/x/188a5771708794b1",
        "urlToImage": "https://c.biztoc.com/p/188a5771708794b1/og.webp",
        "publishedAt": "2024-05-03T02:20:06Z",
        "content": "Tesla Inc (NASDAQ:TSLA) has left aspiring summer interns in a quandary, rescinding offers shortly before their scheduled start dates.The abrupt decision has left many students scrambling to secure al… [+321 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Livemint"
        },
        "author": "Alisha Sachdev",
        "title": "Made-in-India parts to fuel JSW-MG Motor alliance India drive",
        "description": "MG Motor’s Comet EV, a small urban hatch, is likely to benefit from the government's PLI scheme due to its increased focus on localization and an Indian pedigree.The ministry of heavy industries may again review MG Motor India’s application to the PLI scheme …",
        "url": "https://www.livemint.com/companies/jswmg-alliance-takes-first-steps-cut-costs-localize-technology-11714634421064.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/05/02/1600x900/3-0-11528694-mghector--2--0_1679842291010_1714643742832.JPG",
        "publishedAt": "2024-05-03T01:53:32Z",
        "content": "The joint venture between MG Motor India Pvt. Ltd and JSW Group is taking its crucial first steps to set itself up as a highly localized, cost-efficient Indian auto manufacturing firm, leveraging the… [+3991 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Motley Fool Australia"
        },
        "author": "James Mickleboro",
        "title": "Why did Liontown Resources shares smash the market in April?",
        "description": "This lithium stock was roaring last month. Why did its shares outperform?\nThe post Why did Liontown Resources shares smash the market in April? appeared first on The Motley Fool Australia.",
        "url": "https://www.fool.com.au/2024/05/03/why-did-liontown-resources-shares-smash-the-market-in-april/",
        "urlToImage": "https://www.fool.com.au/wp-content/uploads/2022/02/share-price-up-16.9-1200x675.jpg",
        "publishedAt": "2024-05-03T01:53:22Z",
        "content": "Liontown Resources Ltd (ASX: LTR) shares avoided the market weakness last month.\r\nIn fact, the lithium developer's shares managed to surge 6% despite the market dropping 3% over the period.\r\nWhy did … [+2461 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Cnbeta.com.tw"
        },
        "author": "ytzong",
        "title": "又一半导体领域 中国厂商做到世界第二",
        "description": "日本富士经济多年的跟踪报告显示，2023年全球碳化硅衬底市场，中国两家厂商份额首次进入前五，其中天岳先进挤下千年老二Coherent，排名仅次于Wolfspeed。\r\n\n文 | 何律衡去年的特斯拉投资者日，马斯克宣布特斯拉每辆车都将减少75%的碳化硅芯片使用量，直接把一家名叫Wolfspeed的公司送进了ICU。Wolfspeed以LED照明业务起家，在追求“发光”的路上意外挖掘了碳化硅这个电动车必不可少的材料。借着新能源车市场爆发，Wolfspeed果断转换赛道，在群狼环伺的新能源市场赛出了风格、赛出了水平。鼎…",
        "url": "https://www.cnbeta.com.tw/articles/tech/1429478.htm",
        "urlToImage": "https://static.cnbetacdn.com/article/2024/0503/7ff452c153f291d.webp",
        "publishedAt": "2024-05-03T01:36:08Z",
        "content": "| \r\n75%WolfspeedICU\r\nWolfspeedLEDWolfspeed\r\nWolfspeedWolfspeed\r\n2023Wolfspeed5.4361.49%1/4\r\nWolfspeed\r\n01\r\n20163Model 340000Model SModel 3Model S90%\r\n48MOSFET\r\nModel 3MOSFET\r\nIGBTMOSFETMOSFETIGBT5-10… [+764 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Livemint"
        },
        "author": "Economist",
        "title": "Chinese EV-makers are leaving Western rivals in the dust",
        "description": "They have shone at Beijing’s car jamboree",
        "url": "https://www.livemint.com/industry/chinese-ev-makers-are-leaving-western-rivals-in-the-dust-11714653815570.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/05/02/1600x900/im-846748_1693922360030_1714653913130.jpg",
        "publishedAt": "2024-05-03T01:30:07Z",
        "content": "To gird yourself for Auto China 2024, a nine-day motor show which ends on May 4th in Beijing, get there by car. On the opening day, navigating the human traffic eager to glimpse the mechanical marvel… [+2868 chars]"
      },
      {
        "source": {
          "id": "cbs-news",
          "name": "CBS News"
        },
        "author": "Esteban Reynoso",
        "title": "Former Tesla employee has to sell Lathrop house to make ends meet",
        "description": "Electric car giant Tesla laid off around 10% of its workforce in April, amounting to 14,000 jobs.",
        "url": "https://www.cbsnews.com/sacramento/news/former-tesla-employee-sells-house-to-make-ends-meet/",
        "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/05/03/9f4b9c44-fd78-4ebf-a3be-64900fc5ddb4/thumbnail/1200x630/fcfde6c23bb3025fd87f24fa2177f8ed/tesla-layoff-image.jpg?v=1d6c78a71b7b6252b543a329b3a5744d",
        "publishedAt": "2024-05-03T01:30:00Z",
        "content": "LATHROP - Electric car giant Tesla laid off around 10% of its workforce in April, amounting to 14,000 jobs.\r\nA lot of the people who worked at the factory in Fremont were commuting to work from Sacra… [+2034 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "ETtech",
        "title": "Premji Invest eyes Nainital Bank stake; Ranjan Pai may back Rupeek",
        "description": "Happy Friday! Azim Premji’s family office is eyeing a majority stake in Bank of Baroda-owned Nainital Bank. This and more in today’s packed edition of ETtech Morning Dispatch.",
        "url": "https://economictimes.indiatimes.com/tech/newsletters/morning-dispatch/premji-invest-eyes-nainital-bank-stake-ranjan-pai-may-back-rupeek/articleshow/109799521.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-109799521,width-1070,height-580,imgsize-1812710,overlay-ettech/photo.jpg",
        "publishedAt": "2024-05-03T01:23:50Z",
        "content": "Happy Friday! Azim Premjis family office is eyeing a majority stake in Bank of Baroda-owned Nainital Bank. This and more in todays packed edition of ETtech Morning Dispatch.Also in this letter: Hirin… [+5711 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Jalopnik"
        },
        "author": "Lawrence Hodge",
        "title": "Tesla Cancels 4 Planned Supercharging Sites In New York Despite Increasing Congestion In City",
        "description": "Tesla’s latest round of layoffs have left both the auto industry and company stock holders shook. Falling sales have forced the automaker to cut 10 percent of its total staff. Its left broadsided workers confused as they try to make heads or tails of severanc…",
        "url": "https://jalopnik.com/tesla-cancels-4-planned-supercharging-sites-in-new-york-1851450750",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b9d740c0ef2b8a92333ebf9e55a06a9f.jpg",
        "publishedAt": "2024-05-03T00:50:00Z",
        "content": "Teslas latest round of layoffs have left both the auto industry and company stock holders shook. Falling sales have forced the automaker to cut 10 percent of its total staff. Its left broadsided work… [+2404 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "watcher.guru",
        "title": "Cryptocurrency: 3 Meme Token Dips To Indulge In For Fast Profits",
        "description": "The cryptocurrency market is facing an intense dilemma, mulling over whether to inject more funds into the market or not. The dilemma has been triggered by the latest Bitcoin crash, spreading unease among investors. However, per notable financial analyst Elja…",
        "url": "https://biztoc.com/x/9ae36f6bf25bcfd0",
        "urlToImage": "https://c.biztoc.com/p/9ae36f6bf25bcfd0/s.webp",
        "publishedAt": "2024-05-03T00:48:04Z",
        "content": "The cryptocurrency market is facing an intense dilemma, mulling over whether to inject more funds into the market or not. The dilemma has been triggered by the latest Bitcoin crash, spreading unease … [+299 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "tipranks.com",
        "title": "‘Time to Pull the Trigger,’ Says Cantor About Tesla Stock",
        "description": "Tesla (NASDAQ:TSLA) shares might have gotten a bit of a bounce recently, but the stock is still down by 27% this year and sits 38% below its 52-wee... #tesla",
        "url": "https://biztoc.com/x/3354bab9320f02c6",
        "urlToImage": "https://c.biztoc.com/p/3354bab9320f02c6/s.webp",
        "publishedAt": "2024-05-03T00:34:14Z",
        "content": "Tesla (NASDAQ:TSLA) shares might have gotten a bit of a bounce recently, but the stock is still down by 27% this year and sits 38% below its 52-wee...\r\n#tesla\r\nThis story appeared on tipranks.com, ."
      },
      {
        "source": {
          "id": null,
          "name": "Newgeography.com"
        },
        "author": "Ronald Stein",
        "title": "Environmentalists' Silence on Humanity and Environmental Atrocities",
        "description": "While wind and solar do not emit carbon dioxide, there are substantial environmental degradation and humanity atrocities occurring in China, Africa, Turkey, Argentina, Bolivia, and Chile. The materials for EV batteries and to produce electricity from wind tur…",
        "url": "http://www.newgeography.com/content/008159-environmentalists-silence-humanity-and-environmental-atrocities",
        "urlToImage": null,
        "publishedAt": "2024-05-03T00:28:58Z",
        "content": "While wind and solar do not emit carbon dioxide, there are substantial environmental degradation and humanity atrocities occurring in China, Africa, Turkey, Argentina, Bolivia, and Chile. The materia… [+2925 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "thestreet.com",
        "title": "Tesla makes another harsh last-minute decision, frustrating students",
        "description": "CEO Elon Musk has just further proved that he is serious about cutting costs at his automotive company amid a decline in sales. Tesla’s summer internship is the latest casualty of Musk’s cost-cutting initiative, and the students who were enrolled in the progr…",
        "url": "https://biztoc.com/x/06465b36eac9c52e",
        "urlToImage": "https://c.biztoc.com/p/06465b36eac9c52e/s.webp",
        "publishedAt": "2024-05-03T00:26:06Z",
        "content": "CEO Elon Musk has just further proved that he is serious about cutting costs at his automotive company amid a decline in sales. Teslas summer internship is the latest casualty of Musks cost-cutting i… [+301 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New Zealand Herald"
        },
        "author": "Chris Keall",
        "title": "Road user charges: Errors mean some EV owners can’t buy RUCs online; uptake so far revealed",
        "description": "Two-month grace period expires May 31.",
        "url": "https://www.nzherald.co.nz/business/road-user-charges-errors-mean-some-ev-owners-cant-buy-rucs-online-uptake-so-far-revealed/3S7QZCNJ4VGL5IH5WNHWSXT4ZU/",
        "urlToImage": "https://www.nzherald.co.nz/resizer/v2/EN627XZJTVKQHAUC4KXFHVGRJU.jpg?auth=cf1d5168f6d8a1e746f688cb8ef9e27ac4ad15fc66a2f2cc63aaf35857896534&width=1200&height=675&quality=70&smart=true",
        "publishedAt": "2024-05-03T00:19:13Z",
        "content": "EVs and plug-in hybrids officially lost their road user tax exemption on April 1 - but drivers were given a two-month grace period to comply with the new regime. Photo / Chris KeallA Tesla owner told… [+2762 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "aol.com",
        "title": "I landed a dream internship at Tesla. Now I'm scrambling after the company cancelled my internship 3 weeks before I was set to start",
        "description": "None Tesla is revoking summer internship offers as the automaker grapples with layoffs. • None One college senior said she was disappointed to lose her internship just weeks before she was set to start. • None Brook Gura said she turned down offers at other c…",
        "url": "https://biztoc.com/x/f4d457b2258c2e36",
        "urlToImage": "https://c.biztoc.com/p/f4d457b2258c2e36/s.webp",
        "publishedAt": "2024-05-03T00:16:10Z",
        "content": "None Tesla is revoking summer internship offers as the automaker grapples with layoffs.None One college senior said she was disappointed to lose her internship just weeks before she was set to start.… [+269 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Crikey"
        },
        "author": "Stephen Mayne",
        "title": "Memo to Greg Combet: vote the Future Fund’s $110m Tesla shares against Musk’s latest pay scam",
        "description": "The government is currently fighting Elon Musk in the courts. But there might be another way to take the billionaire down a peg.\nThe post Memo to Greg Combet: vote the Future Fund’s $110m Tesla shares against Musk’s latest pay scam appeared first on Crikey.",
        "url": "https://www.crikey.com.au/2024/05/03/elon-musk-tesla-future-fund/",
        "urlToImage": "https://www.crikey.com.au/wp-content/uploads/2024/05/20240428181912429468-original.jpg?quality=70",
        "publishedAt": "2024-05-03T00:15:16Z",
        "content": "Media Watch host Paul Barry was right to pour cold water on the various federal cabinet ministers slamming Elon Musk for refusing to take down graphic videos from X (formerly Twitter) last week and i… [+6885 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Daemonology.net"
        },
        "author": null,
        "title": "Daily Hacker News for 2024-05-02",
        "description": "The 10 highest-rated articles on\nHacker News\non May 02, 2024 which have not appeared on any previous\nHacker News Daily\nare:\n<ul>\n<li>\nTesla conducting more layoffs, including entire Supercharger team\n(comments)\n</li>\n<li>\nTakeaways from the Jane Street bond p…",
        "url": "https://www.daemonology.net/hn-daily/2024-05-02.html",
        "urlToImage": null,
        "publishedAt": "2024-05-03T00:00:00Z",
        "content": "The 10 highest-rated articles on\r\nHacker News\r\non May 02, 2024 which have not appeared on any previous\r\nHacker News Daily\r\nare:"
      },
      {
        "source": {
          "id": null,
          "name": "CleanTechnica"
        },
        "author": "Zachary Shahan",
        "title": "Disneyland Refreshing Autopia Around Electric Vehicles",
        "description": "Did I know there was an Autopia at Disneyland? No, I did not. But I’m very happy to hear that Disney is now refreshing it in order to center it around electric cars. Of course, it’s good Disneyland is in California rather than Florida (where Disney World is) …",
        "url": "https://cleantechnica.com/2024/05/02/disneyland-refreshing-autopia-around-electric-vehicles/",
        "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/05/Autopia-at-Disneyland-2005.jpeg",
        "publishedAt": "2024-05-02T23:54:31Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nDid I know there was an Autopia at Disneyland? No, I did not. But I’m very happy to hear that Disney is now r… [+3157 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Noticiasautomotivas.com.br"
        },
        "author": "Ricardo de Oliveira",
        "title": "Tesla Cybertruck burla sanções e aparece em rua de Moscou",
        "description": "Agora fica bem evidente que sanções econômicas definitivamente caíram por terra com a globalização, já que vemos lugares como a Rússia, sendo regularmente",
        "url": "https://www.noticiasautomotivas.com.br/tesla-cybertruck-burla-sancoes-e-aparece-em-rua-de-moscou/",
        "urlToImage": "https://images.noticiasautomotivas.com.br/img/f/cybertruck-russia-e1714693945654.jpg",
        "publishedAt": "2024-05-02T23:52:46Z",
        "content": "cybertruck russia\r\nAgora fica bem evidente que sanções econômicas definitivamente caíram por terra com a globalização, já que vemos lugares como a Rússia, sendo regularmente abastecida com todo tipo … [+2033 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "Stock futures rise after Apple reports, traders look to April payrolls data: Live updates - CNBC",
        "description": "Stock futures rise after Apple reports, traders look to April payrolls data: Live updatesCNBC Dow closes more than 300 points higher, S&P 500 posts first winning day in three: Live updatesCNBC Wall Street ends higher as Fed signals dovish biasYahoo Finance Fu…",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=173713032",
        "urlToImage": null,
        "publishedAt": "2024-05-02T23:52:36Z",
        "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "businessinsider.com",
        "title": "I landed a dream internship at Tesla. Now I'm scrambling after the company cancelled my internship 3 weeks before I was set to start",
        "description": "SOPA Images/Getty Tesla is revoking summer internship offers as the automaker grapples with layoffs. One college senior said she was disappointed to lose her internship just weeks before she was set to start. Brook Gura said she turned down offers at other co…",
        "url": "https://biztoc.com/x/09a6d52874ba141f",
        "urlToImage": "https://c.biztoc.com/p/09a6d52874ba141f/s.webp",
        "publishedAt": "2024-05-02T23:36:04Z",
        "content": "SOPA Images/GettyTesla is revoking summer internship offers as the automaker grapples with layoffs.One college senior said she was disappointed to lose her internship just weeks before she was set to… [+295 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yanko Design"
        },
        "author": "Sarang Sheth",
        "title": "Humane AI Pin and Rabbit R1 versus Tech Reviewers: Who’s to blame?",
        "description": "Humane AI Pin and Rabbit R1 versus Tech Reviewers: Who’s to blame?There’s a massive missing link between tech companies and tech reviewers… and instead of fixing it, we’re playing the blame game. The backlash following bad...",
        "url": "https://www.yankodesign.com/2024/05/02/humane-ai-pin-and-rabbit-r1-versus-tech-reviewers-whos-to-blame/",
        "urlToImage": "https://www.yankodesign.com/images/design_news/2024/05/humane-and-rabbit-versus-tech-reviewers-whos-to-blame/humane_rabbit_tech_reviewers_who_to_blame_1.jpg",
        "publishedAt": "2024-05-02T23:30:43Z",
        "content": "There’s a massive missing link between tech companies and tech reviewers… and instead of fixing it, we’re playing the blame game.\r\nThe backlash following bad reviews from MKBHD and other tech outlets… [+7453 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "Why one economist says Elon Musk has turned Tesla into a meme stock",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_fa803662-07a5-4454-9ac8-500ea8fd8d85",
        "urlToImage": null,
        "publishedAt": "2024-05-02T23:30:12Z",
        "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": null,
        "title": "I landed a dream internship at Tesla. Now I'm scrambling after the company canceled my internship 3 weeks before I was set to start.",
        "description": null,
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_75cf13e2-9927-422c-9556-2625d9716f2b",
        "urlToImage": null,
        "publishedAt": "2024-05-02T23:24:44Z",
        "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "npr.org",
        "title": "Tesla hit an unexpected team with hundreds of layoffs",
        "description": "Tesla hit an unexpected team with hundreds of layoffs Tesla laid off hundreds of people. The company's supercharger network has been a striking success. So why did Elon Musk hit that team with devastating layoffs?#tesla #elonmusk",
        "url": "https://biztoc.com/x/71390cca38a81362",
        "urlToImage": "https://c.biztoc.com/p/71390cca38a81362/s.webp",
        "publishedAt": "2024-05-02T23:06:05Z",
        "content": "Tesla hit an unexpected team with hundreds of layoffsTesla laid off hundreds of people. The company's supercharger network has been a striking success. So why did Elon Musk hit that team with devasta… [+64 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "futurism.com",
        "title": "Tesla Fans Furious as Company Fires Supercharger Team, Cancels Supercharger Leases",
        "description": "Earlier this week, news emerged that Tesla CEO Elon Musk had let go of the entire 500-person team working on its Supercharger network, the company's flagship network of chargers that's significantly set it apart from its EV competitors. The company has even a…",
        "url": "https://biztoc.com/x/a344e9ebae4c4925",
        "urlToImage": "https://c.biztoc.com/p/a344e9ebae4c4925/og.webp",
        "publishedAt": "2024-05-02T23:04:12Z",
        "content": "Earlier this week, news emerged that Tesla CEO Elon Musk had let go of the entire 500-person team working on its Supercharger network, the company's flagship network of chargers that's significantly … [+300 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "finance.yahoo.com",
        "title": "Who Are Nvidia's Largest Customers?",
        "description": "Nvidia (NASDAQ: NVDA) has taken the tech world by storm over the last year and a half. While OpenAI's ChatGPT sparked the generative artificial intelligence (AI) boom, it's Nvidia that's captured most of the spoils thus far. Shares of the graphics processing …",
        "url": "https://biztoc.com/x/7405aff1433fef3e",
        "urlToImage": "https://c.biztoc.com/p/7405aff1433fef3e/s.webp",
        "publishedAt": "2024-05-02T23:00:06Z",
        "content": "Nvidia (NASDAQ: NVDA) has taken the tech world by storm over the last year and a half. While OpenAI's ChatGPT sparked the generative artificial intelligence (AI) boom, it's Nvidia that's captured mos… [+264 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "Camila Domonoske",
        "title": "Tesla hit an unexpected team with hundreds of layoffs",
        "description": "Tesla laid off hundreds of people. The company's supercharger network has been a striking success. So why did Elon Musk hit that team with devastating layoffs?",
        "url": "https://www.npr.org/2024/05/02/1248778680/tesla-hit-an-unexpected-team-with-hundreds-of-layoffs",
        "urlToImage": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
        "publishedAt": "2024-05-02T22:46:18Z",
        "content": "Tesla laid off hundreds of people. The company's supercharger network has been a striking success. So why did Elon Musk hit that team with devastating layoffs?"
      },
      {
        "source": {
          "id": null,
          "name": "Smartworld.it"
        },
        "author": "Vincenzo Ronca",
        "title": "Cybertruck in giro per l'Italia: ecco dove e quando",
        "description": "Tesla Cybertruck si farà un bel giro lungo l'Italia: ecco dove e quando potrete vederlo.\r\nL'articolo Cybertruck in giro per l'Italia: ecco dove e quando sembra essere il primo su Smartworld.",
        "url": "https://mobility.smartworld.it/cybertruck-giro-italia.html",
        "urlToImage": "https://mobility.smartworld.it/images/2023/12/11/tesla-cybertruck_1200x675.jpg",
        "publishedAt": "2024-05-02T22:29:00Z",
        "content": "Tesla Cybertruck è stato sicuramente il SUV elettrico più chiacchierato degli ultimi tempi, una vettura unica nel suo genere, soprattutto per il design, e che finora è rimasta un'esclusiva del mercat… [+1037 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "aol.com",
        "title": "Top Gear gets early look at Cybertruck update that'll help prevent fingers from being crushed in the 'frunk'",
        "description": "None There's a software update for sensors that will hopefully prevent smashed fingers, as well as a sleek new cooler. • None The \"Cybertent,\" which is integrated into the truck bed, sells for about $3,000. The Top Gear crew took the Cybertruck camping and go…",
        "url": "https://biztoc.com/x/899ead6a7c150469",
        "urlToImage": "https://c.biztoc.com/p/899ead6a7c150469/s.webp",
        "publishedAt": "2024-05-02T22:24:05Z",
        "content": "None There's a software update for sensors that will hopefully prevent smashed fingers, as well as a sleek new cooler.None The \"Cybertent,\" which is integrated into the truck bed, sells for about $3,… [+255 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "MarketWatch"
        },
        "author": null,
        "title": "'On Watch' podcast: The problems with the middle class and ketamine therapy",
        "description": "MarketWatch reporter Venessa Wong explains how inflation jeopardizes the middle class. Plus, colleague Eleanor Laise breaks down the worrisome aspects of taking ketamine for depression without guidance.",
        "url": "https://www.marketwatch.com/podcasts/on-watch-by-marketwatch/the-problems-with-the-middle-class-and-ketamine-therapy/206448de-7282-4ecb-a05c-617e25216be4?g=9619dd9f-82c0-4113-b24e-945be3c6224b&mod=mw_rss_bulletins",
        "urlToImage": "https://images.wsj.net/im-930787?width=1280",
        "publishedAt": "2024-05-02T22:22:08Z",
        "content": "This transcript was prepared by a transcription service. This version may not be in its final form and may be updated.\r\nJeremy Owens: Hello and welcome to On Watch by MarketWatch. I'm Jeremy Owens.\r\n… [+26787 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Inside the Magic"
        },
        "author": "Rick Lye",
        "title": "Guests Have To Take out a Second Mortgage for This Disney World Souvenir",
        "description": "No trip to the Walt Disney World Resort would be complete without the perfect souvenir to remember your time in the Most Magical Place on Earth. And every Disney fan has their favorite souvenir that they buy for each trip. Some people will gravitate toward Mi…",
        "url": "https://insidethemagic.net/2024/05/spaceship-earth-disney-world-79000-souvenir-rl1/",
        "urlToImage": "https://insidethemagic.net/wp-content/uploads/2023/11/spaceship-earth-epcot.jpg",
        "publishedAt": "2024-05-02T22:16:15Z",
        "content": "No trip to the Walt Disney World Resort would be complete without the perfect souvenir to remember your time in the Most Magical Place on Earth. And every Disney fan has their favorite souvenir that … [+2264 chars]"
      },
      {
        "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
        },
        "author": "Trisha Thadani,Chris Velazco and Eva Dou, (c) 2024 , The Washington Post",
        "title": "Apple is behind in AI and killed its self-driving car project. What’s next?",
        "description": "SAN FRANCISCO - Lines used to stretch around the block at Apple’s flagship Union Square retail store and others around the world, with hordes of eager...",
        "url": "https://washingtonpost.com/technology/2024/05/02/apple-sales-ai-iphone-earnings-regulations/",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/kvr4hLqsInToB3Co3R7s.g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/washington_post_articles_265/aab8ab708c4c2d7ff3dc0584cebbd995",
        "publishedAt": "2024-05-02T22:11:01Z",
        "content": "SAN FRANCISCO - Lines used to stretch around the block at Apples flagship Union Square retail store and others around the world, with hordes of eager customers camping out for days, just to be among … [+11174 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Expresso.pt"
        },
        "author": "Expresso",
        "title": "Mobilidade elétrica leva Musk à China e alimenta expectativas sobre condução autónoma",
        "description": "Elon Musk, cofundador e acionista da Tesla, esteve no domingo em Pequim para participar no 18º Salão Automóvel da China",
        "url": "https://expresso.pt/semanario/primeiro/em-destaque/2024-05-02-mobilidade-eletrica-leva-musk-a-china-e-alimenta-expectativas-sobre-conducao-autonoma-c9ffc6dd",
        "urlToImage": "https://images.impresa.pt/expresso/2024-05-01-_tesla-musk-investors_t-_idp.jpg-571cd7e9",
        "publishedAt": "2024-05-02T21:57:00Z",
        "content": "Elon Musk, cofundador e acionista da Tesla, esteve no domingo em Pequim para participar no 18º Salão Automóvel da China, e reuniu-se com o primeiro-ministro chinês, Li Qiang, que lhe transmitiu que a… [+433 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Odatv.com"
        },
        "author": "Odatv",
        "title": "Tesla 7 takla attı sürücüsü sağ kurtuldu",
        "description": "Çin'de 7 kez takla atan Tesla Model Y'den sürücü ve yolcu sağ kurtulmayı başardı.",
        "url": "https://www.odatv.com/guncel/tesla-7-takla-atti-surucusu-sag-kurtuldu-120041657",
        "urlToImage": "https://img.odatv.com/rcman/Cw1280h720q95gc/storage/files/images/2024/05/03/tesla-7-takla-atti-surucusu-sag-kurtuldu-1kov.jpg",
        "publishedAt": "2024-05-02T21:53:30Z",
        "content": "Çin'de 7 kez takla atan Tesla Model Y'den sürücü ve yolcu sa kurtulmay baard.\r\nAraçlarda yaam alan denilen koltuklarn olduu bölümde herhangi bir çökme yaanmad görülen araçta sk sk bahsedilen pilinde … [+133 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "WGRZ.com"
        },
        "author": "Wgrz Staff",
        "title": "Tesla layoffs 2024: Buffal plant impacted again",
        "description": "This is the second layoff notice Tesla has filed with New York State in the past two weeks.",
        "url": "https://www.wgrz.com/article/money/business/tesla-layoffs-2024-jobs-wny/71-8fe9f3ed-5ee9-48ca-bc61-757b32a579c0",
        "urlToImage": "https://media.wgrz.com/assets/WGRZ/images/a388918b-3a6f-4ce4-abfa-a8f76fc40dab/a388918b-3a6f-4ce4-abfa-a8f76fc40dab_1140x641.jpg",
        "publishedAt": "2024-05-02T21:53:08Z",
        "content": "BUFFALO, N.Y. Tesla has announced another round of layoffs at their Buffalo plant in South Buffalo.\r\nTesla filed a WARN notice with New York State on April 29, 2024 that was posted May 1.   According… [+1586 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "TipRanks",
        "title": "Down 57% from Highs, Is Tesla (NASDAQ:TSLA) Stock a Buy Now?",
        "description": "While Tesla (NASDAQ:TSLA) has generated game-changing wealth for long-term shareholders, it has trailed the broader markets by a wide margin in the last two ...",
        "url": "https://finance.yahoo.com/news/down-57-highs-tesla-nasdaq-214758046.html",
        "urlToImage": "https://media.zenfs.com/en/tipranks_452/84057e7d0355e2c1afa89e3a3d33f772",
        "publishedAt": "2024-05-02T21:47:58Z",
        "content": "While Tesla (NASDAQ:TSLA) has generated game-changing wealth for long-term shareholders, it has trailed the broader markets by a wide margin in the last two years. Tesla stock has returned a whopping… [+6429 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CleanTechnica"
        },
        "author": "Steve Hanley",
        "title": "EV Sales Continue To Increase In Norway",
        "description": "Norway may have eliminated most of its major EV incentives, but sales of electric cars continue to climb higher anyway. \nThe post EV Sales Continue To Increase In Norway appeared first on CleanTechnica.",
        "url": "https://cleantechnica.com/2024/05/02/ev-sales-continue-to-increase-in-norway/",
        "urlToImage": "https://cleantechnica.com/wp-content/uploads/2023/11/2023.10-volvo-ex30-barcelona-global-first-drive-event-KYLE-01-scaled-1.jpg",
        "publishedAt": "2024-05-02T21:45:54Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nNorway has been a staunch supporter of the EV revolution for more than a decade. At various times, it has boo… [+5432 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "npr.org",
        "title": "Want to understand America's labor movement? Head south : Consider This from",
        "description": "You're reading the Consider This newsletter, which unpacks one major news story each day. Subscribe here to get it delivered to your inbox, and listen to more from the Consider This podcast. If you measure success in headlines, the last 12 months have been a …",
        "url": "https://biztoc.com/x/dc7cfe0cad697362",
        "urlToImage": "https://c.biztoc.com/p/dc7cfe0cad697362/s.webp",
        "publishedAt": "2024-05-02T21:42:05Z",
        "content": "You're reading the Consider This newsletter, which unpacks one major news story each day. Subscribe here to get it delivered to your inbox, and listen to more from the Consider This podcast.If you me… [+291 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "NPR",
        "title": "Want to understand America's labor movement? Head south",
        "description": "If you go by headlines, the last 12 months have delivered major wins to organized labor. <br><br>But despite well publicized victories the rate of U.S. union membership fell to a record low in 2023. Just 10%. <br><br>And in southern states, the push to unioni…",
        "url": "https://www.npr.org/2024/05/02/1198911388/labor-union-organizing-south-uaw-mercedes-amazon-mine-workers-momentum",
        "urlToImage": "https://media.npr.org/assets/img/2024/05/02/20240327-_dsc8116-1-_wide-15977884545579769b9048c3463caf6cb24ec917.jpg?s=1400&c=100&f=jpeg",
        "publishedAt": "2024-05-02T21:37:02Z",
        "content": "Jeremy Kimbrell has worked at the Mercedes-Benz plant in Vance, Ala., since 1999. Having been involved in several failed union drives, he says this latest one feels different.\r\nClaire Harbage/NPR\r\nYo… [+4224 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "STERN.de"
        },
        "author": "Lutz Meier",
        "title": "Elektroauto: Viele Kanten, wenig Liebe: Teslas Cybertruck stößt in Berlin auf wenig Zuneigung",
        "description": "Erstmals zeigt Tesla seinen SUV in Europa und hat sich dafür ein Einkaufszentrum ausgesucht. Doch selbst hartgesottene Tesla-Fans wissen nicht, was sie von dem Gefährt halten sollen.",
        "url": "https://www.stern.de/wirtschaft/-der-cybertruck-kommt-nach-deutschland---zumindest-fuer-ein-paar-tage-34679486.html",
        "urlToImage": "https://image.stern.de/34679488/t/Ij/v4/w1440/r1.7778/-/cybertruck-tesla-460748674.jpg",
        "publishedAt": "2024-05-02T21:24:00Z",
        "content": "02.05.2024, 23:24\r\n 5 Min.\r\nErstmals zeigt Tesla seinen SUV in Europa und hat sich dafür ein Einkaufszentrum ausgesucht. Doch selbst hartgesottene Tesla-Fans wissen nicht, was sie von dem Gefährt hal… [+7195 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "businessinsider.com",
        "title": "Top Gear gets early look at Cybertruck update that'll help prevent fingers from being crushed in the 'frunk'",
        "description": "Tesla's Cybertruck includes a camping option, which was recently tested by Top Gear. Tesla Top Gear recently tested the Tesla Cybertruck's camping accessories. There's a software update for sensors that will hopefully prevent smashed fingers, as well as a sle…",
        "url": "https://biztoc.com/x/5aa99b5d0349e7c9",
        "urlToImage": "https://c.biztoc.com/p/5aa99b5d0349e7c9/s.webp",
        "publishedAt": "2024-05-02T21:16:05Z",
        "content": "Tesla's Cybertruck includes a camping option, which was recently tested by Top Gear.TeslaTop Gear recently tested the Tesla Cybertruck's camping accessories.There's a software update for sensors that… [+273 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Marketscreener.com"
        },
        "author": null,
        "title": "Industrials Advance Slightly Ahead of Jobs Data -- Industrials Roundup",
        "description": "(marketscreener.com) \n Shares of industrial and transportation companies rose slightly ahead of jobs data. \n\n The number of Americans who applied for unemployment benefits last week barely rose to 208,000, boding well for the April report on Friday. \n\n BYD, t…",
        "url": "https://www.marketscreener.com/news/latest/Industrials-Advance-Slightly-Ahead-of-Jobs-Data-Industrials-Roundup-46610993/",
        "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
        "publishedAt": "2024-05-02T21:12:45Z",
        "content": "Shares of industrial and transportation companies rose slightly ahead of jobs data. \r\nThe number of Americans who applied for unemployment benefits last week barely rose to 208,000, boding well for t… [+559 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New Atlas"
        },
        "author": "Ben Coxworth",
        "title": "New kits bring out the inner campervan in your Tesla or Rivian",
        "description": "If you're an avid camper who drives a Tesla Model Y or a Rivian R1S, chances are you'll love Fruble's new Camper Kits for those EVs. Both kits feature pullout drawers for meal preparation and gear storage, along with optional in-vehicle sleeping platforms.Con…",
        "url": "https://newatlas.com/outdoors/fruble-camper-kit-tesla-rivian/",
        "urlToImage": "https://assets.newatlas.com/dims4/default/85f933b/2147483647/strip/true/crop/1440x756+0+102/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F8d%2F58%2F728549d140828de0c8c3edcd3eb6%2Flite-lifestyle-4-by-kyle-field.jpeg&na.image_optimisation=0",
        "publishedAt": "2024-05-02T21:11:42Z",
        "content": "If you're an avid camper who drives a Tesla Model Y or a Rivian R1S, chances are you'll love Fruble's new Camper Kits for those EVs. Both kits feature pullout drawers for meal preparation and gear st… [+2438 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Securityaffairs.com"
        },
        "author": "Pierluigi Paganini",
        "title": "Ukrainian REvil gang member sentenced to 13 years in prison",
        "description": "A Ukrainian national, a member of the REvil group, has been sentenced to more than 13 years in prison for his role in extortion activities. The Ukrainian national, Yaroslav Vasinskyi (24), aka Rabotnik, has been sentenced to more than 13 years in prison and m…",
        "url": "https://securityaffairs.com/162679/cyber-crime/revil-gang-member-sentenced.html",
        "urlToImage": "https://securityaffairs.com/wp-content/uploads/2015/03/DoJ.jpg",
        "publishedAt": "2024-05-02T21:11:38Z",
        "content": "Ukrainian REvil gang member sentenced to 13 years in prison\r\n | HPE Aruba Networking addressed four critical ArubaOS RCE flaws\r\n | Threat actors hacked the Dropbox Sign production environment\r\n | CIS… [+65649 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Biztoc.com"
        },
        "author": "gizmodo.com",
        "title": "Tesla’s Interns Reportedly Feeling the Wrath of Elon Musk",
        "description": "Elon Musk said he wanted to be “absolutely hardcore” about reducing Tesla’s headcount earlier this week, and it looks like he’s entered full “demon mode,” as his biographer calls it. Now, an unlikely cohort is feeling his wrath: Tesla’s summer interns. Colleg…",
        "url": "https://biztoc.com/x/64c2df4691d8e810",
        "urlToImage": "https://c.biztoc.com/p/64c2df4691d8e810/og.webp",
        "publishedAt": "2024-05-02T21:10:09Z",
        "content": "Elon Musk said he wanted to be absolutely hardcore about reducing Teslas headcount earlier this week, and it looks like hes entered full demon mode, as his biographer calls it. Now, an unlikely cohor… [+252 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Finance.ua"
        },
        "author": "Finance.UA",
        "title": "Tesla, Marathon, Nexon и другие: у каких корпораций больше всего биткоинов",
        "description": "Многие мировые компании публично торгуют криптовалютой. Среди них, в частности, компания Tesla Илона Маска.",
        "url": "https://news.finance.ua/ru/tesla-marathon-nexon-i-drugie-u-kakih-korporaciy-bol-she-vsego-bitkoinov",
        "urlToImage": "https://finance-news-media.fra1.cdn.digitaloceanspaces.com/prod/c/f/cfb262c5b44a1a060dccf3758bf7fd6e",
        "publishedAt": "2024-05-02T21:08:00Z",
        "content": ""
      },
      {
        "source": {
          "id": null,
          "name": "Mobile-review.com"
        },
        "author": "Константин Иванов",
        "title": "Пятница будущего: о новостях космического туризма и об успехах импортозамещения",
        "description": "ИИ в 3 из 4 ноутбуков, реверс-инжиниринг «Росатома», мобильные игры будут все более китайскими, Harmony OS станет настоящей ОС, выгодный краудфандинг не про производство, летальные ДТП с автопилотом Tesla, атомные часы еще точнее и снова о «мистификации» поле…",
        "url": "https://mobile-review.com/all/articles/friday-future/pyatnicza-budushhego-87/",
        "urlToImage": "https://mobile-review.com/all/wp-content/uploads/2024/05/04.webp",
        "publishedAt": "2024-05-02T21:02:00Z",
        "content": "! , . , , , . «» -, . . . Counterpoint , . Huawei Harmony OS , Android, , , . — , . : , Tesla . : - .\r\n Counterpoint , . , - . , 2027 .   Microsoft, . Intel AMD . , 2027 3% , 59% , , 2027 . , .\r\n, . … [+1082 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Mobile-review.com"
        },
        "author": "Михаил Волков",
        "title": "Уголок изобретателя №31. Не человекоподобный робот",
        "description": "Впечатляющий внешний вид и изящные линии человекоподобных роботов сегодня радуют глаз из каждого информационного хайтек-закутка. Попробуем немного приземлить оптимистов-визионеров.",
        "url": "https://mobile-review.com/all/articles/misc/ugolok-izobretatelya-n31-ne-chelovekopodobnyj-robot/",
        "urlToImage": "https://mobile-review.com/all/wp-content/uploads/2024/05/5113.jpg",
        "publishedAt": "2024-05-02T21:01:00Z",
        "content": ".\r\n . , . . , . , , , , . . , , . , - . . . . . , , , .\r\n«». , . , , . . , , , , . , , , , . .\r\n, -, -. - , ( ) . — . , , :\r\n- , , . . . , , . , . , , . . . , .\r\n Telegram- , , . , . , . , . , . , , … [+607 chars]"
      }
    ]
  
    // console.log(articles[0].author);
  return (
    <div>
      <Navbar />
      <div className="row">
        {recipe && recipe.map((element) => (
          <div key={element.url} className="col-sm-3" >
            <Card title={element} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
