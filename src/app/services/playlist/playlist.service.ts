import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

    timestamps = [
        1543536000,
        1543622400,
        1544832000,
        1544918400,
        1545004800,
        1545091200,
        1545177600,
        1545264000,
        1545350400,
        1545436800,
        1545523200,
        1545609600,
    ];


    1543536000

    // 1544659200
    // 1544745600

  playlist = [
      {title: 'ONE', index: 0, img: 'assets/1.png'},
      {title: 'TWO', index: 1, img: 'assets/2.png'},
      {title: 'THREE', index: 2, img: 'assets/3.png'},
      {title: 'FOUR', index: 3, img: 'assets/4.png'},
      {title: 'FIVE', index: 4, img: 'assets/5.png'},
      {title: 'SIX', index: 5, img: 'assets/6.png'},
      {title: 'SEVEN', index: 6, img: 'assets/7.png'},
      {title: 'EIGHT', index: 7, img: 'assets/8.png'},
      {title: 'NINE', index: 8, img: 'assets/9.png'},
      {title: 'TEN', index: 9, img: 'assets/10.png'},
      {title: 'ELEVEN', index: 10, img: 'assets/11.png'},
      {title: 'TWELVE', index: 11, img: 'assets/12.png'},
];

  youtube = [
      {link: 'XApkl80-sb8'},
      {link: 'J1WHNcnHo4A'},
      {link: 'QrgwL5r7IcU'},
      {link: 'nqRRciSPXlo'},
      {link: 'w0qFCMuGxUM'},
      {link: 'fxEOxQYl-wY'},
      {link: 'aIeidmh_C0o'},
      {link: 'HhEvxNhqM0M'},
      {link: '9L_qPCVxTFY'},
      {link: 'NC9SLOiVcvU'},
      {link: 'bE9XIB01hGE'},
      {link: 'UNpiQwgStNA'},
  ]

    // day 8 song is called: If

  pageContent = [
      {listen: 'Breath of Heaven', scripture: 'Luke 1:30-38', imagine: 'The feelings Mary must have experienced as she prepared to give birth and raise the Son of God.', title: 'Christmas Thoughts', subtitle: 'Jeffery R. Holland, December 1977 Ensign'},
      {listen: 'Still, Still, Still', scripture: 'Isaiah 9:6', imagine: 'The sweet stillness that drifted through the air that the Prince of Peace brought. At what level of Christmas will you celebrate?', title: 'Three Levels of Christmas', subtitle: ''},
      {listen: 'Welcome to Our Worlds', scripture: 'Luke 1:30-38', imagine: 'Am I living as Christ would have me live? Am I prepared to follow His plan for me?', title: 'The Lord’s Trees', subtitle: ''},
      {listen: 'Carols Sing', scripture: '2 Nephi 25:26', imagine: 'As you decorate this seasion think what each Christmas symbol truly represents.', title: 'Teach the Children', subtitle: ''},
      {listen: 'Do You Hear What I Hear?', scripture: 'Matthew 18:3', imagine: 'The best part of Christmas is focusing on the Savior, not the ribbons and bows.', title: 'Without Ribbons and Bows', subtitle: 'Elder Jeffrey R. Holland, Ensign, December 1977'},
      {listen: 'Christmastime', scripture: 'Matthew 10:39', imagine: 'The sweet sound of the angels singing, rejoicing and ringing in the Savior’s birth.', title: '', subtitle: ''},
      {listen: 'A Long Time Ago', scripture: 'Luke 19:38', imagine: 'A long time ago, a mother lay by the side of a tiny king. He taught men of faith to forgive.', title: '', subtitle: ''},
      {listen: 'Believe', scripture: 'John 14:18', imagine: 'How the Savior is always there for us in our time of need. He will show us the way.', title: 'If ...', subtitle: ''},
      {listen: 'I Stand All Amazed', scripture: 'John 13:12-16', imagine: 'What goodness the world would be filled with if we patterned our lives after the Savior’s ultimate example of service.', title: 'He Who Would Be Chief Among You', subtitle: 'By Carol Lynn Pearson'},
      {listen: 'Alleluia', scripture: 'Mosiah 14:5', imagine: 'The emotional and physical pain Jesus felt in Gethsemane. How the heavens must have rejoices as His great sacrifice was finally complete.', title: 'I Remember', subtitle: ''},
      {listen: 'One by One', scripture: 'Ether 4:11-12', imagine: 'What a miracle His visit represents and a testament to the truthfulness of the Gospel.', title: 'One by One', subtitle: ''},
      {listen: 'Silent Night', scripture: 'Luke 1:20-21', imagine: 'The glorious arrival of the little babe lying in a manger that holy night. The Greatest Gift!', title: 'Child in the Manger', subtitle: ''},
  ];

  scripture = [
      {text: `30 And the angel said unto her, Fear not, Mary: for thou hast found favour with God.

31 And, behold, thou shalt conceive in thy womb, and bring forth a son, and shalt call his name JESUS.

32 He shall be great, and shall be called the Son of the Highest: and the Lord God shall give unto him the throne of his father David:

33 And he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end.

34 Then said Mary unto the angel, How shall this be, seeing I know not a man?

35 And the angel answered and said unto her, The Holy Ghost shall come upon thee, and the power of the Highest shall overshadow thee: therefore also that holy thing which shall be born of thee shall be called the Son of God.

36 And, behold, thy cousin Elisabeth, she hath also conceived a son in her old age: and this is the sixth month with her, who was called barren.

37 For with God nothing shall be impossible.

38 And Mary said, Behold the handmaid of the Lord; be it unto me according to thy word. And the angel departed from her.`},
      {text: `6 For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.`},
      {text: `30 And the angel said unto her, Fear not, Mary: for thou hast found favour with God.

31 And, behold, thou shalt conceive in thy womb, and bring forth a son, and shalt call his name JESUS.

32 He shall be great, and shall be called the Son of the Highest: and the Lord God shall give unto him the throne of his father David:

33 And he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end.

34 Then said Mary unto the angel, How shall this be, seeing I know not a man?

35 And the angel answered and said unto her, The Holy Ghost shall come upon thee, and the power of the Highest shall overshadow thee: therefore also that holy thing which shall be born of thee shall be called the Son of God.

36 And, behold, thy cousin Elisabeth, she hath also conceived a son in her old age: and this is the sixth month with her, who was called barren.

37 For with God nothing shall be impossible.

38 And Mary said, Behold the handmaid of the Lord; be it unto me according to thy word. And the angel departed from her.`},
      {text: `26 And we talk of Christ, we rejoice in Christ, we preach of Christ, we prophesy of Christ, and we write according to our prophecies, that our children may know to what source they may look for a remission of their sins.`},
      {text: `3 And said, Verily I say unto you, Except ye be converted, and become as little children, ye shall not enter into the kingdom of heaven.`},
      {text: `39 He that findeth his life shall lose it: and he that loseth his life for my sake shall find it.`},
      {text: `38 Saying, Blessed be the King that cometh in the name of the Lord: peace in heaven, and glory in the highest.`},
      {text: `18 I will not leave you comfortless: I will come to you.`},
      {text: `12 So after he had washed their feet, and had taken his garments, and was set down again, he said unto them, Know ye what I have done to you?

13 Ye call me Master and Lord: and ye say well; for so I am.

14 If I then, your Lord and Master, have washed your feet; ye also ought to wash one another’s feet.

15 For I have given you an example, that ye should do as I have done to you.

16 Verily, verily, I say unto you, The servant is not greater than his lord; neither he that is sent greater than he that sent him.`},
      {text: `5 But he was wounded for our transgressions, he was bruised for our iniquities; the chastisement of our peace was upon him; and with his stripes we are healed.`},
      {text: `11 But he that believeth these things which I have spoken, him will I visit with the manifestations of my Spirit, and he shall know and bear record. For because of my Spirit he shall know that these things are true; for it persuadeth men to do good.

12 And whatsoever thing persuadeth men to do good is of me; for good cometh of none save it be of me. I am the same that leadeth men to all good; he that will not believe my words will not believe me—that I am; and he that will not believe me will not believe the Father who sent me. For behold, I am the Father, I am the light, and the life, and the truth of the world.`},
      {text: `20 And, behold, thou shalt be dumb, and not able to speak, until the day that these things shall be performed, because thou believest not my words, which shall be fulfilled in their season.

21 And the people waited for Zacharias, and marvelled that he tarried so long in the temple.`},
  ];


  stories = [
      {story: `I was a student at BYU just finishing my first year of graduate work when our first child, a son, was born. We were very poor, though not so poor as Joseph and Mary. My wife and I were both going to school, both holding jobs, and in addition worked as head residents in an off-campus apartment complex to help defray our rent. We drove a little Volkswagen, which had a half-dead battery because we couldn't afford a new one. (Volkswagen or battery)
Nevertheless, when I realized that our own night of nights was coming, I believe I would have done any honorable thing in this world, and mortgaged any future I had, to make sure my wife had the clean sheets, the sterile utensils, the attentive nurses, and the skilled doctors who brought forth our firstborn son. If she or that child had needed special care at the Mayo Clinic, I believe I would have ransomed my very life to get it.
I have compared those feelings (which I have had with each succeeding child) with what Joseph must have felt as he moved through the streets of a city not his own, with not a friend or kinsman in sight, nor anyone willing to extend a helping hand. In these last and most painful hours of her "confinement," Mary had ridden or walked approximately 100 miles from Nazareth in Galilee to Bethlehem in Judea. Surely Joseph must have wept at her silent courage. Now, alone and unnoticed, they had to descend from human company to a stable, a grotto full of animals, there to bring forth the Son of God.
I wonder what emotions Joseph might have had as he cleared away the dung and debris. I wonder if he felt the sting of tears as he hurriedly tried to find the cleanest straw and hold the animals back. I wonder if he wondered: "Could there be a more unhealthy, a more disease- ridden, a more despicable circumstance in which a child could be born? Is this a place fit for a king? Should the mother of the Son of God be asked to enter the valley of the shadow of death in such a foul and unfamiliar place as this? Is it wrong to wish her some comfort? Is it right He should be born here?''
But I am certain Joseph did not mutter and Mary did not wail. They knew a great deal and did the best they could.
Perhaps these parents knew even then that in the beginning of his mortal life, as well as in the end, this baby son born to them would have to descend beneath every human pain and disappointment. He would do so to help those who also felt they had been born without advantage.
I've thought of Mary, too, this most favored mortal woman in the history of the world, who as a mere child received an angel who uttered to her those words that would change the course not only of her own life but also that of all human history: "Hail, thou virgin, who art highly
favored of the Lord. The Lord is with thee; for thou art chosen among women." The nature of her spirit and the depth of her preparation were revealed in a response that shows both innocence and maturity: "Behold the handmaid of the Lord; be it unto me according to thy word."
I have wondered if this young woman, something of a child herself, here bearing her first baby, might have wished her mother, or an aunt, or her sister, or a friend to be near her through the labor. Surely the birth of such a son as this should command the aid and attention of every midwife in Judea! We all might wish that someone could have held her hand, cooled her brow, and when the ordeal was over, given her rest in crisp, cool linen.
But it was not to be so. With only Joseph's inexperienced assistance, she herself brought forth her firstborn son, wrapped him in the little clothes she had knowingly brought on her journey, and perhaps laid him on a pillow of hay. Then on both sides of the veil a heavenly host broke into song. "Glory to God in the highest," they sang, "and on earth, peace among men of good will."
But except for heavenly witnesses, these three were alone: Joseph, Mary, and baby to be named Jesus.
At this focal point of all human history, a point illuminated by a new star in the heavens revealed for just such a purpose, probably no other mortal watched - none but a poor young carpenter, a beautiful virgin mother, and silent stabled animals who had not the power to utter the sacredness they had seen.
Shepherds would soon arrive and later, wise men from the East. Later yet the memory of that night would bring Santa Claus and Frosty and Rudolph – and all would be welcome. But first and forever there was just a little family, without toys or trees of tinsel. With a baby- that's how Christmas began.`},
      {story: `This is a beautiful time of year. We love the excitement, the giving spirit, the special awareness of and appreciation for family and friends, the feeling of love and brotherhood that bless our gatherings at Christmas time.
In all of the joyousness, it is well to reflect that Christmas comes at three levels.
Let's call the first, the Santa Claus level. It's the level of Christmas trees and holly, of whispered secrets and colorful packages, of candlelight and rich food and warm open houses. It's carolers in the shopping malls, excited children and weary but loving parents. It's a level at which we eat too much and spend too much, and do too much - and enjoy every minute of it. We love the Santa Claus level of Christmas.
But there's a higher, more beautiful level. Let's call it the Silent Night level. It's the level of all our glorious Christmas carols, of that beloved, familiar story. "''Now in those days there went out a decree from Caesar Augustus ... " It's the level of the crowded inn and the silent Holy moment in a dark stable when the Son of Man came to earth. It's shepherds on steep, bare hills near Bethlehem, angels with their glad tidings, a new star in the East, wise men traveling far in search of the Holy One. How beautiful and meaningful it is, how infinitely poorer we would be without this second level of Christmas.
The trouble is these two levels don't last. They can't.
Twelve days of Christmas, at the first level, is about all most of us can stand. It's too intense, too extravagant. The tree dries out and the needles fall. The candles burn down. The beautiful wrappings go out with the trash, the carolers are up on the ski slopes, the toys break, and the biggest day in the store in the entire year is exchange day, December 26. The feast is over and the dieting begins. But the lonely and the hungry are with us still, perhaps lonelier and hungrier than before.
Lovely and joyous as the first level of Christmas is, there will come a
day, very soon when Mother will put away the decorations and
vacuum the living room and think, "Thank goodness that's over
for another year..."
Even the second level, the level of Baby Jesus can't last. How
many times this season can you sing "Silent Night"? The
angels and the star and the shepherd, even the silent sacred
mystery of that holy night itself can't long satisfy humanity's
basic need. The man who keeps Christ in the manger will,
in the end, be disappointed and empty.
No, for Christmas to last all year long, for it to grow in
beauty and meaning and purpose, for it to have the
power to change lives, we must celebrate it at the third
level, that of the adult Christ. It is at this level- not as an
infant- that our Savior brings His gifts of lasting joy, lasting
peace, lasting hope. It was the adult Christ who reached out
            
and touched the untouchable, who loved the unlovable, who so loved us all that even in His agony on the cross He prayed for forgiveness of His enemies.
This is the Christ, creator of worlds without number, who wept, Enoch tells us, because so many of us lack affection and hate each other – and then who willingly gave His life for all of us; including those, for who He wept.
This is the Christ, the adult Christ, who gave us the perfect example, and asked us to follow Him. Accepting that invitation is the way – the only way - to celebrate Christmas all year and all life long.
Church News Viewpoint December 15, 1985`},
      {story: `Far away on a hillside grew a forest of trees - little and big, old and young, tall and small. The trees were very happy with life just as it was on the hillside. They loved the warm sunlight of summer, spring’s cool silvery rains, the gorgeous red and golds of autumn and winter’s blanket of glistening snow. But sometimes, too, they spoke of the future, of the things they would like to do and be when they grew up. In this forest there was a mother tree and her three children. One said, “You know, I should like to be a baby’s cradle. I have seen people come into this forest carrying babies in their arms. I think a baby is the sweetest thing I have ever seen and I should like to be made into a baby’s bed.” The second tree spoke. “That would not please me at all. I want to be something important. I should like to cross many waters and carry cargoes of gold.” The third tree stood off by himself; apparently in deep reflections, but did not speak. “And what would you like to be?” asked the mother tree. “Have you no dream for the future?” “No dream,” he answered, “except to point men to God. What could a tree do better than that?”
Years passed and the three little trees grew up to be beautiful tall trees. One day men came to the forest and cut down the first tree.
“I wonder whether I shall be made into a baby’s cradle now? I hope so. I have waited so long,” he whispered. But the little tree was not made into a cradle. Instead, it was cut into rough pieces and carelessly put together to form a manger in Bethlehem. He was heartbroken. “I do not like this at all,” he wailed. “This is not what I planned to be – shoved into this dark stable with no one to see me but the cattle.”
But God; who loved the little trees, whispered, "Wait, I will show you something.” For there were in the same country, shepherds abiding in the field, keeping watch over their flocks by night. And lo, the angel of the Lord came upon them, and the glory of the Lord shone round about them and they were sore afraid. And the angel said unto them, "Fear not: for behold; I bring you good tidings of great joy, which shall be to all people, For unto you is born this day in the city of David a Savior, which is Christ the Lord. And this shall be a sign unto you: ye shall find the babe wrapped in swaddling clothes, lying in a manger.” And suddenly there was with the angel a multitude of the heavenly host praising God, and saying, “Glory to God in the highest, and on
 earth peace, good will toward men.” And it came to pass, as the angels were gone away from them into heaven, the shepherds said one to another, Let us now go even unto Bethlehem, and see this thing which is come to pass, which the Lord hath made known unto us.
In the stillness of the night, God had laid there His own little baby, the Son of God. The manger quivered with delight. “Oh, this is wonderful,” he whispered. “In all my dreams I never thought to hold a baby like this. This is better than all my planning. Why, I am part of a miracle.” And out on the hillside the trees of the forest clapped their hands because their brother, the little manger, had seen his wish come true.
Years passed by, and men came to the forest to cut down the second tree. “I wonder whether I shall be made into a great vessel now,” this one thought. “I have waited so long. Now perhaps I shall do great things of which I have dreamed.” But, the little tree did not do great things. He was not made into a great ship to cross the ocean, but instead he became a tiny fishing boat, owned by a simple fisherman named Peter. “To think that my life has come to this,” he said. “Just a fishing boat. And Peter is only a fisherman.” But God who loves the little trees said, “Wait, I will show you something.” And He did.
Far out from the crowds came a person, called Jesus, who entered into the little boat and sat down and taught the people. He spoke of such wisdom, beauty, and light that the multitude and even that little boat listened eagerly. “This is wonderful,” he whispered. “In all my dreams I never thought to carry a cargo like this. Why, I am part of a miracle. Jesus came to the earth to teach
all the people the way to live. This is better than all of my planning.” And out on the hillside all the trees of the forest clapped their hands because their brother, the little boat, had seen his wish come true.
Months went by, and men came to the forest and cut down the third tree, the one that wanted just to stand on the hill and point the way to God. He was most unhappy as the axe cut into his heart. “I don’t want to go to the valley,” he thought. “Why couldn’t they leave me alone?” But the men did not leave the little tree alone. They tore away his branches and they cut into his bark in the form of a cross. The little tree quivered through all its being. “This is terrible,” he whispered. “They are going to hang someone. Oh, I never wanted this to happen to me. I only wanted to point men to God. This is awful.” But God, who loves the little trees, said, “Wait, I will show you something,” and He did.
For one day, outside Jerusalem, a great multitude gathered. They had come to hang Jesus upon the cross. The sky became dark, and a storm came upon the land; there was wind and lightening. Earthquakes frightened the people. Some knew that a great mistake had been made. One Roman soldier, standing near the cross said, “Truly this was the Son of God.”
The body of Jesus was taken off the cross and carefully laid in a tomb. There was much sadness because of His great suffering. Then, a miracle happened: three days after, Jesus who had been

 dead, came to life again. He looked the same, yet he was different. Jesus had returned as a resurrected being, and He could never die again. He would live forever. And the cross began to understand. “This is wonderful,” he whispered. “I am part of a miracle. Jesus’s greatest mission was to give his life so that all who have ever lived on this earth can someday return to God and live with Him again. In all of my dreams I never thought to point men to God in this way. This is better than all of my planning.”
At this Christmas time, it is good for all of us to stop and think of that which Jesus has done for us. We can remember that Jesus, the Son of God, was sent as a gift to each one of us to teach us the way to live. We can study and learn the teachings of Jesus and keep His commandments and live as we should, then we, too, can live again with our Heavenly Father and Jesus and with our parents and family forever.
This is the Miracle of Christmas!`},
      {story: `Santa Whispered ...
Teach the children the true meaning of Christmas
The Star - A heavenly sign of prophecy fulfilled long ages ago; the shining hope of all mankind.
Red - The first color of Christmas symbolizing the Savior's sacrifice of all.
Fir Tree - Evergreen - The second color of Christmas shows everlasting life - the needles point heaven ward.
The Bell - Rings out to guide Lost sheep back to the fold; signifying that all are precious in the eyes of the Lord.
The Candle - A mirror of starlight reflecting our thanks for the star of Bethlehem. Gift Bow - Tied as we all should be tied together in bonds of goodwill forever. Candy Cane - The Shepherd's crook used to bring Lambs back to the fold, a reminder that we are all our brother's keeper.
The Wreath - A symbol of the never ending, eternal nature of Love, having no beginning and no end.
Please ... Teach the children.`},
      {story: `The decorations are beautiful, and it's fun to give and receive presents, but. ..
You will recall from Dr. Suess's holiday "horror" story, How the Grinch Stole
Christmas that the devilish Grinch determined to rob Who-ville of every
holiday treat. In a nefarious scheme in which the Grinch dressed as Santa
himself, he moved through Who-ville taking every package, tree, ornament and stocking.
He stared down at Who-ville!
The Grinch popped his eyes!
Then he shook!
What he saw was a shocking surprise.
Every Who down in Who-ville, the tall and the small, Was singing! Without any presents at all
He HADN'T stopped Christmas for coming!
IT CAME!
Somehow or other, it came just the same!
And the Grinch, with his grinch-feet ice-cold in the snow Stood puzzling and puzzling: "How could it be so?"
"It came without packages, boxes or bags!"
And he puzzled three hours, till his puzzler was sore.
Then the Grinch thought of something he hadn't before!
"Maybe Christmas perhaps means a little bit more!"
(Dr. Suess, How the Grinch Stole Christmas, New York: Random House,1957.)
Part of the purpose for telling the story of Christmas is to remind us that Christmas doesn't come from a store. Indeed, however delightful we feel about it, even as children, each year it "means a little bit more." And no matter how many times we read the biblical account of that evening in Bethlehem, we always come away with a thought - or two - we haven't had before.
I do not feel - or mean this to sound - like a modern-day Scrooge. The gold, frankincense, and myrrh were humbly given and appreciatively received, and so they should be, every year and always. As my wife and children can testify, no one gets more giddy about the giving and receiving of presents than I do.
But for that very reason, I, like you, need to remember the very plain scene, even the poverty, of a night devoid of tinsel or wrapping or goods of this world. Only when we see that sacred, unadorned child of our devotion – the Babe of Bethlehem - will we know why "tis the season to be jolly" and why the giving of gifts is so appropriate.
At the focal point of all human history, a point illuminated by a new star in the heavens revealed for just such a purpose, probably no other mortal watched- none but a poor young carpenter, a
                                                                                 
                                                 beautiful virgin mother, and silent stabled animals who had
not the power to utter the sacredness they had seen. Shepherds
would soon arrive and later, wise men from the East. Later yet
the memory of that night would bring Santa Claus and Frost
and Rudolph - and all would be welcome. But first and
forever there was just a little family, without toys or trees
or tinsel. With a baby - that's how Christmas began.
It is for this baby that we shout in chorus. "Hark! The
herald angels sing Glory to the newborn King! Mild he
lays his glory by, Born that man no more may die; Born to
raise the sons of earth, Born to give them second birth." (Hymns, 209)
Perhaps recalling the circumstances of that gift, of his birth, of his own
childhood, perhaps remembering that purity and faith and genuine
humility will be required of every celestial soul. Jesus must have said many
times as he looked into the little eyes that loved him (eyes that always best
saw what and who he really was), "Except ye be converted, and become as little children, ye shall not enter into the kingdom of heaven." (Matthew 18:3)
Christmas, then is for children - of all ages.`},
      {story: `We should strive to give as Jesus gave. Giving of oneself is a holy gift. This Christmas, mend a quarrel. Seek out a forgotten friend. Dismiss suspicion and replace it with trust. Write a letter. Give a soft answer. Encourage youth. Manifest your loyalty in word and deed. Keep a promise. Forgo a grudge. Forgive an enemy. Apologize. Try to understand. Examine your demands on others. Think first of someone else. Be kind. Be gentle. Laugh a little more. Express your gratitude. Welcome a stranger. Gladden the heart of a child. Take pleasure in the beauty of the earth. Speak your love and then speak it again. Christmas
is a celebration. There is no celebration that compares with the realization of its true meaning - - with the sudden stirring of the heart that has extended itself unselfishly in the things that matter most. Peace can only come through living the principles of the gospel and by following the program of the Prince of Peace. May we find our spiritual thirst quenched by the living water of the Savior. May He become our focal point at this Christmas season,
and always."
Howard W. Hunter December, 1994`},
      {story: `A long time ago in a land far away
A child was born on a cold winter's day
He wasn't the baby you're thinking about
But another small lad; he stood short and stout.
He grew up to be quite a caring old man
He loved little children, every one in the land.
He found the "Good Book" and studied its pages
It was the story of Jesus passed down through the ages.
His heart overflowed as he read. Could it be?
A love so divine that he died just for me?
A twinkle appeared in his eye on that day
He found a road straight to Heaven and Christ was the way ..
As Christmas came close, his heart fllled with joy
He'd show God's people he loved them - every girl, every boy He made lots of goodies and stocked up his shelves
Yes, Santa was busy and so were his elves.
He was fllled with such love, that he wanted to share So he handed out gifts to kids everywhere
Praise be to God. Let the angels sing
For this jolly old man spreads love for the King.
As he steps into the chimney, he looks high above And whispers, "Happy Birthday dear Jesus.
From Santa, with love."
Michelle Davis 1987`},
      {story: `If I trust in God to guide me He will gently lead
If I bid him walk beside me He my soul will feed
If I plead for hope and courage He will hear my prayer
If I call Him in my weakness
He will always hear
If I put my trust in Jesus
His true lamb I'll be
As a Shepherd seeks lost ones He'll watch over me
If I’m feeling sad or lonely
He will understand
He will heal my heart to hear it He will comfort me
If I hear and heed His promptings I'll not go astray
With a still, small voice of wisdom He will show the way
I will ever praise the Father
Trust in Jesus Christ
I will let the Holy Spirit
Guide me through my life.`},
      {story: `And He rose from supper,
Poured water in a basin,
And washed the disciple's feet.
Those hands, hardened by the heat
Of a desert sun, comfortable with cutting trees And turning them to tables in Joseph's shop - Those hands that with a wave could stop
The troubled sea, could touch a leper clean, Or triumphantly turn death away
From the loved daughter on Jairus' cough Those hands that could gesture
The heavens open -
Poured water in a basin,
And washed the disciple's feet.
The lesson lay unlearned.
But to a few -
Who trust the Paradox
And hear the call:
He who would be chief among you
Let Him be the servant of all.`},
      {story: `It was a ministry to the beaten, bewildered people of Judah. When they were sick, He healed them; when they wept, He comforted them; when they were hungry, He fed them; when others forgot, He remembered. He was a lonely man seeking the lonely; a man of sorrows and acquainted with grief – yet His sorrows were those of others and His grief not of His own making. The humble loved Him, but many among the influential despised Him. Sadducees and Pharisees called Him a glutton, a wine-bibber, a friend of harlots. Such epithets left Him trembling in spirit. Once, while the city slept, He walked alone through Jerusalem’s empty street and out the eastern gate to the garden. There, above the moon-drenched city, He cried out, "0 Jerusalem, Jerusalem, thou that killest the prophets, and stonest them which are sent unto thee, how often would I have gathered the children together, even as a hen gathereth her chickens under her wings, and he would now!" (Matthew 23:37)
It began on a Thursday night in April, Jesus had returned to the city for that last time after a farewell supper with those who knew and loved Him best; He had led them to Gethsemane. There, in the garden, Jesus laid bare. His very soul in such anguish as only a God could endure. Others may think of Calvary as His place of atonement, but I think of Gethsemane, too.
In the morning, following His arrest, Jesus was brought before the high priest and the Jewish Sanhedrin for trial. He listened to the lies of false witnesses, felt the slap of hands upon His face, and heard the sentence of death for claiming to be the Son of God. He said nothing. Nor did He speak a defense before the Roman governor, Pontius Pilate. Even the fury of His own people shouting, "Crucify Him, Crucify Him" failed to break His silence. The ministry of words was over; only the ministry of blood remained.
As the sun reached its zenith at noon, the whipped, bleeding body of Jesus was being nailed to a cross like those He may have seen in Sepphoris as a child many years before. The hours dragged by in an agony of mockery and tears.
Mary stood by the cross. The sky grew dark. It was three o'clock.... and Jesus, with a mask of inexpressible weariness upon His face, lifted His eyes to His Father's eyes and whispered, "Father, into thy hands I commend my spirit." (Luke. 23:46)
How do you remember Him?`},
      {story: `One,
One by one, everyone,
One by one we came
To look upon our Lord
And feast upon His word, One by one.
One,
One by one, everyone,
One by one, we came:
The halt, the blind, the lame He healed us in His name, One by one.
He spoke what no tongue can speak; What ear hath not heard before.
We saw what no eyes hath seen; The joys of eternity!
Then he blessed out little ones, And we were overcome, Everyone.
Alleluia, Alleluia
O Gloria.
One,
One by one, everyone, One by one we came To look upon our Lord.`},
      {story: `Child in the manger
Infant of Mary
Outcast and Stranger, Lord of all Child who inherits
All our transgressions
All our demerits on him fall
Once the most holy
Child of salvation
Gently and lowly
Now as our glorious mighty redeemer See him victorious
0' er each foe
Prophets foretold him
Infant of wonder
Angels behold him on his throne Worthy our Savior
Of all our praises
Happy Forever are his own
Lyrics from a song performed By Michael W. Smith
Excerpts from The Christmas Scene
Neal A. Maxwell
...The declaratory focus of the first Christmas was on "a Savior is born.'' What greater tidings could there be than those "good tidings of great joy"? No wonder the reverential exclamation praising our planning and loving Father - indeed, "Glory to God In the highest''!
"Come, let us adore Him," Jesus Christ. The ultimate form
of adoration of Him is emulation! Come, let us glorify God with our daily lives!
Like the wise men from the east, we too must travel a great distance in order to come untoChrist, the Light of the World. No matter - He waits for us "with open arms" (Mormon 6:17).
            
 May Christmas cause us deeper contemplation and deeper determination to complete that journey, the journey of journeys - in order to experience that resplendent rendezvous. What counsel then comes to us out of that Bethlehem chapter to help us be worthy and effective participants in the further unfolding chapters?
1. We should be like that star - in our proper orbit and place, on time, putting our talents to work, doing what we have been asked to do. God has placed us in our proper human orbits with the same precision he used as He placed that star in a certain trajectory ages before it shone brightly that special night. Like that star, we too must reflect the glory of God and not seek to shine for our own sakes. Illuminated individuals should remember that "a candle is not lighted for itself, and neither is a man" (George McDonald, Life Essential, 79).
2. We should emulate the shepherds who "made known abroad" all that which was told them. And we have been told so much more! We too must be willing to leave off other tasks in order to declare the glad and good tidings of Christ's gospel and Church fully restored. The scriptures say the shepherds "came with haste.'' Their lengthening of their stride Is a sermon in itself.
3. We can be like the wise men and notice the signs in the midst of an unnoticing world and seek the Savior - refusing, as did the wise men, to be used improperly by earthly rulers, yet giving freely of our gifts and talents and time, for these are the real gold, frankincense, and myrrh of our lives.
4. Let us do what Is right even when misunderstood, just as Joseph did, and endure the doubts and even the derision of others who simply do not understand what divine purposes are under way.
5. We should, as did John the Baptist while yet a babe in Elisabeth's womb, leap in anticipation and acknowledgment of the impending Christ. We too need a sense of history and of our place in preparing the way for His coming.
6. Like our fellow members of the ancient Church on the American Hemisphere, we ought to be willing to trust (even up to the last moment) in the fulfillment of prophecy. These Saints trusted in Samuel's prophecy about the Savior's birth (Helaman 14:3-5) even when their lives were forfeit (3 Nephi 1:8-9).
7. We will need to be like Mary and keep somethings in our hearts and ponder them trustingly, for we too know more than we can tell. And should we, like the Christ child, need to spend a season in an Egypt of patient preparation and waiting, so be it!
8. We should avoid being deeply disappointed or surprised when the modern innkeepers or the establishments of the world have no room for Christ's servants or
cannot "give place for a portion'' of Christ's word (Alma 32:27). For us too, better a spiritual manger than a stay in those secular inns
of the intellect which are so exclusionary of spiritual things.
9. Let us not be surprised, either, if the Herods of today are
no more humane than the one of the Christ child's day, especially when they think their kingdoms are to be threatened by the kingdom of God. Let us be wise as serpents and harmless as doves as we are confronted with the modern counterparts of that wily Herod who asked the
wise men to return to him to tell him where the Babe was so that he too could come to "worship.'' It is better to be rejected than "taken in" by those who would use us to hurt God's work.
Yes, the larger Christmas story is clearly not over. It is not
solely about some other time, some other place, and some other
            
people. It is still unfolding, and we are in it!
Like the wise men who persisted to Bethlehem, let us not turn back from our full journey - beyond Bethlehem - and we too shall be led to Him.
So, in gospel gladness, we wish for ourselves and each other not only a "Merry Christmas" with all that implies, and not just a "Happy New Year," but also the joys and happiness of eternal life, God's greatest gift!`},
        ];

  constructor() { }
}
