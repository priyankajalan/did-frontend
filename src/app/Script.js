import React from 'react';
import SpeechComponent from './SpeechComponent';
const english_conversation = [
    "Good morning, how are you?",
    "I am doing well, how about you?",
    "Hello Mister Wong",
    "Hello Bot",
    "How are you today?",
    "I'm good",
    "What did u have for lunch?",
    "i had satay",
    "That's good",
    "ok",
    "Are you feeling bored?",
    "Yes, little bit, no",
    "Don't worry, I have a great plan for you",
    "Is it?",
    "Let's talk about memories",
    "Yes, sure.",
    "when was the last time you drove the car.",
    "Very long back",
    "Who was your first best friend in college?",
    "ya, it is Sen",
    "How many friends did u have in college?",
    "not a lot.",
    "Do you remember the time you spent with your best friend?",
    "Yes i do.",
    "What was the best part of your friendship?",
    "We used to ride cycle from college to home together.",
    "What was your favourite hangout spot",
    "We used to sit along the hawker center in queenstown.",
    "That used to be a good place to hangout.",
    "Do you think he will remember me",
    "definitely he will, he might miss you now.",
    "ok",

    "o you still talk to him or have his contact?",
    "i think so but i don't remember.",
    "that's ok i'm there for you",
    "yes you are.",

    "What do you speak with your friend generally?",
    "we talk about getting into a good job.",

    "ok, did u get into a good job?",
    "yes, kind of.",

    "What was the favourite food you both used to eat together?",
    "chick rice, always.",

    "Hmm. There is a good chicken rice available at subway. do you want to try it?",
    "I'll try it later.",

    "What do you daily during work?",
    "I used to work and come back home and rest.",

    "How many girlfriends did u have during your childhood?",
    "5 i guess",

    "hmm, you must be a smart guy.",
    "yes i was.",

    "what is the one thing you like about your best friend mister Sen?",
    "He used to make a lot of jokes.",
    "HA HA , Great.",
    "What is the biggest fear you faced in your life.",
    "I was very afraid to go into the swimming pool.",

    "oh that fears me too.",
    "HaHa",

    "which sport do you play well.",
    "Football",
    
    "DO you rememer the day when you were the star of the match.",
    "Ya, it was a wonderful memory of my life.",
    
    "So tell me about it.",
    "It is a long story, i managed to hit the goal on the last second and win the match.",

    "Which is your favourite food?",
    "Roti prata is my favourite food.",
    
    "DO you remember the best place you had roti prata?Tell me about it.",
    "I had the best rotiprata in raffles place.",
    
    "When did u have it?",
    "I had it before 10 years.",
    
    "Oh, is it still available at that place.? Do you wanna try now?",
    "ya, will have that for dinner tonight.",
    
    "do you remember making your favourite dish",
    "No i haven't tried it.",
    
    "Who else liked that dish?",
    "My wife used to like it.",
    
    "When was the last time u had roti prata?",
    "Last week for dinner i had in the hawker center downstairs.",
    
    "Do you remember the time you went for trekking with your friends?",
    "Yes, it was a wonderful experience to do that.",
    
    "Where did you go? How was it?",
    "It was a wonderful experience. We went to the hills near malaysian border.",
    
    "How much do you miss your past?",
    "I miss all of it now.",
    
    "do you remember telling anyone else about it?",
    "no",
    
    "How many kids did you have?",
    "one.",
    
    "do you remember the time when your child made his first walk?",
    "Yes, i was very afraid he might fall.",
    
    "can i help you connect to your son to talk?",
    "Ya, i miss him.",
    
    "do you remember cooking food for your children?",
    "Yes, i made chocolate desert which is my child's favourite.",
    
    "Do you remember the moments you spent with your old friends?",
    "Yes, i can talk all day about that.",
    
    "Good afternoon mister wong.",
    "Good afternoon.",
    
    "I remember you said you have tea at the hwaker center.",
    "Yes, i almost forgot.",
    
    "Enjoy the tea, your friend tao also likes tea very much right.",
    "No he likes coffee a lot.",
    
    "Tea time with friends is always good.",
    "You can have a walk around the park after tea, you will feel good.",
    
    "Hello wong, how was tea.",
    "it was very good.",
    
    "Do you want me to recollect your days when u had tea with your friends.",
    "Ya sure.",
    
    "DO you remember the time you had food with your family.",
    "yes i do",
    
    "tell me about it.",
    "ya sure.",
    
    "do you want to remember the days when u used to buy favourite food for your children.",
    "Those were good days when i could see the happy faces of my children.",
    
    "Do you want to read current happenings in singapore today?",
    "Sure, thank you.",
    
    "remember the days when you used to read newspapers.",
    "Ya, now the newspapers are no longer famous.",
    
    "How long have you been in singapore.",
    "Quite long.",
    
    "do you remember your dad and mom taking you out for hangout.",
    "Yes, i remember them.",
    
    "your parents took you to the sentosa beach for your first picnic.",
    "oh, lovely.",
    
    "they used to take you to the water, but you used to be afraid.",
    "oh is it?",
    
    "You have the same experience with your children.",
    "ya i do, i can remember now.",
    
    "you visited the starbucks many times with your family.",
    "yes i did.",
    "You used to take your kids to have chicken rice which was their favourite.",
    "ya thats their favourite.",
    "you have a picture with them at the starbucks in your phone.",
    "Yes, i'll look at it.",
    
    "Hi Uncle Le, Good Evening",
    "Good evening friend",
    
    "How are you doing?",
    "I am doing ok",
    
    "Ok? Why? Any thing wrong?",
    "Every thing is normal",
    
    "So,what is the plan for the day Uncle Le?",
    "As usual I will go out, have food, and sit in the bench for 2-3 hours",
    
    "Are you going to meet your friends?",
    "No, I dont have any one. I will sit alone every day",
    
    "Uncle Le, then I have some special memories to share with you.",
    "Oh ! What are those",
    
    "I would like to recall your meet with Uncle Chan last year.",
    "Is it, Tell me",
    
    "You met your friend Uncle Chan last year in September",
    "Wow, that's interesting. Do you have anything more",

    "You both had dinner together at High Society restaurant in Marina bay",
    "Yeah ! Amazing. Please tell me more",

    "You both discussed about daily life and spent good time",
    "Excellent, Awesome",

    "Uncle Chan and you have similar hobbies. You both like watching football",
    "Ofcourse, we love it",

    "You both were discussing about FIFA world cup during your dinner time",
    "May be, I cant remember now.",

    "Uncle Chan also clicked a picture with you. Please see in your phone gallery",
    "Yes, thats true. Let me check",

    "Uncle Chan share his contact number with you, Lets have a talk with him",
    "Yeah ! I will call him right away.",
    "Thanks a lot for making me happy today",

]
export default class Script extends React.Component {

    render(){
        return(
            <div>
            {
                english_conversation.map(speak => 
                    <div>
                        <SpeechComponent speak={speak} />
                        <SpeechComponent speak=". ! ." />
                    </div>
                )
            }
            </div>
        )
    }
}