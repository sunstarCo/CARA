'use client';
import React, {Fragment, useState} from 'react';

import Image from 'next/image';

export const review_data = [
  {
    name: 'Karina A',
    date: '3/7/24',
    review:
      "My experience at Cara was AMAZING! I got Rejuran microneedling done, it took about 2 days to heal and I'm absolutely loving my results. My skin texture has improved tremendously, my skin feels so smooth, looks hydrated, reduced my pigment and overall completely rejuvenated it!! I recommend Cara to all my friends and family, they have always stood out and exceeded all my expectations! Thank you to Cara and all the lovely staff!",
  },
  {
    name: 'Y. K.',
    date: '3/11/24',
    review:
      "Nurse Jennifer works magic with the Genesis laser! She was recommended to me by my mum (who received the toning laser treatment and I'm sooo happy I went! For context, I'm in my 30's, combination skin, Asian descent. I have lots of light acne scars, redness/rosacea (cheeks), uneven pigmentation, larger pores (nose/cheeks), etc. I wasn't sure what to expect, but Jennifer worked magic! I could tell the difference after just one session, and I couldn't wait for my second. (I got a package of 5 sessions.) She was really kind, thorough, answered all the questions I had before started, and made sure I was comfortable. I literally got compliments on my skin the first week after my treatment! Everything seems brighter, healthier, and more glowy. (I am already budgeting for my next bundle lol) They even provide full, 1-hour long facial afterwards!",
  },
  {
    name: 'Stephanie G.',
    date: '3/1/24',
    review:
      "It's a must for this Center. From the front staff to the nurses to the doctor. I went in for filler (Sculptra) for the first time ever. I was greeted by the front office and then spoke to a consultant named Theresa who then referred me to nurse Julianna. Being my face, I was a little anxious but once Julianna informed me what Sculptra is for and gave me her recommendation, I was all in. Julianna made it so comfortable and answered all my questions. She even noticed I had a lot more volume loss on one side of my face and explained how much I needed and informed me exactly how many cc I would need so my face so it would be even. As soon and she finished, I saw the results immediately. I was so impressed by the change right away. She explained the aftercare and I was so extremely satisfied that I asked if I could add a lip flip. She was very sweet and checked with the front office to make sure my appointment did not over Lap with another. I was able to get my lip flip. I have even made an appointment to come back and discuss additional treatments/ surgeries with Theresa, the consultant. I can't wait to make my next appointment. Thank you Cara for making my Cara (face) look much younger.",
  },
  {
    name: 'Kimberly K.',
    date: '2/8/24',
    review:
      'Where do I begin with my experience with Dr. Kahng?! I had a facelift by him like a little over week ago and I cannot believe how great it already looks!!! He must have a gentle hand because I healed very quickly with very little bruising. I chose him because I was really impressed with his before/ after pictures. He really understands our Asian facial anatomy and has a keen eye to beautify it. I am beyond happy to look in the mirror and see myself as young as I feel. I feel so confident and happy with the way I look now. Julie was the consultant that helped me through the whole process. She made me feel comfortable and confident through it all. She reassured me that everything was going to be fantastic and if I had any questions, she was only a phone call or text away. And I tested her patience many time with lots of stupid questions and she never batted an eye. She replied back and answered all my annoying questions. I hope Dr Kahng realizes what a gem he has. All the nurses were wonderful and this will forever be my place for future procedures. If you are looking for a brilliant surgeon, amazing staff and very reasonable pricing look no further!!! From the very bottom of my heart.... Thank you thank you thank you!!! I am over the moon with my results !!!!',
  },
  {
    name: 'Amanda H.',
    date: '12/9/23',
    review:
      "I'm doing another review according to how the actual surgery procedure went. So, I ended up deciding to have a surgery procedure done here. The entire process was smooth. All staff that helped me with the process were considerate, kind, and very knowledgable. They eased my nerves before the operation. When I had the consultation with the doctor before the operation and the check up with the doctor after the operation, the doctor proved to show what a great doctor he is. He was articulate in communicating the complications of my case and explained all things well, even during the recovery process of the operation. I trust him if I was to have any more procedures done in the future. Finally, he helped resolve and fix the complications that arose from a previous dissatisfied surgery procedure with another plastic surgeon. That's what mattered the most. Thus, I consider Dr. Kahng to be an intelligent plastic surgeon.",
  },
  {
    name: 'Bea A.',
    date: '10/27/23',
    review:
      "Please trust me when I say they are AMAZING! The first time I went was for Botox, was with Vanessa. She was very understanding and not pushy at all (I've had experiences in different locations where they just wanted money instead of my happiness) I got Botox on my forehead and felt so comfortable and extremely happy with my results. While there I asked about fillers for my smile lines and lip filler, which they offer this service, I booked my appointment with Juliana. I was extremely nervous because I had never done fillers. Upon my arrival they were very sweet and patient with me, explained everything and began the numbing process. Juliana was very conservative with how much I should get, that's exactly what I wanted. I did NOT FEEL A THING!! the process was no more than 30-45 min and I am OBSESSED WITH MY FACE!!! They have a customer for life with me! I can't stop looking at myself you will not be disappointed!",
  },
  {
    name: 'Jessica Alejandra M.',
    date: '10/23/23',
    review:
      'Cara Plastic Surgery exceeded my expectations! I was nervous and skeptical about doing Botox but they explained the whole process, were very informative and most importantly made me feel comfortable. With just the right amount, they were able to help me get rid of my forehead lines and crows feet. I love my results and will definitely be coming back! Also, Nurse Erica and Dr. Kahng were extremely welcoming!',
  },
  {
    name: 'Alma U.',
    date: '9/29/23',
    review:
      'Wonderful facial, service and recommendations were great. The whole experience was professional & relaxing. Great service performed by Lauren. Thank you Lauren she was great!',
  },
  {
    name: 'Teresa W.',
    date: '9/19/23',
    review:
      'Always wanted to go from size B to size DD. I first talked with Julie and Rina, they helped me explain the procedures very well. Dr.Kahng discussed the sizes with me. He suggested a more natural augmentation and this is why I choose him for boobs. The natural looking is what I wanted. A big change but not as dramatic. I originally want to do 450cc but I…',
  },
  {
    name: 'Samila A.',
    date: '8/4/23',
    review:
      "I am a 51 years old woman. I have done all types of non-invasive procedures, but at the end I decided to undergo surgery. I had my eyelids done couple years ago with Dr. Kahng and was very pleased with the results. Couple months back, I decided to do a neck and facelift surgery. I consulted with Dr. Kahng and went under operation. After about 3 months, I can't be happier! I am very happy with the results and once again I can look myself in the mirror again:-) Julie, was my consultant and she was awesome. She walked me through all steps of surgery and post- operations expectations.Overall, Cara Plastic Surgery team was awesome. Everyone at the office is friendly and professional. Dr. Kahng has superb bedside manner. I highly recommend Cara Plastic Surgery for all your cosmetic needs.",
  },
  {
    name: 'Tamecka S.',
    date: '7/12/23',
    review:
      "I want to share my gratitude and appreciation about my experience with the staff and MD. I would recommend this office to anyone that wants a professional outcome. They treated me like family and I can't express that enough. My results are phenomenal. Thank you for all you have done to make me happy again. By giving me my self esteem back and putting them insecurities about my body behind me. Than you thank you and God bless. Truly grateful Tamecka S.",
  },
  {
    name: 'Eunice L.',
    date: '7/2/23',
    review:
      'I took my husband to Cara for his deep acne scars on face that he had since his teenage years. After counseling he was recommended to do multiple rounds of Secret microneedling for his acne scars. Chemical peel was not something we wanted to try due to its harshness, side effects and long healing time so we were happy to hear about the Secret needling. After each treatment his face was initially red for the first 2-3 days then it got better after that. His acne scars began to lighten noticeably after 2-3 session starting from his forehead and nose. We then extended for another rounds of the Secret needling. Now his overall complexion is cleaner and smoother than before! My husband hates needles and anything painful but the nursing staff here really made each session doable for him. He also noticed the small improvements after each session so he actually wanted to go back for more!! I also get my facials here as well. It is a great deal if you get the package for discount or use one of their monthly specials. I highly recommend you to give this place a try!',
  },
  {
    name: 'Amanda H.',
    date: '6/23/23',
    review:
      "He's a personable doctor. Service was great at the consult. I have to see results as I haven't had a cosmetic procedure yet. I went to him to have botched chin implant/augmentation/removal procedures that I had done with Dr. Peter Lee at Wave Plastic Surgery. I'm waiting to see if the result(s) here turn out better than Dr. Peter Lee at Wave Plastic Surgery. Thus far, they treated me with great customer service. Dr. Kahng says he could try improving what's already done to me, and for that, I thank him. It gives me hope there's a plastic surgeon out there who can do a good job.",
  },
  {
    name: 'Heather C.',
    date: '6/14/23',
    review:
      "Procedure: mommy makeover on 6/6/23. Can I just say I love this place. From the front desk to the nurses to the anesthesiologist to the doctor. Everyone there is so beyond professional and welcoming it has made this whole experience so much better. The office is always clean and put together. The front desk is so welcoming and friendly. I was assigned Maritza as my coordinator and I can't say enough good things about her. She has been there for me from the very beginning. From answering all my questions to helping me with the financial side of it to even answering me on her days off. She is just absolutely amazing! The nurses Vanessa and Jocelyn just wow. They make everything just so much better. Their knowledge and kindness is something I won't forget. They make me feel so at ease while at the same time keeping it real with how things are going to feel and what to expect. They don't seem to get annoyed when I flinch or ask to many questions. Sorry ladies. Now the day of the procedure. I was so nervous. I was really trying to keep myself calm. The nurse I had (which I wish I could remember her name) was fantastic! She kept me so calm with her jokes and her calm demeanor. Literally the absolute best! Even her aftercare which I remember some of. I remember her just being there for me and very attentive. The anesthesiologist Dr. Ye is a great one to. So informative and really took the best care of me. I felt sick waking up but once they gave me medicine for it I was perfectly fine. He did fantastic. Shoutout to the OR tech also because they don't get enough shoutouts. Finally Dr. Kahng. He is great. I love how calm and relaxed he is. I told him how I wanted to look natural and not have big breast implants. They are still swollen but I'm so happy with the results so far. He really took what I said and listened. There are really not enough words to express my gratitude to each and everyone at this office who made this process so smooth and easy. I would recommend you guys over and over again.",
  },
  {
    name: 'Diana I.',
    date: '4/03/23',
    review:
      "Alice did an amazing job on my smile lines. I am beyond happy with my results. She was very nice and patient. Kept making sure I was okay during the process. I didn't feel a thing which is a huge plus. Everyone was very kind. I would definitely recommend this place. I will definitely be coming back",
  },
  {
    name: 'Cadie C.',
    date: '3/14/23',
    review:
      'I cannot say enough good things about my experience with Dr. David Kahng! One year post op (breast aug) and I am beyond satisfied with my results. I sought many consultations before deciding to move forward with this procedure and that was in large part after seeing Dr. Kahng and learning everything I needed to know about the process. All of my questions were answered, I felt so comfortable from start to finish, and I felt very in control and in the loop with everything big to small. You need to have trust and good communication for a surgery like this and they knocked it out of the park. Also... JULIE! She is the best, she made me feel like an absolute queen the entire year long journey. So kind, sweet and caring - actually this goes for the entire staff! Everyone was always so helpful and welcoming. There is a lot that goes into this procedure - many pre op appointments, post op care, and follow ups through the first year of recovery. Honestly any time I had to go in for a check up or appointment, I looked forward to it! I knew it would be a good experience. Best of luck to anyone considering this journey - I am so glad I did and with CARA / Dr. Kahng!',
  },
  {
    name: 'Ju K.',
    date: '3/7/23',
    review:
      'The is seriously my favorite place to go to for everything!!! I get my laser, Botox, fillers and recently even Ultherapy done here! Everyone is so helpful and they answer every question I have with so much patience. The process was very easy and Julie explained everything well along the way. Very competitive pricing as well. Highly recommended.',
  },
  {
    name: 'Erica A.',
    date: '3/20/23',
    review:
      "Cara is definitely my ultimate place to go for my beauty enhancements. The office is super clean, the staff is very welcoming and friendly. As well as all the nurses in the office. Nurse Vanessa did an amazing job on my lips she's been doing my lips for the past 3 years including my Botox. I love that she is very self explanatory with every step that she is doing, very clean and most important professional and knowledgeable with the face anatomy. I know I chose the right place. Thank you everyone at Cara. Can't wait for dr kahng to do my BBL.",
  },
  {
    name: 'Esme S.',
    date: '2/28/23',
    review:
      "People have been asking about my experience with dr. kahng, so i thought i would just post about it. My experience was super smooth, throughout the whole process. everyone at the clinic was super nice (julie was my consultant, love her), including the doctor himself. he holds himself with a quiet confidence, and was clear and honest about what my expectations should be. just overall a very pleasant person. Surgery day came and i was NERVOUS but the nurses were so kind and made sure to ask if i had any questions. almost 3 hrs later, i was wheeled out to the car. after the 30 min drive home, i was ready to walk around and talk. there was no pain throughout the healing process-- at least in my experience. the first night was the most unpleasant, because i had to get used to breathing through my mouth. but after 2 days, i could stop using a drip pad, and halfway through the first week they had me come in for a gentle cleaning. you do not do any of the cleaning yourself!!! no peroxide, no saline, only water and q-tips for blood that dried outside the nose. they will do the cleaning for you. i got it cleaned 3 days post, 1 week post, and 2 weeks post. I did not have any significant swelling or bruising after the surgery. obviously, my nose is swollen, but i didn't look like i had two black eyes at any point. no one at the clinic seemed surprised at this-- i truly think dr. kahng is just hella good at his job. The full cost included anesthesia and post surgery visits, which i was glad to hear. (AND A STEROID SHOT they give u in the first week post op!) my swelling is going down slowly but surely! even though i'm only a couple weeks out, i'm still very pleased with the results (i got the bridge shaved, the sides slimmed, and cartilage added to the tip (he uses donor cartilage)). Overall, i can't recommend him enough, especially for asian clients. :)",
  },
  {
    name: 'Berylla M.',
    date: '2/10/23',
    review:
      'So I scheduled my appointment with Maritza who first off is amazing and very helpful with my needs. I had botox done and lip injections. It was as painless as possible and the staff made me feel very comfortable. I am coming back for a touch up. I highly recommend. Will post pics after my next appointment before and after.',
  },
  {
    name: 'Debora E.',
    date: '1/21/23',
    review:
      'I had 3 surgeries done with Dr. David Kahng. My health journey started when I decided to change my life 6 years ago and live healthier. I have change my mind to live happier and peaceful which has ultimately affected my physique, I had lost the volume of my breast and had a lot of loose skin on my stomach. I decided to get treatment to complete my transformation. The first thing that I would like to talk about is the vibe of the office, everybody was very sweet and',
  },
  {
    name: 'JY C',
    date: '1/11/23',
    review:
      "I recently got filler and botox from Cara plastic surgery and I'm in love with the result! I would highly recommend this place for their great service. Julie was super helpful and gave great recommendation during the consultation. Alice did an exceptional job which made everything look so natural and touched every part I mentioned. Would definitely be revisiting for touch up.",
  },
  {
    name: 'Ashley K.',
    date: '1/3/23',
    review:
      "I was kind of nervous coming here but came in on my friends recommendation and I think I've found my go to spot for all things beauty! The waiting room is clean and I didn't have to wait long at all (maybe 10-15 min). My consultant, Julie, was super helpful/insightful and made sure to answer every one of my billion questions (I brought a list). I especially appreciated that she didn't just try to sell me every package that they had and even talked me out of things that I thought I needed. My nurse's name was Alice (I think) and she was just as amazing. I was really nervous at first but she was able to calm me down by explaining everything. I got the skin booster treatment and Botox. It's only been a week and I can already see the results!",
  },
  {
    name: 'Jennice J.',
    date: '1/3/23',
    review:
      "I'm always super satisfied with the outcome with the botox and filler work here. Alice makes sure everything looks natural and suited to your face. I can't say enough about Julie! She's always so nice and friendly when I'm there! She's very accommodating and gives great recommendations :)",
  },
  {
    name: 'E. T.',
    date: '12/09/2022',
    review:
      "I want to begin by saying how thrilled I am with my breast augmentation results. Dr. Kahng is truly a gifted surgeon and a very kind human being. His expertise is extraordinary. He is gentle and precise and absolutely gifted! I really appreciate the professionalism of his staff, the thorough explanation of every step of the surgical procedure, and the fantastic end result. I really appreciate the comprehensive exam and analysis of my body. He is a true expert and outstanding professional. I have highly recommended him to all my family and friends. He is definitely your go to surgeon, he really cares about your well being and end results. I have already scheduled my next procedure!!! If you're still hesitant you're just wasting time to allow Dr. Kahng and his team to beautify you! Thank you Dr. Kahng and your team for giving me back my confidence and my beauty!!",
  },
  {
    name: 'Ange L.',
    date: '12/02/2022',
    review:
      "I want to begin by saying how thrilled I am with my breast augmentation results. Dr. Kahng is truly a gifted surgeon and a very kind human being. His expertise is extraordinary. He is gentle and precise and absolutely gifted! I really appreciate the professionalism of his staff, the thorough explanation of every step of the surgical procedure, and the fantastic end result. I really appreciate the comprehensive exam and analysis of my body. He is a true expert and outstanding professional. I have highly recommended him to all my family and friends. He is definitely your go to surgeon, he really cares about your well being and end results. I have already scheduled my next procedure!!! If you're still hesitant you're just wasting time to allow Dr. Kahng and his team to beautify you! Thank you Dr. Kahng and your team for giving me back my confidence and my beauty!!",
  },
  {
    name: 'Ilona B.',
    date: '11/25/2022',
    review:
      "I found Dr. David Kahng through a friend who had a lot of positive words to say about him. I was tempted to get rhinoplasty for over a decade. I flu from New York for consultation and after having the meeting I was more at ease. Dr. Kahng did an amazing job during my consultation answering every question and I left. He explained in detail what he can do and I showed what I want my new nose to look like. It has been only two months and I can definitely see that he's done a great job and he did exactly as promised and I'm very happy with the result. Given it will look even better few months down the road. His team of nurses were very attentive and helpful at every step. The medical facility is very clean and a professional environment. The recovery was short for me and painless. All my questions and concerns were answered in a timely fashion, I was never rushed at any time and my results are amazing. I'm glad I made the trek to Los Angeles and very happy when I look in the mirror. I'm very thankful to Dr. Kahng and I hope he helps more women/men to feel and look even more confident. I was extremely satisfied with the professionalism of the staff. Dr. Kahng is an exceptional surgeon whom I would highly recommend to anyone!",
  },
  {
    name: 'Emmanuel B.',
    date: '11/25/2022',
    review:
      "Great service and friendly attitude from the front desk to the nurse who helped me. Second time coming here for botox, and didn't feel pressured to get more than I wanted. Suggestions were made, but my decision was respected and followed through. The staff is friendly and welcoming. I definitely recommend this clinic for your cosmetic needs! It's super clean. I've had a different nurse both times, and both were nice. Vanessa and Alice.",
  },
  {
    name: 'Kim M.',
    date: '11/15/22',
    review:
      "I always wanted to get a rhinoplasty ever since I was young, and I finally got it done with Dr. Kahng. He was already known from Korean community in Los Angeles that he is good at rhinoplasty, so I trusted him already. After a consultation with him, I trusted him more and now I'm happy with my new look. I only regret that I didn't get it done sooner! Every staff was super friendly and welcoming also. Thank you all!",
  },
  {
    name: 'Donna E.',
    date: '9/23/2022',
    review:
      'I have been coming to CARA center since Early June and I have to say that it has been a game changer for my skin. My skin has significantly improved, my face is more toned, my skin is hydrated, my skin is glowing, my hyperpigmentation has decreased. I had a series of Miin lasers and facials and rejuran injection. Before my treatments I was experiencing severe dryness and dullness but these treatments have significantly helped. CARA staff, Vee, nurse Umi, nurse Alice, nurse heather & the aesthetician have been extremely professional and experts. Believe me when I say I have severe trust issues when it comes to trusting places/people especially to treat my face. But this place was highly recommend and they have really exceeded my expectations. I highly recommend them.',
  },
  {
    name: 'Olivia P.',
    date: '9/22/2022',
    review:
      "Very good experienced on Botox, I've been here for skincare and injections for longtime. The place is very clean and stuffs very professional and nice! Highly recommended!!!",
  },
  {
    name: 'Laurel R.',
    date: '9/19/2022',
    review:
      "Today was my first time ever trying fillers and Botox. The Nurse practitioner went over all my options and prices. I didn't feel rushed or pushed in any direction. She did a wonderful job and set me at ease by asking how I was doing several times. It didn't hurt and I love what she did. I'm not overdone. I feel great!",
  },
  {
    name: 'Kim M.',
    date: '9/14/2022',
    review:
      "I want to be as transparent as I could with everyone so I'm updating my review as the time goes on. This is my 6 months post operation. I never regret one thing about my rhinoplasty, I just wish I would have done it sooner. I got so many compliments on my nose as I refer them to Doctor. As a girl, being pretty is something we all want. When we look good, we feel good. The new look I have completely change my self-esteem. I became so much more confident and love myself even more. Thank you Doctor and the wonderful team for helping me achieving my beauty goal.",
  },
  {
    name: 'Yao T.',
    date: '8/20/2022',
    review:
      'I have been going to Dr.Kahng for long time. He and his stuff are truly amazing. He always does an exceptional job and nature result and I always leave happy! I went for doctor for my rhinoplasty and chin augmentation. There are not wed to express how grateful! Thanks for perfection job!!! Will come back again for service. Very recommend!',
  },
  {
    name: 'Cassidie P.',
    date: '7/30/2022',
    review:
      "I recent have my Rhinoplasty here with Doctor Kahng... I love my new nose each n every day since I did it over one month ago... I'm glad I found the best doctor who is very very extreme gentle and I got so many compliments from friends, coworkers & relative that my new nose look extreme natural, and also it helps my face look longer and less rounded... best thing is that I love the result which I did not expect it...Also, thumb up to miss Julie, she keep checking on me after the surgery to make sure everything went well...in near future, if I have any other plans for cosmetic improvements, I would definitely choose doctor Kahng...",
  },
  {
    name: 'Karen H.',
    date: '4/10/2022',
    review:
      "Hi here's an update on fully healed eyelids! My right eye is naturally smaller than my left eye and has more skin/fat on the lid, so after the surgery, the asymmetry is still present. I feel like suture method isn't as good as the surgical method at correcting asymmetry, but who knows. But I'm loving the results, it's been two years post op and I love how they've healed! It's exactly what I wanted. I didn't want a big lid, I wanted a natural lid to maintain the mono lid look a little bit. This is what I told Dr. kahng and I think he did great to honor my preference. Be sure to tell him what you want!!",
  },
  {
    name: 'Brainy S.',
    date: '4/4/2022',
    review:
      'I had my laser treatment done here for hyper pigmentation. I have also have ultherapy done here. The clinic is clean and the nurses are professional. I definitely would recommend this place If you want to fight the wrinkles of time. In which I have been doing a lot lately.',
  },
  {
    name: 'Marlee F.',
    date: '3/29/2022',
    review:
      "I get a lot of questions about my review, even now. Just wanted to update and say that I'm still satisfied with my procedure! Here are recent photos of my eyes from this past month. PS This is the only plastic surgery procedure I've ever had.",
  },
  {
    name: 'Ngan N.',
    date: '3/23/2022',
    review:
      "I got my rhinoplasty done here about a month ago and I am in love with the result. My original nose is short and I don't have much of the bridge. Now looking at my new nose I fall in love with it every single day. My doctor was very kind, I barely had any bruises and minimal pain. He constantly schedule me for a check up to see how I'm doing with my nose. All the staffs are friendly and informative , and I highly recommend this place",
  },
  {
    name: 'V D.',
    date: '3/22/22',
    review:
      'I was recommended by my friends,the front desk staff is welcoming ,the nurses and doctors are professional and responsible.They will explain the process in detail. I had an amazing experience here,excited for next appointment.',
  },
  {
    name: 'Tiffany C.',
    date: '3/19/2022',
    review:
      'Very nice environment and staffs. I consulted skin treatments. They aim at your problem and give you ideas of how different treatments work each way.',
  },
  {
    name: 'Naomi L.',
    date: '3/19/22',
    review:
      "I've been a customer for past 6 months. professional service and friendly stuff! Love my botox result. Highly recommend this place.",
  },
  {
    name: 'Ann C.',
    date: '2/22/2022',
    review:
      'Angela is the BEST! She truly treats each client as an individual and gives much thought and effort in creating the best outcome-genuinely takes great pride in her work. Extremely thorough, professional, generates a warm vibe-Will remain a loyal client~Thank you Angela!',
  },
  {
    name: 'Mary L.',
    date: '12/29/2021',
    review:
      "I just had my TT last week and could not be happier. I know I have a long road ahead before I see the true results but I can already tell it's going to look amazing. Dr Kahng is awesome. He has the best beside manner I have seen in any doctor for what seems to have been forever. I would give him 10 Stars if I could. Thank you Dr!!!!",
  },
  {
    name: 'Stephanie G.',
    date: '12/18/2021',
    review:
      "The center is beautiful decorated and clean. The staff is polite and friendly. The nurses are very informative about the procedures that are done in this office. Dr. Kahng is a amazing doctor. I have been coming for services for over the last 10 years. From the front staff, to the nurses and Estheticians, it's a great place to get services.",
  },
  {
    name: 'Yajaira P.',
    date: '10/5/2021',
    review:
      'From the moment i walked in i felt so welcomed by all staff. This place is super clean and dr Kahng AMAZING! I came in for a nose job and i was very specific about what i wanted and dr was able to achieve the look i wanted but also make my nose look natural. I am super happy with my results and i am very greatfull to have dr kahng as my dr.',
  },
  {
    name: 'Anna Z.',
    date: '10/3/2021',
    review:
      'I am so grateful to Dr.David Kahng and all the wonderful staff. They are so kind, so helpful, so thoughtful. My procedures are done efficiently and effectively. I would happily refer anyone to their office.',
  },
  {
    name: 'Gracie Y.',
    date: '10/3/2021',
    review:
      'I did my double eyelid with Dr. David Kahng. He is a very professional and skillful doctor. He suggest me not to follow the populace aesthetic but design the eyelid depending my eye shape. The eyelids came out very natural and all of my friend thought I am born with the double eyelids! The eyelids recovers well without any further concern!',
  },
  {
    name: 'Chengy I.',
    date: '10/2/2021',
    review:
      'Dr David Kahng is an excellent doctor!! He is so patient, works carefully with precision, checks in on you after your surgery, and overall makes you feel comfortable.',
  },
  {
    name: 'Yidan S.',
    date: '7/15/2021',
    review:
      'I had a really good experience here. The procedure went well, I was satisfied with the result, and was treated nicely during the whole process. Would recommend to others.',
  },
  {
    name: 'Ashley R.',
    date: '7/10/2021',
    review:
      "I've been going to Dr. Kahng for the past 2 years now and I couldn't be happier. My first visit was to get a rhinoplasty and it was the best decision I've ever made. I also came back for a breast augmentation and again it was perfect. Dr. Kahng truly listens to your concerns and he never disappoints. The staff is amazing and so friendly. The facility is clean and welcoming. I highly recommend Dr. Kahng and his team to anyone.",
  },
  {
    name: 'Andrew H.',
    date: '7/11/2021',
    review:
      "Went to here a couple days ago for acne scars. I like the doctor and the nurses here. Very good customer service. Didn't keep me wait for long. Would come here again if needed to.",
  },
  {
    name: 'Sy C.',
    date: '7/7/2021',
    review:
      'Amazing doctor amazing staff! I never felt more at ease throughout the whole process. Had some filler done to my nose bridge and under my eyes. Incredible what a few injections can do! Completely quick and easy procedure. It was exactly what I wanted. I would highly recommend this doctor. Sweet doctor that really cares for his patients.',
  },
  {
    name: 'Mekail A.',
    date: '6/29/2021',
    review:
      "As a male customer, I felt a bit intimidated asking questions about skincare. On the day of my appt at San Gabriel -Clinic, everyone was so kind and very respectful. they took time to listen and took care of my treatment. The greatest thing I like about this place: they are very honest and so kind. I can see they love what they do and they make sure you are fully satisfied with your treatment. Alice was my nurse. she's amazing, kind, and very skillful. Dr. Kahng and his staff here are very professional, they make you feel very welcome. The clinic is very clean and I can see they follow infection control protocol every well. I honestly recommend this clinic and I will come back very soon for my next treatment. Thank you.",
  },
  {
    name: 'E K.',
    date: '5/20/2021',
    review:
      "I had a wonderful experience with Cara's staff, nurses, and Dr. Kahng. The procedure went very smoothly and comfortably. Staff was accessible and communicative all throughout the process and was/will be available via text post-op to answer any questions or concerns. I'm very happy with my results, which I expected given Dr. Kahng is an expert in his field! Procedure: male Asian rhinoplasty. Process: 1 virtual consultation, 2 in-person pre-op consultations, and, so far, a 1-week, 2-week, 3-week, 4-week post-op check-ups with a 3 month scheduled. I was healed and fully back to normal activity in four weeks. You'll be in good hands.",
  },
  {
    name: 'Esmeralda V.',
    date: '5/20/2021',
    review:
      "Everyone here is so kind and respectful. If you're debating on whether you can trust Dr. Kahng or anyone else at this center or not, I would not hesitate in telling you that you should! I trust them 100%. I can see myself coming back.",
  },
  {
    name: 'Teemo Y.',
    date: '5/9/2021',
    review:
      "My journey through my breast reduction process was an amazing experience. Dr. Kahng and his staff provided a safe and supported environment. I was comfortable I felt cared for. Not forgetting the nurses at the surgery site beautiful. I would recommend and introduced everyone I know and wanting to have this done to have it at the CARA Center. I want to thank everyone, Dr. Kahng, Alina other beautiful ladies you guys are Awesome. My self esteem rocks right now I am feeling great I've you all. Thank you",
  },
  {
    name: 'Wendy C.',
    date: '4/8/2021',
    review:
      "Dr. Kahng and his associates are such wonderful people. What drew me to this facility as opposed to its competitors is the welcoming vibe that I sensed from the first interaction. There was another doctor I considered but I chose Dr. Kahng because he has a calm, welcoming, and non-judgmental demeanor. I think with any beauty service, it's common to feel vulnerable so for me personally, I prioritized trusting my gut feeling. So far I'm glad I went with CARA. Two front office assistants and the nurse I have interacted with all have been so lovely. I knocked off one star because there are times that I feel Dr. Kahng is rushed and the last time I spoke with the front desk person she sounded a bit annoyed. However, 9/10 times my experience has been positive so a 4-star review seems reasonable at this time. The last thing I'd like to mention is that IMHO, CARA has conveyed ethnic diversity and acceptance of everyone regardless of skin color, race, and/or gender. I am making this statement based on the 3+ visits I've had so far.",
  },
  {
    name: 'Annie Y.',
    date: '5/2/2021',
    review:
      "Had a breast augmentation done here by Dr Kahng who is an excellent surgeon. put me completely at ease and gave me amazing results, better than i ever hoped for! The whole process was wonderful and i felt myself under-care the female nurse(can't remember her name) was great and kind! Would highly recommend!",
  },
  {
    name: 'Kate H.',
    date: '2/24/2021',
    review:
      'I had a great experience overall at Cara. Nurse Alice was professional and spent time to explain the treatment since she knew it was my first time receiving laser. Im satisfied with the results!',
  },
  {
    name: 'Julie H.',
    date: '2/24/2021',
    review:
      "This was my first time receiving skin care so I didn't know what would be the best option for me and was a little nervous. But I'm so glad I chose this place! They were very thorough in explaining different options, had great service and Im satisfied with the results. Definitely planning on visiting again.",
  },
  {
    name: 'Ruthie N.',
    date: '2/21/2021',
    review:
      "I can never thank Dr. Kahng and staff enough for all your amazing services. As a surgeon, you've gone above and beyond everything, I ever would have expected. Thank you for your excellent work while performing surgery and the continued treatment. I will be recommending you to everyone I know.",
  },
  {
    name: 'Briana F.',
    date: '2/19/2021',
    review:
      "I got my boobs done at Cara, and I have to say that I love Dr. Kahng and the entire team! I wanted to wait a little while till after the procedure to see how the healing goes and what the scars are like. I'm shook because the scars are barely there! The healing is going well, and Dr. Kahng is a master of making the breasts look so natural! This was my first time getting any kind of procedure done, so I was nervous. Everything changed after the first consultation. The entire process was so smooth. Everyone at the office was warm and welcoming. Dr. Kahng listened to everything and answered all my questions, and I trusted him completely going in. I was also planning on getting a Brazilian Buttlift done and I already know where I'm going to get that done!",
  },
  {
    name: 'Griselda C.',
    date: '2/15/2021',
    review:
      'I had Botox today , the nurse helping me today was supper friendly and seemed very knowledgeable it did hurt a little but the nurse did an excellent job I immediately felt a little lift on my eyelids but she said I would have the best results in a week or two ! Over all I was very satisfied thank you !',
  },
  {
    name: 'Tiffany H.',
    date: '2/12/2021',
    review:
      'I did Ultherapy a few weeks ago here and im very impressed by their great customer service. They made me feel comfortable from start to finish and always prompt to answer any questions i had. Thank you, Clara and Alice for awesome work. Im happy with my result. Will be coming here for routine care. Thank you!!',
  },
  {
    name: 'Dani H.',
    date: '2/2/2021',
    review:
      "I love coming to this place! Everyone is polite and makes you feel welcomed. Consultant offered treatment promotions for me based on my skin concerns and now, my skin looks much better and younger. They are honest and will only recommend what you need. I'm so happy with my results!!",
  },
  {
    name: 'Barbara N.',
    date: '2/5/2021',
    review:
      "This place is so nice and clean and professional. Alice was my nurse and was very honest with me. I wanted extra units for my forehead, but she discouraged me, saying that i didn't need as much. I'm really grateful she was being honest and not just trying to make extra money off me I had my crows feet done, and I feel like I look 5 years younger! Thanks Alice!",
  },
  {
    name: 'Samantha M.',
    date: '2/3/2021',
    review:
      'My sister recommended this place. I got Botox on my forehead and the 11 line. I am very pleased with the service. Staff is friendly and professional. Addressed all my concerns and questions. The office is also very inviting. Definitely will be back for my next round of Botox.',
  },
  {
    name: 'So H.',
    date: '2/2/2021',
    review:
      "Great service and care all around. I'm so satisfied with my results. Everyone is so nice and efficient. I read reviews complaining for consultation and prices before going to this office but I gave them a try since most reviews were good. My first visit with consultant Julie, she was very honest, knowledgeable, caring and sweet. She always tells the truth. It worth it than any other clinics. And I got treatment that really helped, it was not a waste of money. Also staffs are nice and friendly, Nurses are very informative. I definitely come back here for another treatment",
  },
  {
    name: 'Evangelina M.',
    date: '1/15/2021',
    review:
      'I have been coming here along with some family members for the past couples of years for laser treatments. I have had treatments in all the offices Dr. Kahng operates and have only positive experiences every time I come in. Everyone from the front desk clerk to the RNs along with the consultants have been nothing but welcoming to me. The consultants explain in detail exactly how each treatment is helping my skin and the aftercare I would expect. I have extremely sensitive skin and I love how the RNs do a great job by being very gentle and comforting. Especially now with this pandemic going on, it feels great knowing people are still very particular and take pride in their customer service !',
  },
  {
    name: 'Kalin T.',
    date: '11/9/2020',
    review:
      'I just had botox at their Buena Park location and I cannot begin to express my gratitude at how compassionate and comforting they were! I have a bad phobia of needles and they made the process so much easier than I anticipate. They calmed me and gave me words of encouragement the whole time. I am sold for life.',
  },
  {
    name: 'Mary S.',
    date: '11/1/2020',
    review:
      "Lengthy review up ahead: Where to begin with CARA Plastic Surgery Center...Dr. Kahng literally changed my life for the BETTER! I wanted a BBL (Brazilian butt lift) since I was 16 and for my 23rd birthday this year I looked for a surgeon that does BBL's near my home and that was when I came across CARA Plastic Surgery Center on Yelp. I was impressed by their positive reviews so I looked through their website and photo galleries. I immediately contacted them for a virtual consultation and they responded back the very next hour! :) After the virtual consultation I was set on going through with the BBL procedure. All the nurses and doctors I have spoken to have been nothing but professional and kind. They of course follow all the new COVID-19 rules and are extremely patient with you. I'm so happy I chose CARA for my first surgery and they left me with very natural looking results. :) They answer any and all questions you have as well as demonstrate how to put on the compression garment and faja you will need (both came for free). All in all you won't regret coming here and I cannot thank everyone enough at this center for being accommodating and helpful throughout the whole process. Thank you once again and I will definitely recommend this surgery center to my friends and family.",
  },
  {
    name: 'Erdenetuya D.',
    date: '10/18/2020',
    review:
      "Professional staff and clean place! It's been nice for the first time I got skin care and genesis in CARA. Consultant Ve is super professional and experienced. Definitely will go back there and have my next skin care and PRP.",
  },
  {
    name: 'Melanie R.',
    date: '10/11/2020',
    review:
      'I 100% recommend dr kahng and his team! They are all so professional and kind! Dr kahng gave me amaaaazing results for my breast augmentation and BBL! And his team helped me w/ all my questions and concerns along the way! So glad i found them',
  },
  {
    name: 'Ree N.',
    date: '10/9/2020',
    review:
      "I love Dr Kanhg! He really does care about you and Is super patient and involved. He literally helps you get up and get into your clothes or faja! I'm extremely impressed with his hospitality! Won't go anywhere else! Maritza always responds any day or time if I have questions or concerns too! All the staff is just wonderful! Thank you for all you do and making my experience a pleasant one!",
  },
  {
    name: 'Patty A.',
    date: '10/7/2020',
    review:
      "The best experience ever!!! Maritza and all the girls were so amazing... they made the whole process so much easier for me. I was nervous but they relieved my stress. They took their time and followed all Covid-19 requirements. I'm two weeks post op and my results are amazing. Dr Kahng does fantastic work...the incision lines are precise and my figure is amazing and I'm two weeks post... I can't wait until swelling goes down to reveal my true figure. I would recommend the team without a doubt!!! If I could give 10 stars I would!!!",
  },
  {
    name: 'Gilda G.',
    date: '10/7/2020',
    review:
      "Dr Kahng is an awesome Dr! He does a great job. I'm absolutely happy with his work. I had a tummy tuck about 4years ago and I can say I'm happy with the results. I came back for a leg tuck last month and the results are coming along very well. The office staff is awesome too. I'm able to call or text Maritza 24hrs 7days a week for any questions or concerns and she replies to me right away. I would absolutely recommend Dr Kahng to anyone that's looking for a Plastic Surgeon. That's why I referred my daughter to him when she told me she wanted to get a Breast Augmentation. So she did her research and choose him to do her surgery. She had her surgery in May and she's in love with her new look. Thank you Dr Kahng and staff!",
  },
  {
    name: 'Irene L.',
    date: '9/19/2020',
    review:
      "I got laser treatment here five times. I started because I wanted to reduce my pores. It's quite satisfying and likely to continue in the future. I got it from Nurse Alice, who works on the weekend. Alice was kind and above all, she advised me on such things as follow-up care. Choosing a dermatologist well is a blessing.",
  },
  {
    name: 'Breanna O.',
    date: '9/1/2020',
    review:
      "Just when I thought this place couldn't get any better. Vannessa is my girl for my Botox and lips, she's awesome so getting her scheduled with me is sometimes rough since I have a busy life myself. The staff here set me up with the Brilliant Distinctions App and I had two offers that I wanted to redeem on my lip filler that I always purchase. Well Ve mad It very easy over text to get my discounts used. She also really worked with the days I gave her that I was available to get my services done. Ve was sweet, organized, and text me back fast! I love It ! The staff here is unmatched by any other office I've been to. Keep up the good work Ve(:",
  },
  {
    name: 'Andrea B.',
    date: '8/4/2020',
    review:
      'I went to CARA for a botox service that I needed. Nurse Vanessa helped me out with this procedure, she was very knowledgeable about the anatomy of the facial muscles and where not to inject after asking me where exactly I wanted botox units. I proceed to let her know of my previous revision rhinoplasty that I had performed on me about 18 months ago and all my concerns I had before getting injected near that area. Vanessa was very patient and listened to all my concerns and knew exactly what she was doing and advised me what would be the best option. I am so pleased with the procedure and very happy with the results. I am going to continue to come in for botox with nurse Vanessa, her injections were done very gently with little to no pain, she was amazing!',
  },
  {
    name: 'Gaby R.',
    date: '5/16/2020',
    review: 'I went in for a facial procedures done I love the results. I highly recommend them and I will be back.',
  },
  {
    name: 'Karen H.',
    date: '4/2/2020',
    review:
      "I have monolids and have been wanting eyelid surgery for a long time. I've done many consultations with various plastic surgeons around Los Angeles, but never felt like any of them were a good fit. However, when I did a consultation with CARA plastic surgery in SG, I immediately felt like the staff truly cared about my needs. The consultant, V, spent a long time with me explaining the surgery, pricing, risks and benefits of different procedures, and answered all of the questions I had. She even gave me her phone number and I've texted her many times with questions that she responded to immediately. Because of this, I felt very comfortable moving forward with the procedure. I wanted the suture method but another doctor had previously told me that I did not have the right anatomy for suture method. During my consult with Doctor Kahng, he seemed very knowledgeable and assessed me and was confident that his three minimal suture method would work for me. It's been 2 months post procedure and I am SO happy with the results. it exceeded my expectations!! Initially the swelling lasted for around a week, and one eye had bruising for 2 weeks, but they recommended home remedies that worked wonderfully for both bruising and swelling! There were no other complications . They scheduled follow up appointments and I felt like the quality of care continued on even after the surgery. I would highly recommend Cara plastic surgery to anyone.",
  },
  {
    name: 'N H.',
    date: '3/7/2020',
    review:
      "This office is very friendly and they know what they're doing! I went in for botox--for the frown line and a small amount on forehead. Their office is beautiful, very clean and nicely designed. Everyone said hello to me and greeted with a smile. I loved that. The woman who performed my botox was wonderful and listened to the concern I had. Highly recommend--this will be my new spot for botox and possible fillers in the future.",
  },
  {
    name: 'Jiyoon Y.',
    date: '2/27/2020',
    review: "I got facial hair removal from Alice. It wasn't painful at all. I will definitely come back!",
  },
  {
    name: 'Charlie S.',
    date: '2/15/2020',
    review:
      "I'm usually wary of medical services..especially of this nature..and especially korean places because I just assume they are money hungry (I'm also Korean by the way). The issues I wanted addressed were acne scars I've unfortunately been left with from severe teenage acne..and some from adulthood. I'd like to say that my entire experience here has been nothing short of wonderful. Julie, who was my consultant, was patient, kind, and understanding. She didn't shove any services to my face...instead she suggested what she believed were best treatment options to me and at very reasonable costs (I visited a dermatology office before this and the prices were just outlandishly expensive). I felt no burden onto her whatsoever as I was talking my mouth off...of my acne history, bad experiences with dermatologists, price concerns, and ineffective treatments. Again, her patience was much appreciated. Thank you Julie. I was then greeted by such an angel of a person....Alice, who was going to treat me. I naturally have high anxiety and stress easily...but she genuinely made me feel really comfortable. She also took the time to explain things I didnt know about certain aspects of acne...and she inspected me very closely to further explain what sort of corrections I can have...and preventative measures I can take to better manage my skin. Nothing felt painful and she did this cute thing where she would warn me before every time she would initiate the treatment on the problematic spots. Alice... you are so kind, thank you. I already see improvements and it's only been a few hours. Dr. Kahng... I would like to say you definitely hired professional and interpersonal individuals to be part of your staff. Please give them a raise or treat them out to Kang Ho Dong next door ^_^; I'm going to come back for other issues I want corrected. JULIE AND ALICE...YOU GUYS ARE AWESOME!!!",
  },
  {
    name: 'Jessica A.',
    date: '1/22/2020',
    review:
      "This place is phenomenal! Both my mom and I have been coming here for all of our cosmetology needs. The front desk staff is welcoming and very pleasant. Maritza the consultant is amazing! She's very knowledge, personable and makes the process enjoyable. Vanessa is awesome with Botox! Personally I've received Botox injections as well as laser treatments for dark spots. Both worked so well. I refer everyone I know here because I know they're going to get outstanding results. Friends and family of received :breast augmentation, Brazilian butt lift, neck tightening, tummy tucks, eyelid rejuvenation, Botox and laser hair removal to name a few. They have all LOVED the results! Excited for my next appointment for laser hair removal!",
  },
  {
    name: 'Natasha Y.',
    date: '1/19/2020',
    review:
      'I had an amazing experience here. I got a breast augmentation about a week ago. First off my consultation was wonderful. I was never rushed and had all my questions answered. The staff was so nice and the nurses were very informative. Dr. Kahng did my surgery and I went in completely calm because I felt I can truly trust him. In a blink of an eye my surgery was over. Any questions post op I had were answered promptly. I felt extremely well taken care of. My mom came with me to my surgery and she said bedside manner was a 10/10 and she is a hard to please woman lol. Over all I enjoyed my time with the staff and nurses and loved my results so far.',
  },
  {
    name: 'Lily S.',
    date: '1/10/2020',
    review:
      "I've done lip fillers and botox twice here now with nurse Vanessa and she does such a great job!! I'll keep coming back. The clinic is clean and the staff is very helpful!",
  },
  {
    name: 'Jin L.',
    date: '1/9/2020',
    review:
      "Been with CARA a while now and this is a long overdue review that I have been telling myself to do it as this is the only way to pay gratitude to Dr. Kahng, Vanessa, Dasol and Ve! Words can't express how I am so grateful to have find Dr. Kahng and of course through Yelp! I first came in for a consult for rhinoplasty infection done in another office (I will not mention names here) During my first consultation, Dr. Kahng took his time explaining on how and what might have happened that cause the infection. Ve is so helpful answering and replying to all my text (I was so paranoid due to my first experience, I want to make sure this is the RIGHT place to go) I decided to proceed my procedure with Dr. Kahng (Best choice ever, no I am not exaggerating). From my first impression booking for a consultation to getting the surgery done and coming back for follow ups, everyone is so welcoming and helpful! Nurse Vanessa and Dasol has been helping me throughout my recovery, they are always so patient and polite! I am 3 months out from my surgery and *finger crossed* everything is healing well! Thank you Team CARA!",
  },
  {
    name: 'Byambaa B.',
    date: '12/14/2019',
    review:
      'My wife did her upper eyes surgery here, we came for a follow up session and I spoke to the consultant about little things that I can do for improvement. They are very professional and did not try to oversell me. The consultant suggested me to start with Botox to remove my wrinkles on forehead, proceeded with her recommendation and the results are great. My wife is also very happy with her double eyelid, happy wife happy life!',
  },
  {
    name: 'Karen B.',
    date: '11/19/2019',
    review:
      'Ye~~ This place is so awesome! I got the Ulthera care 2 weeks ago for the first time. Very nervous... but every staff is very professional and gently nice. So I got the treatment comfortablely. And I also got the whitening premium service yesterday. It was very impressive and effective to get my face tone lightened up. Today morning, my face is very clean and soft. Their price is also very reasonable. I really love this place! I will tell all my friends to get this sevice.',
  },
  {
    name: 'Jessica K.',
    date: '11/4/2019',
    review:
      "My mom had eye bag surgery a month ago and she's so happy with the result. She's from out of state so she couldn't come for her one month follow up but hopefully she can make to 3 month check up. All the staff are very nice, they answered all of our questions in a professional, personable and attentive manners. We can't thank you enough to Dr. kahng!!",
  },
  {
    name: 'Jessie H.',
    date: '11/2/2019',
    review:
      'Got a facial today (water course), V was very kind and friendly to explain to me the process of the course. The skin care specialist was very gentle while massaging my face and neck, I fell asleep. The product they used all smelled so nice and fresh. After the water course, my face looked and felt super clean! THANK YOU!!!',
  },
  {
    name: 'Breanna O.',
    date: '10/23/2019',
    review:
      "Love this place! I get my lips injected by the head nurse Vanessa, and omg I must say she is amazing! She's so funny and makes me feel comfortable when injecting! Totally numbs you my mouth and I don't feel a thing. She's very knowledgeable in her field and answers all questions and concerns. The staff is very friendly and great at keeping in touch with future appointments. Thank you so much Vanessa!",
  },
  {
    name: 'Nancy B.',
    date: '10/21/2019',
    review:
      'My wife did her upper eyes surgery here, we came for a follow up session and I spoke to the consultant about little things that I can do for improvement. They are very professional and did not try to oversell me. The consultant suggested me to start with Botox to remove my wrinkles on forehead, proceeded with her recommendation and the results are great. My wife is also very happy with her double eyelid, happy wife happy life!',
  },
  {
    name: 'Cathy M.',
    date: '10/11/2019',
    review:
      "Being close to 40, you have to worry about your skin sagging and horrific lines showing up on your face. Sorry but those $2000 face creams really don't help much to erase those worry lines and sad sad wrinkles. I had an amazing plastic surgeon/friend who first did Botox on me at UCLA, but with the distance and I know he would rather do reconstructive breast surgery from cancer than simply inject me. Therefore, I yelped and yelped and found CARA. I wanted somewhere closer to me with great reviews and good pricing. When I called, it was easy to make an appointment and the ladies were so kind. I came in and the office on the day of my appointment and it was so nice, clean and presentable. The ladies were so kind at the front desk, filled out some forms and within 5 minutes, I was called in. Alice, the RN, was the one who injected me with Botox. Before the injections, she studied my face and asked what concerned me most. She was so thorough and yes, I am still nervous with the needles, but she was so calm and took her. We discussed what areas needed the injections and before she proceeded, she gave me an ice pack which tremendously helped for my face. Oh do I love that ice pack! Then, all the many tons and tons of injections were done without pain. It was amazing and Alice was amazing. I literally had no pain and did not wince for her skills are so smooth and professional. The prices are so reasonable and with her skills, would I be back? Yes. To Botox and youth, yes. Updated Review 10/11/2019: So I came back today to have Botox again with Alice, the RN and right away, with no waiting, she was already there waiting for me! I LOVE that she gave me ice packs for my face to hold on to, so that it helps with the bruising and injections. Her injections are so precise and not painful at all! She really knows what she is doing. We first go over what areas I want to get done and she truly listens and understands my problem areas. It was so quick and easy and no bruising! This place is truly reasonable and wonderful for botox injections. Their pricing is so fair and making the appointment is so easy. The office staff are so friendly and the entire clinic is so modern, clean and neat. There is parking in the back of 3rd Street or front meter parking $1/hr.",
  },
  {
    name: 'Nicole L.',
    date: '10/10/2019',
    review: 'Very good experience on skin care!! Doctor Khang is very professional and staff are super nice!',
  },
  {
    name: 'Brianna Y.',
    date: '10/5/2019',
    review:
      'I love Dr David so much ! He is super professional in plastic surgery industry ! No matter the price or service , they are all fantastic ! Personally, I had couple service here, and Dr David change my life. Also, V she is my consultant, she always give me the best advice ! ! ! 100% recommence Dr David! They care patience more than anything!!!!',
  },
  {
    name: 'Marae K.',
    date: '10/5/2019',
    review:
      'I love this place! I walked in for a double eye lid consultation and i walked out with more knowledge than i ever expected! As soon as i walked in Julie greeted me which made me feel so welcomed! V, the consultant was very helpful and informative! She went into details and informed me so i can understand [medical terms for someone like me is like another language] Thank you la cara! If you want the best consultation and an awesome greeting come here!',
  },
  {
    name: 'Rosalinda L.',
    date: '10/5/2019',
    review:
      'Friendly and professional staff. Very informative and provided the service I expected, they never pressure me to do more that what I wanted. After my procedure they were helpful and comforting. Extremely happy with my results!',
  },
  {
    name: 'Miyun I.',
    date: '10/3/2019',
    review:
      "I love the treatments and the results! As I am getting toward 50's, I have noticed some aging signs like wrinkles and sagging skins on my face. My biggest concern was my laugh lines were getting more pronounced. It really bothered me and I even lost confidence too. I decided to get Botox and filler. It was my first time having it, so I was little worried and scared until I met my beauty consultant, Clara and a nurse. They were very knowledgeable, friendly and professional. They recommended me minimal treatments as I am a starter. I only got 1 syringe of Juvederm for my laugh lines and 10 units of Botox for my eye wrinkles. As soon as filler was placed, I could see the difference on my face. I was impressed to see such a fast result. Botox would take about a week to see the results. Now I look more refreshed, vibrant and young. I am very happy about results and will definitely return in the future. I recommend the treatment to everyone who is thinking of the treatment of Botox and filler. Also, it wasn't painful if you are scared of needles.",
  },
  {
    name: 'Mi M.',
    date: '8/29/2019',
    review:
      "I've gotten multiple treatments of Botox and Filler with the nurses here and it was amazing and this has led me to proceed with cosmetic surgery here! I have been tempted since after pregnancy with Liposuction and also Breast Augmentation. I knew this will be the best decision, it has been 1 year since my surgery and the results are amazing. I also went to get a second opinion at other offices and they told me I needed a breast lift. But Dr. Kahng proceed and told me an implant will be sufficient to give me a lift, I went with his decision and he also told me I do not need a Tummy tuck since I do not have a lot of sagging skin. We went ahead and proceeded with a stomach, flanks and arm lipo. Nurses are very supportive throughout my recovery and during my follow ups. I have also been very religious on putting on my compression garment throughout my recovery. Overall, I am very satisfied and without doubt be rating this place 7 out of 5 starts",
  },
];

