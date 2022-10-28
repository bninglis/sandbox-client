import "./Interests.scss";
import FormProgress from "../FormSlider/FormProgress";
import { useState } from "react";

const artInterestArray = { title: "Arts", array: ["Crafts", "Dance", "Drawing", "Painting", "Photography", "Singing"] };
const businessInterestArray = { title: "Business & Industry", array: ["Advertising", "Design", "Engineering", "Marketing", "Real Estate", "Sales"] };
const entertainmentInterestArray = { title: "Entertainment", array: ["Books", "Games", "Movies", "Music", "Performing Arts", "TV Shows"] };
const relationshipsInterestArray = { title: "Family & Relationships", array: ["Dating", "Fatherhood", "Friendship", "Marriage", "Motherhood", "Parenthood"] };
const fitnessInterestArray = { title: "Fitness & Wellness", array: ["Bodybuilding", "Cardio", "Meditation", "Running", "Weight Training", "Yoga"] };
const homeInterestArray = { title: "Home", array: ["Carpentry", "Cooking", "Gardening", "Handicrafts", "Pottery", "Writing"] };
const lifestyleInterestArray = { title: "Lifestyle", array: ["DIY", "Food", "Health", "Social Events", "Travel", "Volunteering"] };
const outdoorsInterestArray = { title: "Outdoors", array: ["Biking", "Birdwatching", "Camping", "Fishing", "Hiking", "Surfing"] };
const petsInterestArray = { title: "Pets", array: ["Birds", "Cats", "Dogs", "Exotic", "Fishes", "Reptiles"] };
const fashionInterestArray = { title: "Shopping & Fashion", array: ["Beauty", "Designer", "Footwear", "Streetwear", "Toys", "Watches"] };
const sportInterestArray = { title: "Sports", array: ["Baseball", "Basketball", "Football", "Golf", "Soccer", "Tennis"] };
const techInterestArray = { title: "Technology", array: ["Audio Devices", "Cameras", "Computers", "Smartphones", "Tablets", "TVs"] };

const topics = [artInterestArray, businessInterestArray, entertainmentInterestArray, relationshipsInterestArray, fitnessInterestArray, homeInterestArray, lifestyleInterestArray, outdoorsInterestArray, petsInterestArray, fashionInterestArray, sportInterestArray, techInterestArray];

export default function Interests() {
    function findCommonElements(arr1, arr2) {
        return arr1.some((item) => arr2.includes(item));
    }

    const [selected, setSelected] = useState([]);
    const [isFormValid, setIsFormValid] = useState();
    const handleClick = () => {
        if (selected.length > 0) {
            setIsFormValid(true);
            const interestsOutput = selected.join(", ");
            sessionStorage.setItem(interestsOutput);
        } else {
            setIsFormValid(false);
        }
    };
    const handleInterest = (e, interest) => {
        console.log(e.target);
        let updatedList = [...selected];
        if (!updatedList.includes(interest)) {
            updatedList = [...selected, interest];
        } else {
            updatedList.splice(selected.indexOf(interest), 1);
        }
        setSelected(updatedList);
        console.log(isSelected());
    };
    const isSelected = (item) => (selected.includes(item) ? "checked-item" : "not-checked-item");
    return (
        <>
            <h1 className="followup__title">Interests</h1>
            {topics.map((list, index) => {
                return (
                    <div key={list.title} className="interests__group">
                        <h2 className="interests__subheader">{topics[index].title}</h2>
                        <div className="interests__container">
                            {topics[index].array.map((interest, listIndex) => {
                                return (
                                    <button key={`${interest}${index}`} className={`interest__item ${isSelected(interest)}`} onClick={(event) => handleInterest(event, interest)}>
                                        {interest}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            <button className="followup__submit" onClick={handleClick}>
                Next
            </button>
        </>
    );
}
