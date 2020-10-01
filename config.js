const config = {
    style: "mapbox://styles/mapbox/streets-v11",
    accessToken: "pk.eyJ1Ijoiam1lbmRpZXRhIiwiYSI6ImNrN3V6enNrbTA2ODIzZnBlbmZhZDN5azcifQ.cs3hBZjhkgwdHR_m4bD5yQ",
    CSV: "https://docs.google.com/spreadsheets/d/1ckRR_D1mOhPqYkL_mkFVijyU6jseHJBy922THPt4RFM/gviz/tq?tqx=out:csv&sheet=Sheet1",
    center: [-73.935242, 40.730610], //Lng, Lat
    zoom: 8, //Default zoom
    title: "Early Voting Poll Sites NYC",
    description: "Type an address to sort the list of early voting poll sites by distance, or filter by borough, and by sure to verify your poll site at findmypollsite.vote.nyc",
    sideBarInfo: ["Name", "Address", "Zip Code"],
    popupInfo: ["Name"],
    filters: [
        {
            type: "checkbox",
            title: "Borough: ",
            columnHeader: "Borough",
            listItems: ["Manhattan", "The Bronx", "Brooklyn", "Queens", "Staten Island"]
        }
    ]

};
