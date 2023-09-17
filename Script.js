function createVideo(thumbnailSrc, channellogo, videoTitle, channelname, videoStats, duration, videoLink) {
    const videoContainer = document.createElement("div");
    videoContainer.className = "video";

    const thumbnailContainer = document.createElement("div");
    thumbnailContainer.className = "thumbnail-container";

    const thumbnailImage = document.createElement("img");
    const basePath = "Images/Thumbnails/thumbnail";
    const format = ".jpg";
    thumbnailImage.src = `${basePath}${thumbnailSrc}${format}`;
    thumbnailImage.alt = "thumbnailImage";
    thumbnailImage.className = "thumbnail";

    const durationtime = document.createElement("div");
    durationtime.textContent = duration;
    durationtime.className = "duration";

    thumbnailContainer.appendChild(thumbnailImage);
    thumbnailContainer.appendChild(durationtime);

    const v_info = document.createElement("div");
    v_info.className = "video-info";

    const channelLogo = document.createElement("div");
    channelLogo.className = "channel-logo";

    const channleLogo_Image = document.createElement("img");
    const basePath2 = "Images/Channel-logo/channel";
    const format2 = ".jpg";

    channleLogo_Image.src = `${basePath2}${channellogo}${format2}`;
    channleLogo_Image.alt = "channellogo";
    channleLogo_Image.className = "channel-img";

    channelLogo.appendChild(channleLogo_Image);

    const video_data = document.createElement("div");
    video_data.className = "video-info-content";

    const videotitle = document.createElement("p");
    videotitle.textContent = videoTitle;
    videotitle.className = "video-title";

    const channelName = document.createElement("p");
    channelName.textContent = channelname;
    channelName.className = "channel-name";


    const videostats = document.createElement("p");
    videostats.textContent = videoStats;
    videostats.className = "video-stats";

    video_data.appendChild(videotitle);
    video_data.appendChild(channelName);
    video_data.appendChild(videostats);

    v_info.appendChild(channelLogo);
    v_info.appendChild(video_data);

    videoContainer.appendChild(thumbnailContainer);
    videoContainer.appendChild(v_info);

    return videoContainer;
}

function videoDuration(arr) {
    const durationArray = [];
    for (let i in arr) {
        if (arr[i].length === 3) {

            const hour = arr[i][0];
            const minute = arr[i][1] < 10 ? `0${arr[i][1]}` : arr[i][1];
            const second = arr[i][2] < 10 ? `0${arr[i][2]}` : arr[i][2];
            durationArray.push(`${hour}:${minute}:${second}`);
        } else if (arr[i].length === 2) {

            const hour = arr[i][0];
            const minute = arr[i][1] < 10 ? `0${arr[i][1]}` : arr[i][1];
            durationArray.push(`${hour}:${minute}`);
        }
    }
    return durationArray;
}

function uploadDuration(ud) {
    const [date, month, year] = ud.split('/').map(Number);// make the date into array ,converts string to number 
    const currentDate = new Date()// present date
    const uploadDate = new Date(year, month - 1, date);// index of month(0-11) month=12 12-1=11 11=december 
    let timeDiffrence = currentDate - uploadDate;// in milli seconds

    //gives the the year months days passed ->

    yearsPassed = Math.floor(timeDiffrence / (365.25 * 24 * 60 * 60 * 1000));
    monthsPassed = Math.floor((yearsPassed * 12) + (currentDate.getMonth() - uploadDate.getMonth()));
    daysPassed = Math.floor(timeDiffrence / (24 * 60 * 60 * 1000));

    if (yearsPassed > 0) {
        return yearsPassed + (yearsPassed === 1 ? " year ago" : " years ago");// if its diffrent year
    } else if (monthsPassed > 1) {
        return monthsPassed + (monthsPassed === 1 ? " month ago" : " months ago"); // if its same year
    } else if (currentDate.getMonth() !== uploadDate.getMonth()) {// same month but diffrent year
        return " 1 month ago";
    } else if (daysPassed > 0) {
        return daysPassed + (daysPassed === 1 ? " day ago" : " days ago")// same month diffrent days 
    } else {
        return 'today'  // same date
    }
}

// array of data (videoLink , views , uploadDate, channelNames , videoTitles , duration ,)

video_urls = [
    "https://www.youtube.com/watch?v=MMfjVMJq790",
    "https://www.youtube.com/watch?v=erEgovG9WBs",
    "https://www.youtube.com/watch?v=NxJw17-tKhg",
    "https://www.youtube.com/watch?v=G3jIP-V_4-A",
    "https://www.youtube.com/watch?v=AaZ_RSt0KP8",
    "https://www.youtube.com/watch?v=MDoI0BO8cmo",
    "https://www.youtube.com/watch?v=cDFFis0j4JM",
    "https://www.youtube.com/watch?v=Or7pwR60ilE",
    "https://www.youtube.com/watch?v=cDQa40B9Lxo",
    "https://www.youtube.com/watch?v=mTmRjK1ZBuk",
    "https://www.youtube.com/watch?v=lBdnti4_UUg",
    "https://www.youtube.com/watch?v=2exKokkn8o0"
]

views = [
    "10.5K",
    "10.2K",
    "158K",
    "234K",
    "189M",
    "126K",
    "342K",
    "419K",
    "2.7M",
    "1.3M",
    "334K",
    "400K",
]

uploadDate = [
    "29/08/2021",
    "02/10/2022",
    "11/12/2021",
    "26/07/2008",
    "25/12/2022",
    "26/02/2023",
    "20/01/2016",
    "05/07/2023",
    "09/06/2012",
    "12/07/2023",
    "03/04/2013",
    "29/01/2023"
];

channel_names = [
    "ChennaiGeekz Complete",
    "Fireship",
    "SmvR",
    "Let's Explore Our Deen",
    "Veritasium",
    "Cogito",
    "The Armchair Historian",
    "Beyond The Lote Tree",
    "PowerfulJRE",
    "Got ROM",
    "Unseen Phantom",
    "SuperSimpleDev",
]

video_titles = [
    "Vagabond Manga | Complete Story Explained in Tamil",
    "100+ Web Development Things you Should Know",
    "God of War - All Bosses - Zeus Set: GLASS BALLISTA BUILD - New Game + (GMGOW)",
    "Two Golden Advices of Dr. Israr Ahmed to Dr. Zakir Naik",
    "The Universe is Hostile to Computers",
    "Who Are The Bengali People?",
    "Life in Nazi Germany | Animated History",
    "Allah and the Cosmos - CREATION IN SIX DAYS  [Part 1]",
    "Elon Musk Talks About Colonizing the Galaxy",
    "David Goggins Stretching Routines: (SECRETS REVEALED!)",
    "Berserk - My Brother (Extended) (Definitive Version)",
    "JavaScript Full Course (2023) - Beginner to Pro - Part 2 Lesson 14",
]

let duration = [[6, 43, 35], [13, 18], [54, 35], [6, 1], [23, 3], [1, 4, 1], [1, 6, 21], [8, 33], [6, 34], [1, 28, 43]]

let durationArray = videoDuration(duration);

var videosContainer = document.querySelector(".videos-container");
let video = [];
let result = [];

for (let i = 0; i < 12; i++) {
    result.push(uploadDuration(uploadDate[i]));
    video[i] = createVideo(i+1, i+1, video_titles[i], channel_names[i], `${views[i]} views • ${result[i]}`, durationArray[i]);
    videosContainer.appendChild(video[i]);
}





