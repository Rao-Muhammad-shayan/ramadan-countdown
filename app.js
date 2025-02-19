const ramadanData ={
    "city": "Karachi",
    "country": "Pakistan",
    "ramadan_2025": [
      { "day": 1, "date": "March 1, 2025", "sehri": "05:37 AM", "iftari": "06:29 PM" },
      { "day": 2, "date": "March 2, 2025", "sehri": "05:36 AM", "iftari": "06:29 PM" },
      { "day": 3, "date": "March 3, 2025", "sehri": "05:35 AM", "iftari": "06:30 PM" },
      { "day": 4, "date": "March 4, 2025", "sehri": "05:34 AM", "iftari": "06:30 PM" },
      { "day": 5, "date": "March 5, 2025", "sehri": "05:33 AM", "iftari": "06:31 PM" },
      { "day": 6, "date": "March 6, 2025", "sehri": "05:32 AM", "iftari": "06:31 PM" },
      { "day": 7, "date": "March 7, 2025", "sehri": "05:31 AM", "iftari": "06:32 PM" },
      { "day": 8, "date": "March 8, 2025", "sehri": "05:30 AM", "iftari": "06:32 PM" },
      { "day": 9, "date": "March 9, 2025", "sehri": "05:29 AM", "iftari": "06:33 PM" },
      { "day": 10, "date": "March 10, 2025", "sehri": "05:28 AM", "iftari": "06:33 PM" },
      { "day": 11, "date": "March 11, 2025", "sehri": "05:27 AM", "iftari": "06:34 PM" },
      { "day": 12, "date": "March 12, 2025", "sehri": "05:26 AM", "iftari": "06:34 PM" },
      { "day": 13, "date": "March 13, 2025", "sehri": "05:25 AM", "iftari": "06:35 PM" },
      { "day": 14, "date": "March 14, 2025", "sehri": "05:24 AM", "iftari": "06:35 PM" },
      { "day": 15, "date": "March 15, 2025", "sehri": "05:23 AM", "iftari": "06:36 PM" },
      { "day": 16, "date": "March 16, 2025", "sehri": "05:22 AM", "iftari": "06:36 PM" },
      { "day": 17, "date": "March 17, 2025", "sehri": "05:21 AM", "iftari": "06:37 PM" },
      { "day": 18, "date": "March 18, 2025", "sehri": "05:20 AM", "iftari": "06:37 PM" },
      { "day": 19, "date": "March 19, 2025", "sehri": "05:19 AM", "iftari": "06:38 PM" },
      { "day": 20, "date": "March 20, 2025", "sehri": "05:18 AM", "iftari": "06:38 PM" },
      { "day": 21, "date": "March 21, 2025", "sehri": "05:17 AM", "iftari": "06:39 PM" },
      { "day": 22, "date": "March 22, 2025", "sehri": "05:16 AM", "iftari": "06:39 PM" },
      { "day": 23, "date": "March 23, 2025", "sehri": "05:15 AM", "iftari": "06:40 PM" },
      { "day": 24, "date": "March 24, 2025", "sehri": "05:14 AM", "iftari": "06:40 PM" },
      { "day": 25, "date": "March 25, 2025", "sehri": "05:13 AM", "iftari": "06:41 PM" },
      { "day": 26, "date": "March 26, 2025", "sehri": "05:12 AM", "iftari": "06:41 PM" },
      { "day": 27, "date": "March 27, 2025", "sehri": "05:11 AM", "iftari": "06:42 PM" },
      { "day": 28, "date": "March 28, 2025", "sehri": "05:10 AM", "iftari": "06:42 PM" },
      { "day": 29, "date": "March 29, 2025", "sehri": "05:09 AM", "iftari": "06:43 PM" },
      { "day": 30, "date": "March 30, 2025", "sehri": "05:08 AM", "iftari": "06:43 PM" }
    ]
  }
  console.log(moment(ramadanData.ramadan_2025[0].date, "MMMM D, YYYY").fromNow());


  let sehriTime=ramadanData.ramadan_2025.map(d=>{
    return d.sehri
  })
 
  localStorage.setItem("sehri k Auqaat",JSON.stringify(sehriTime))
 let sehriShare=JSON.parse(localStorage.getItem("sehri k Auqaat"))
 console.log(sehriShare);