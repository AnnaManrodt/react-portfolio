import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import Project from '../componets/Projects2';
import harborLookoutImg from '../assets/harbor_lookout_img.jpeg'
import dragonfruitdelights from '../assets/dfdimgPNG.jpeg'
import taskbord from '../assets/imgs/taskboardimg.jpeg'
import noteTaker from '../assets/imgs/notetaker.jpeg'
export default function Portfolio() {


    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/portfolio');
    }, []);


    return (
        <div>
            <div>
                <Project
                    title="Harbor Lookout"
                    imageUrl= {harborLookoutImg}// You can use your own image
                    link="https://harborlookout.com/ships/" // Replace with your actual GitHub link
                    iconUrl="none" // Replace with your actual GitHub URL
                />
            </div>
            <div>
                <Project
                    title="The Queen and Her Guard"
                    imageUrl="/imgs/qng-imgs.PNG" // You can use your own image
                    link="https://choose-your-adventure-qxmy.onrender.com/" // Replace with your actual GitHub link
                    iconUrl="https://github.com/TyWalter/choose-your-adventure" // Replace with your actual GitHub URL
                />
            </div>
            <div>
                <Project
                    title="Dragon Fruit Delights"
                    imageUrl={dragonfruitdelights} // You can use your own image
                    link="https://dragon-fruit-recipes.onrender.com/" // Replace with your actual GitHub link
                    iconUrl="https://github.com/AnnaManrodt/dragon_fruit_recipes?tab=readme-ov-file" // Replace with your actual GitHub URL
                />
            </div>
            <div>
                <Project
                    title="Task Board"
                    imageUrl={taskbord}// You can use your own image
                    link="https://annamanrodt.github.io/task-board/" // Replace with your actual GitHub link
                    iconUrl="https://github.com/AnnaManrodt/task-board" // Replace with your actual GitHub URL
                />
            </div>
            <div>
                <Project
                    title="Purr Mate"
                    imageUrl='/imgs/purrmate-img.PNG' // You can use your own image
                    link="https://annamanrodt.github.io/purr-mate/" // Replace with your actual GitHub link
                    iconUrl="https://github.com/AnnaManrodt/purr-mate" // Replace with your actual GitHub URL
                />
            </div>
            <div>
                <Project
                    title="Note Taker"
                    imageUrl={noteTaker} // You can use your own image
                    link="https://note-taker-app-1.onrender.com/notes" // Replace with your actual GitHub link
                    iconUrl="https://github.com/AnnaManrodt/note-taker-app" // Replace with your actual GitHub URL
                />
            </div>
            {/* <div>
                <Project
                    title=""
                    imageUrl="" // You can use your own image
                    link="https://github.com/your-github" // Replace with your actual GitHub link
                    iconUrl="https://github.com/your-github" // Replace with your actual GitHub URL
                />
            </div> */}
        </div>

    )

}