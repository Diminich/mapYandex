import {TypeSchools} from "../Types/Types";

const initialState: TypeSchools = {
    schools: [
        {
            "name": "J.K. Mullen High School",
            "website": "http://www.mullenhigh.com",
            "levels": ["High School"],
            "format": "In School",
            "format_description": "Daily programming course",
            "gender": "Both",
            "description": "Introduction to Java Programming",
            "languages": ["Alice", "Java"],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": "Mullen High School",
            "contact_number": "3037611764",
            "contact_email": "mcguire@mullenhigh.com",
            "latitude": 39.6515,
            "longitude": -105.035,
            "street": "3602 S. Lowell Blvd",
            "city": "Denver",
            "state": "CO",
            "zip": "50236",
            "published": 1,
            "updated_at": "2013-02-26T13:31:23Z",
            "country": "United States",
            "source": "user"
        },
        {
            "name": "Lynn Classical High School",
            "website": "http://www.lynnclassical.org",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming course",
            "gender": "Both",
            "description": "Honors Level Computer Programming with Java and C++",
            "languages": [
                "C++",
                "Java"
            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": "Stephen Brass",
            "contact_number": "781-477-7404",
            "contact_email": "brasss@lynnschools.org",
            "latitude": 42.4656,
            "longitude": -70.9848,
            "street": "235 O'Callaghan Way",
            "city": "Lynn",
            "state": "MA",
            "zip": "01905",
            "published": 1,
            "updated_at": "2013-02-26T13:31:27Z",
            "country": "United States",
            "source": "user"
        },
        {
            "name": "South Anchorage HS",
            "website": "http://www.asdk12.org/schools/south/pages/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": "",
            "languages": [],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": "",
            "contact_number": "907-742-6200",
            "contact_email": "",
            "latitude": 61.1,
            "longitude": -149.804,
            "street": "13400 Elmore Rd",
            "city": "Anchorage",
            "state": "AK",
            "zip": "99516",
            "published": 1,
            "updated_at": "2013-01-18T21:07:53Z",
            "country": "United States",
            "source": "user"
        },
        {
            "name": "Wasilla High School",
            "website": "http://www.matsuk12.us/Domain/3108",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "907-352-8200",
            "contact_email": null,
            "latitude": 61.5868,
            "longitude": -149.432,
            "street": "701 E Bogard Rd",
            "city": "Wasilla",
            "state": "AK",
            "zip": "99654",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Alabama School of Fine Arts",
            "website": "http://www.asfa.k12.al.us/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "205-252-9241",
            "contact_email": null,
            "latitude": 33.5204,
            "longitude": -86.8133,
            "street": "1800 Rev Abraham Woods Jr Blvd",
            "city": "Birmingham",
            "state": "AL",
            "zip": "35203",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Alabama School of Mathematics and Science",
            "website": "http://www.asms.net/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "251-441-2100",
            "contact_email": null,
            "latitude": 30.6873,
            "longitude": -88.0645,
            "street": "1255 Dauphin St",
            "city": "Mobile",
            "state": "AL",
            "zip": "36604",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Alma Bryant High School",
            "website": "http://bryant.mcs.schoolinsites.com/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "251-824-3213",
            "contact_email": null,
            "latitude": 30.4429,
            "longitude": -88.2806,
            "street": "14001 Hurricane Blvd",
            "city": "Bayou La Batre",
            "state": "AL",
            "zip": "36544",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "American Christian Academy",
            "website": "http://www.acacademy.com/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "205-553-5963",
            "contact_email": null,
            "latitude": 33.1977,
            "longitude": -87.5082,
            "street": "2300 Veterans Memorial Pkwy",
            "city": "Tuscaloosa",
            "state": "AL",
            "zip": "35404",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Bessemer Center for Technology",
            "website": "http://bessemer.bcst.schoolinsites.com/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "205-432-3778",
            "contact_email": null,
            "latitude": 33.37,
            "longitude": -87.0028,
            "street": "4950 Premere Parkway",
            "city": "Bessemer",
            "state": "AL",
            "zip": "35404",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Bob Jones High School",
            "website": "http://bjhs.madisoncity.k12.al.us/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(256) 772-2547",
            "contact_email": null,
            "latitude": 34.72,
            "longitude": -86.7418,
            "street": "650 Hughes Road",
            "city": "Madison",
            "state": "AL",
            "zip": "35758",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Dadeville High School",
            "website": "http://www.tallapoosak12.org/dhs",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "256-825-7848",
            "contact_email": null,
            "latitude": 32.8282,
            "longitude": -85.7548,
            "street": "227 Weldon Street",
            "city": "Dadeville",
            "state": "AL",
            "zip": "36853",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Dale County Christian School",
            "website": "http://dccs.ewellbaptist.org/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "334.774.4127",
            "contact_email": null,
            "latitude": 31.4231,
            "longitude": -85.5724,
            "street": "64 Susie Street",
            "city": "Ozark",
            "state": "AL",
            "zip": "36360",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Demopolis High School",
            "website": "http://www.dcsedu.com/education/school/school.php?sectionid=2034&linkid=nav-menu-container-1-14662",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(334) 289-0294",
            "contact_email": null,
            "latitude": 32.4983,
            "longitude": -87.8464,
            "street": "701 Hwy. 80 West",
            "city": "Demopoli",
            "state": "AL",
            "zip": "36732",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Elmore County High School",
            "website": "http://elmorecounty.ech.schoolinsites.com/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "334-541-3662",
            "contact_email": null,
            "latitude": 32.6342,
            "longitude": -86.03,
            "street": "155 N College Ave",
            "city": "Eclectic",
            "state": "AL",
            "zip": "36024",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Emmanuel Christian School",
            "website": "http://emmanuelchristian.org/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "334-792-0935",
            "contact_email": null,
            "latitude": 31.1997,
            "longitude": -85.4384,
            "street": "178 Earline Rd",
            "city": "Dothan",
            "state": "AL",
            "zip": "36305-4200",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Houston County Career and Technical Center",
            "website": "https://sites.google.com/site/houstoncountycareertech/home",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "334-899-3308",
            "contact_email": null,
            "latitude": 31.1846,
            "longitude": -85.2299,
            "street": "801 8th Ave",
            "city": "Ashford",
            "state": "AL",
            "zip": "36312",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "NCTHS",
            "website": "http://www.hsv.k12.al.us/schools/high/nchs/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "256.428.7800",
            "contact_email": null,
            "latitude": 34.7228,
            "longitude": -86.6954,
            "street": "300 Explorer Blvd.",
            "city": "Huntsville",
            "state": "AL",
            "zip": "36312",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Oakwood Adventist Academy",
            "website": "http://www.oa.oakwood.edu/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(256) 726-7010",
            "contact_email": null,
            "latitude": 34.7557,
            "longitude": -86.6606,
            "street": "7000 Adventist Blvd",
            "city": "Huntsville",
            "state": "AL",
            "zip": "35896",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Southern Academy",
            "website": "http://southernacademy.net/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": " 334-624-8111",
            "contact_email": null,
            "latitude": 32.7009,
            "longitude": -87.5838,
            "street": "407 College Street",
            "city": "Greensboro",
            "state": "AL",
            "zip": "36744",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Tuscaloosa Academy",
            "website": "http://www.tuscaloosaacademy.org/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": " 205 - 758 - 4462",
            "contact_email": null,
            "latitude": 33.2423,
            "longitude": -87.5393,
            "street": "420 Rice Valley Rd. N.",
            "city": "Tuscaloosa",
            "state": "AL",
            "zip": "35406",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Tuscaloosa Center for Technology",
            "website": "http://www.tct.tusc.k12.al.us/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(205)759-3649",
            "contact_email": null,
            "latitude": 33.147,
            "longitude": -87.556,
            "street": "James Harrison Jr. Parkway",
            "city": "Tuscaloosa",
            "state": "AL",
            "zip": "35405",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "West Morgan High School",
            "website": "http://www.westmorganhighschool.org/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(256) 353-5214",
            "contact_email": null,
            "latitude": 34.5894,
            "longitude": -87.0804,
            "street": "261 South Greenway Drive",
            "city": "Trinity",
            "state": "AL",
            "zip": "35674",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Westminster Christian Academy",
            "website": "http://www.wca-hsv.org/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "256.705.8300",
            "contact_email": null,
            "latitude": 32.6144,
            "longitude": -86.6807,
            "street": "Johns Road",
            "city": "Huntvsillve",
            "state": "AL",
            "zip": null,
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Wilson School",
            "website": "http://wilson.lce.schoolinsites.com/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "256-764-8470",
            "contact_email": null,
            "latitude": 34.9255,
            "longitude": -87.6696,
            "street": "7601 Highway 17",
            "city": "Florence",
            "state": "AL",
            "zip": "35634",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Heber Springs High School",
            "website": "http://hs.hssd.k12.ar.us/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(501)362-3141",
            "contact_email": null,
            "latitude": 35.4956,
            "longitude": -92.0377,
            "street": "800 West Pine",
            "city": "Heber Spring",
            "state": "AR",
            "zip": "72543",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "LISA Academy",
            "website": "http://www.lisaacademy.org/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(501) 246-5853",
            "contact_email": null,
            "latitude": 34.7525,
            "longitude": -92.3861,
            "street": "21 Corporate Hill dr.",
            "city": "Little rock",
            "state": "AR",
            "zip": "72205",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "LISA Academy - NLR",
            "website": "http://www.lisanorth.org/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(501) 945-2727",
            "contact_email": null,
            "latitude": 34.8012,
            "longitude": -92.2136,
            "street": "5410 Landers Rd.",
            "city": "Sherwood",
            "state": "AR",
            "zip": "72120",
            "published": 1,
            "updated_at": "2013-01-11T01:59:08Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Mammoth Spring High School",
            "website": "http://www.edline.net/pages/Mammoth_Spring_High_School",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "870-625-3612",
            "contact_email": null,
            "latitude": 36.4909,
            "longitude": -91.5419,
            "street": "410 Goldsmith Ave.",
            "city": "Mammoth Spring",
            "state": "AR",
            "zip": "72554",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Manila High School",
            "website": "http://mps.crsc.k12.ar.us/manila_high_sch.htm",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "870-561-4417",
            "contact_email": null,
            "latitude": 35.8511,
            "longitude": -90.1777,
            "street": "PO Box 749",
            "city": "Manila",
            "state": "AR",
            "zip": "72442",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Mt. Vernon - Enola",
            "website": "http://mve.k12.ar.us/links.htm",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(501) 849-2221",
            "contact_email": null,
            "latitude": 35.2263,
            "longitude": -92.1299,
            "street": "38 Garland Springs Road",
            "city": "Mt. Vernon",
            "state": "AR",
            "zip": "72111",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Rogers High School",
            "website": "http://rhs.rogersschools.net/?sessionid=dea67a79504242915e00eaec7880b42d&t",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "479-636-2202",
            "contact_email": null,
            "latitude": 36.3006,
            "longitude": -94.1447,
            "street": "2300 South Dixieland Road",
            "city": "Roger",
            "state": "AR",
            "zip": "72758",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Springdale Har-Ber High School",
            "website": "http://springdalehb.sharpschool.net/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": "",
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": "",
            "contact_number": "479-750-8777",
            "contact_email": "",
            "latitude": 36.1843,
            "longitude": -94.2122,
            "street": "300 Jones Road",
            "city": "Springdale",
            "state": "AR",
            "zip": "72762",
            "published": 1,
            "updated_at": "2013-01-30T23:18:42Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Valley View High School",
            "website": "http://blazers.k12.ar.us/HighSchool/index.htm",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "870-932-3737",
            "contact_email": null,
            "latitude": 35.7779,
            "longitude": -90.7404,
            "street": "2118 Valley View Drive",
            "city": "Jonesoboro",
            "state": "AR",
            "zip": "72404",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Van Buren High School",
            "website": "http://teacher.vbsd.us/vbhs/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": null,
            "contact_email": null,
            "latitude": 35.4585,
            "longitude": -94.3381,
            "street": "2001 East Pointer Trail",
            "city": "Van Buren",
            "state": "AR",
            "zip": "72956",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Arcadia High School",
            "website": "http://susd.arcadia.schoolfusion.us/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "480-484-6300 ",
            "contact_email": null,
            "latitude": 33.4946,
            "longitude": -111.981,
            "street": "4703 E. Indian School Road",
            "city": "Phoenix",
            "state": "AZ",
            "zip": "85018",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Arizona Call-a-Teen Center of Excellence",
            "website": "http://www.acyraz.org/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "602-252-6721",
            "contact_email": null,
            "latitude": 33.4557,
            "longitude": -112.081,
            "street": "649 N. 6th Ave",
            "city": "Phoenix",
            "state": "AZ",
            "zip": "85003",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Barry Goldwater High School",
            "website": "https://bghs.dvusd.org/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(623) 445-5000",
            "contact_email": null,
            "latitude": 33.6766,
            "longitude": -112.12,
            "street": "2820 W Rose Garden Lane",
            "city": "Phoenix",
            "state": "AZ",
            "zip": "85027",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Centennial High School",
            "website": "https://www.peoriaud.k12.az.us/Pages/Default.aspx",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": null,
            "contact_email": null,
            "latitude": 33.6155,
            "longitude": -112.229,
            "street": "14388 N. 79th Ave",
            "city": "Peoria",
            "state": "AZ",
            "zip": "85381",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Holbrook High School",
            "website": "http://www.holbrook.k12.az.us/schools/hhs/Home/index.htm",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "928-524-2815",
            "contact_email": null,
            "latitude": 34.9241,
            "longitude": -110.12,
            "street": "PO Box 640, 455 N. 8th Ave.",
            "city": "Holbrook",
            "state": "AZ",
            "zip": "86025",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Ironwood High School",
            "website": "https://www.peoriaud.k12.az.us/Pages/Default.aspx",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": null,
            "contact_email": null,
            "latitude": 33.6034,
            "longitude": -112.189,
            "street": "6051 W. Sweetwater Ave.",
            "city": "Glendale",
            "state": "AZ",
            "zip": "85304",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "LHHS",
            "website": "http://www.havasu.k12.az.us/high-school/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(928) 854-5001",
            "contact_email": null,
            "latitude": 34.5031,
            "longitude": -114.335,
            "street": "2402 San Juan, LAKE HAVASU CITY, AZ 86403",
            "city": "Glendale",
            "state": "AZ",
            "zip": "85304",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Salpointe Catholic High School",
            "website": "http://www.salpointe.org/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(520) 327-6581",
            "contact_email": null,
            "latitude": 32.2541,
            "longitude": -110.949,
            "street": "1545 E. Copper Street",
            "city": "Tucson",
            "state": "AZ",
            "zip": "85719",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Tri-City Christian Academy",
            "website": "http://www.tricityministries.org/tca/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(480) 245-7902",
            "contact_email": null,
            "latitude": 33.2759,
            "longitude": -111.88,
            "street": "2211 W. Germann Rd.",
            "city": "Chandler",
            "state": "AZ",
            "zip": "85286",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "University High School",
            "website": "http://www.universityhighschool.org/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(317) 733-4475",
            "contact_email": null,
            "latitude": 32.2263,
            "longitude": -110.888,
            "street": "421 N. Arcadia Blvd.",
            "city": "Tucson",
            "state": "AZ",
            "zip": "85711",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Xavier College Prep",
            "website": "http://www.xcp.org/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "602.277.3772",
            "contact_email": null,
            "latitude": 33.5057,
            "longitude": -112.067,
            "street": "4710 N 5th St",
            "city": "Phoenix",
            "state": "AZ",
            "zip": "85012",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Arcadia HS",
            "website": "http://ahs.ausd.net/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "626-821-8370",
            "contact_email": null,
            "latitude": 34.1306,
            "longitude": -118.037,
            "street": "180 Campus Dr",
            "city": "Arcadia",
            "state": "CA",
            "zip": "91007",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Balboa High School",
            "website": "http://bhs-sfusd-ca.schoolloop.com/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(415) 469-4090",
            "contact_email": null,
            "latitude": 37.722,
            "longitude": -122.44,
            "street": "1000 Cayuga Ave.",
            "city": "San Francisco",
            "state": "CA",
            "zip": "94112",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Bell High School",
            "website": "http://www.bellhs.org/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "323-832-4700",
            "contact_email": null,
            "latitude": 33.9746,
            "longitude": -118.191,
            "street": "4328 Bell Avenue",
            "city": "Bell",
            "state": "CA",
            "zip": "90201",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Bishop Garcia Diego High School",
            "website": "http://www.bishopdiego.org/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "805-967-1266",
            "contact_email": null,
            "latitude": 34.4444,
            "longitude": -119.756,
            "street": "4000 La Colina Rd",
            "city": "Santa Barbara",
            "state": "CA",
            "zip": "93111",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Brentwood School",
            "website": "http://www.bwscampus.com/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": true,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "310.471.1041 ",
            "contact_email": null,
            "latitude": 34.0666,
            "longitude": -118.47,
            "street": "100 S. Barrington Place",
            "city": "Los Angele",
            "state": "CA",
            "zip": "90049",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "Burbank High School",
            "website": "http://www.burbankhighschool.com/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": [

            ],
            "money_needed": false,
            "online_only": false,
            "number_of_students": null,
            "contact_name": null,
            "contact_number": "(818) 558-4700",
            "contact_email": null,
            "latitude": 34.1877,
            "longitude": -118.315,
            "street": "902 N Third St.",
            "city": "Burbank",
            "state": "CA",
            "zip": "91502",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "United States",
            "source": "csta"
        },
        {
            "name": "IT-Incubator",
            "website": "https://it-incubator.by/",
            "levels": [
                "High School"
            ],
            "format": "In School",
            "format_description": "Daily programming class",
            "gender": "Both",
            "description": null,
            "languages": ['React', 'JavaScript', 'CSS'],
            "money_needed": true,
            "online_only": true,
            "number_of_students": null,
            "contact_name": 'Dimych',
            "contact_number": "+375-29-186-0953",
            "contact_email": null,
            "latitude": 53.917,
            "longitude": 27.605,
            "street": "St. Surganov, 2, office. 64 and 65, 1st floor",
            "city": "Minsk",
            "state": "CA",
            "zip": "91502",
            "published": 1,
            "updated_at": "2013-01-11T01:59:09Z",
            "country": "Belarus",
            "source": "csta"
        },
    ]
}

const reducerSchool = (state = initialState, action: any) => {
    return state
}

export default reducerSchool;