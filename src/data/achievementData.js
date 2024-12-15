import hackathon_img from '../assets/img/Achivements/hackathon.jpg'
import google_cloud from '../assets/img/Achivements/google_cloud.png'
import bootcamp from '../assets/img/Achivements/bootcamp.jpg'

export const achievementData = {
    bio : "Achievements in hackathons, events, and continuous learning have shaped my journey. From winning Hackathons to developing innovative projects, I consistently strive to enhance my skills and push the boundaries of what I can create.",
    achievements : [
        {
            id : 1,
            title : 'Winner - HashHacks CIC Hackathon (All India Level)',
            details : 'Won first place in the CIC Hackathon for developing an AR-based indoor navigation system providing seamless navigation within buildings.',
            date : 'Februrary 2023',
            field : 'Awards',
            image : hackathon_img
        },
        {
            id : 2,
            title : 'Google Arcade Badge Achiever',
            details : 'Earned 30+ badges by completing courses on AI/ML, DevOps, and Google Cloud Platform (GCP) etc., demonstrating a strong commitment to learning and tech excellence.',
            date : 'March 2024',
            field : 'Certifications',
            image : google_cloud
        },
        {
            id : 3,
            title : 'Selected for IDE Bootcamp 2023 by MoE & AICTE',
            details : 'Selected for IDE Bootcamp 2023 by the Ministry of Education and AICTE. Collaborated with 40+ entrepreneurs to explore project development and entrepreneurship.',
            date : 'June 2023',
            field : 'Recognitions',
            image : bootcamp
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/