function Reviews() {
  const [curPage, setCurPage] = useState(1);
  const pageSize = 4;
  const [reviews, setReviews] = useState(review_data.slice(0, pageSize));

  const clickNext = () => {
    if (curPage === Math.ceil(review_data.length / pageSize)) {
      return;
    }
    setReviews(review_data.slice(curPage * pageSize, (curPage + 1) * pageSize));
    setCurPage(curPage + 1);
  };

  const clickPrev = () => {
    if (curPage === 1) {
      return;
    }
    setReviews(review_data.slice((curPage - 2) * pageSize, (curPage - 1) * pageSize));
    setCurPage(curPage - 1);
  };

  return (
    <div className="px-8 max-w-[1520px] w-full">
      {reviews.map((review, index) => (
        <Fragment key={index}>
          <ReviewCard review={review} />
          {index !== reviews.length - 1 && <hr className="my-10" />}
        </Fragment>
      ))}
      <div className="flex justify-between mt-24 font-trajan text-2xl">
        <button disabled={curPage === 1} onClick={clickPrev} className="flex items-center gap-5 ">
          <Image src="/icons/prev.svg" width={32} height={32} alt="arrow left" />
          Previous
        </button>
        <button
          disabled={curPage === Math.ceil(review_data.length / pageSize)}
          onClick={clickNext}
          className="flex items-center gap-5 ">
          Next
          <Image src="/icons/next.svg" width={32} height={32} alt="arrow right" />
        </button>
      </div>
    </div>
  );
}

function ReviewCard({review}) {
  return (
    <div className="text-xl leading-loose text-[#585451]">
      <p>{review.review}</p>
      <div className="flex justify-between mt-5 font-semibold">
        <div className="flex gap-2">
          <Image src="/icons/comment.svg" width={36} height={'36'} alt="speech bubble" className="object-cover " />
          <p>{review.name}</p>
        </div>
        <p className="text-[#9D9892] text-lg">{review.date}</p>
      </div>
    </div>
  );
}

export default Reviews;
