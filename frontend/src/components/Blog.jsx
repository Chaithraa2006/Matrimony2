import React, { useState } from "react";
import "../styles/blog.css";
import Navbar from "./Navbar";

// ✅ Blog Data Array (Fixed Duplicates)
const blogPosts = [
    {
        id: 1,
        title: "Why Choose A Matrimonial Site to Find the Love of Your Life?",
        image: "images/post1.jpg.png",
        shortDescription:
            "Marriage is not a simple and straightforward process. It's rather a vital turning point in every man and woman's life...",
        fullDescription: (
            <>
                <p>
                    Marriage is not a simple and straightforward process. It's rather a
                    vital turning point in every man and woman's life. You can't be
                    careless while choosing your life companion. Remember the fact that
                    your life partner is going to be with you to guide you during your
                    successes and failures, ups & downs, and pleasures and pains. The more
                    compatible your life partner is with you, the happier your life is
                    sure to be.
                </p>
                <p>
                    In today's modern times, people have started to find the love of their
                    lives on their own. However, the falling rates of love marriages have
                    made people realize that it might not be the best technique to ensure
                    a successful married life. Consequently, they have started looking for
                    a feasible alternative and chosen Hindu Matrimony services to fulfill
                    their needs.
                </p>
                <p>
                    Now, you need not compromise with situations and people. As a
                    substitute, you can discover a life partner on your own terms. These
                    matrimonial websites are superior from marriage bureau as Hindu
                    Matrimonial Sites require you to fill in certain necessary information
                    on their registration portal and you may begin your search. Here in
                    this post, we have listed 12 reasons why you must choose a matrimonial
                    site to find your love!
                </p>
                <h4>1. Easy and Quick:</h4>
                <p>
                    The most significant advantage of working with a matrimonial website
                    is that they have a vast database of each bride and groom profiles.
                    Therefore, as a registered member, you could get access to a wide
                    variety of profiles in front of you. You just need to fill your
                    primary info to begin. They will offer you countless profiles of other
                    registered individuals meeting your companion search criteria.
                </p>
                <h4>2. Simple Registration:</h4>
                <p>
                    Registering with a matrimonial site is quite simple. You are just
                    required to update your basic facts like name, gender, age, e-mail
                    address and cell phone number to start with. To get the best matching
                    profiles, it's better to fill all minute details at the time of
                    registration. However, you may each time change your search criteria
                    if you aren't getting the desired results.
                </p>
                <h4>3. Most Secured:</h4>
                <p>
                    Most of the matrimonial websites are secure to use. Whichever facts
                    you share with them, they preserve all such information secure and
                    safe. These websites don't share your information with everybody
                    without your permission. These websites use privacy tools to shield
                    your details and ensures any members do not misuse it.
                </p>
                <h4>4. Serious Seekers:</h4>
                <p>
                    Matrimonial websites are not like dating websites. They work with a
                    serious goal of introducing you to genuine individuals who are serious
                    about their life partners. Since most of the registered users are
                    serious, it is most likely that you will find someone who matches your
                    thoughts and values.
                </p>
                <h4>5. Easily Approachable:</h4>
                <p>
                    Matrimonial sites generally help by starting a text message or video calls with
                    each other before meeting. Such chats can assist both candidates by reducing
                    the feeling of anxiety and awkwardness that couples usually feel of their first
                    meet whilst marriages are fixed with the aid of parents.
                </p>
                <h4>6.No Compromise:</h4>
                <p>
                    Another big gain of registering with these matrimonial sites is that you don't
                    need to compromise on any terms while choosing a right partner. You can seek
                    a companion that suits your need. You just have to commit some time to search
                    and be clear with what you are searching out.
                </p>
                <h4>7.Highly Affordable:</h4>
                <p>
                    Matrimony websites are highly affordable when it comes to paid subscriptions.
                    These websites offer you various cheap membership plans meeting your
                    necessities. You can even buy add-ons on a monthly or weekly basis to speed-up
                    your search process. Even with a free account, you can search for the
                    candidates; however, you might not be able to contact them.
                </p>
                <h4>8.Neutrality:</h4>
                <p>
                    One area wherein online matrimonial website win over other traditional
                    alternative is by ensuring entire neutrality. They do not have any policy to
                    exaggerate or hide any information. Of course, candidates may sometimes lie
                    about themselves in their profiles. And here is the only place where you need
                    extra attention. This aspect is also covered in detailed background verification.
                </p>
                <h4>9.Attractive Features:</h4>
                <p>
                    A surprisingly attractive feature which is a part of most of the matrimonial
                    services is the 'personalized Hindu Matchmaking services. As part of this feature,
                    you are assigned an expert supervisor, who does all of the background
                    verification on the prospective groom/bride on your behalf. They will ensure
                    that you are not compromising on any aspects.
                </p>
                <h4>11. Expert Advice:</h4>
                <p>
                    Few matrimonial websites additionally assign a supervisor or a marriage
                    consultant who takes care of your profile and contact other registered members
                    whose profiles matches your criteria on behalf of you. Additionally, they also
                    share your info with them as well as fix 1st meeting.

                </p>
                <h4>12. Open & Free Platform:</h4>

                <p>
                    Anybody can sign up with these websites regardless of their community, caste,
                    profession or religion. These websites encourage registration of all participants
                    who're in marriageable age. So, don't hesitate to register with any of those
                    websites if you are seeking out a perfect life partner. Also, these websites don't
                    charge any fee from you for creating a profile.
                    <p>
                        It is very important that you discover the most suitable life companion who will
                        share the adventurous journey of your life with all its burdens and pleasures for
                        the rest of your life. Hence, you cannot take this undertaking gently. Now you
                        can without problems find the right person in a natural way. This matrimony
                        sites offer all varieties of religious people, according to your priorities you can
                        find out your better half. It's fun to have a partner who is familiar with your
                        lifestyles. So, don't waste much time and register today to find your life partner
                        with ease.
                    </p>
                </p>
            </>
        ),
    },
    {
        id: 2,
        title: "Why Tamil Weddings Are A Must-Attend Event for Everyone",
        image: "images/post2.jpg.png",
        shortDescription:
            "Tamil weddings are culturally rich and vibrant. They offer a blend of ancient traditions and modern celebrations...",
        fullDescription: (
            <>
                <p>
                    South Indian Weddings are undeniably very different from North Indian
                    ones. And amongst South Indian cultures, the Tamil population is the
                    major group. Tamil weddings form an important part of the cultural
                    potboiler of Indian weddings. That's why, Tamil weddings are a
                    must-attend event for everyone!
                </p>
                <p>
                    Tamilians are famous for simple living and high thinking. So, one may
                    wonder what's the big hullabaloo about their wedding rituals. But
                    precisely because this group of people adheres to the simplicity of
                    age-old traditions and customs, paradoxically, Tamil weddings turn out
                    to be one of the most beautiful and lavish occasions.
                </p>
                <p>
                    Here's why you must experience this cultural extravaganza at least once in your
                    life!
                </p>
                <h4>The Colors of India</h4> <p>
                    Tamil weddings are filled with traditional and spiritual symbolism that form the
                    colorful canvas of ethnic India. The lavish colors in a Tamil wedding are a delight
                    to the eyes. In a typical Tamil marriage scene, you'll find a constant flow of bright
                    red and sunshine yellow, bold vermilion and cool saffron strewn all around and
                    send your senses into blissful dizziness. Traditionally, these colors also
                    represent purity, spirituality, and passion. The bride's sari, usually a traditional
                    Kanjeevaram and her gold jewelry will dazzle you with more colors and shine.
                    Similarly, the guests will be draped in lavish, colorful, rich silks. The rituals, the
                    décor, the people, the food, all tend to be a feast of extravagant colors that
                    mirror the rich spirit of this ancient land.
                    The Collective of Hundreds
                    <p>
                        Typically, in a Tamil wedding, a decent guest list spills over into a minimum of
                        two to three hundred guests, comprising of the extended family, distant
                        relatives, acquaintances, and friends. You can experience one of the ridiculously
                        largest wedding gatherings in all of the Indian marriage functions in Tamil
                        weddings. The guests are equally colorful, lavishly dressed, ornamented and
                        pleasantly noisy. It is a unique experience to watch such a huge gathering
                        coming together, simply to attend a ceremony and bless the newlyweds.
                    </p>
                    <h4>The Cacophony of Joy</h4>
                    <p>Only in a deeply traditional Indian wedding, a cacophony cannot sound harsh,
                        but melodious. Tamil weddings make use of a variety of ingenious sounds such
                        as the South Indian flute (shehnai), the Vedic incantations, the traditional songs,
                        and the guests chatting away in fluent native Tamil tongue. It's indeed a
                        stunning experience of sight and sound that a typical Tamil marriage scene
                        offers. One has only to allow oneself to be drowned in this busy, bustling and
                        unique sound shower.</p>
                    <h4>The Culture of Vedic Rites</h4>
                    <p>As said already, Tamil weddings strictly adhere to ageless customs and
                        traditions, and hence, they are a rich experience of ancient Indian nuances for
                        anyone attending the ceremonies. From Kala Pathrika (matching the horoscopes
                        and deciding a wedding date) to Kalyanam (the actual wedding ritual), there are
                        seemingly endless sets of lavish rituals that show us the deeply symbolic faces
                        of the culture. One may say that Tamil weddings are not as extravagant as some
                        of the Northern weddings such as the Punjabi weddings. However, the richness
                        of Vedic rituals, spiritual rites, and folklore-based norms of a Tamil wedding
                        remains incomparable. Their wedding rituals are based on some of the oldest
                        sacred rites mentioned in the ancient text of Hinduism, the Veda.</p>
                </p>
                <h4>The Courtyard at Dawn</h4>
                <p>It can be easily said that as you walk into the various settings of a Tamil wedding
                    ceremony, you start feeling as if you are walking into a royal affair filled with
                    magical moments. Tamil weddings, for starters, take place early in the morning.
                    If not for any other reason, but to experience this absolutely unique dawn-
                    kissed setting of a traditional wedding, you need to attend an authentic Tamil
                    Kalyanam. The venue is usually some original temple courtyard. This courtyard
                    is lavishly decorated with flowers, torans, and auspicious festoons. Here, the
                    bride's family hosting the wedding, decorate the 'manavarai' that is the
                    ceremonial wedding canopy, with bright colors, flowy décor, flowers, festoons,
                    Kalash (earthen pots) and Rangoli (colorful designs). As you walk into such a
                    setting in the golden light of the rising sun, the entire ambiance feels like a
                    magical and mystical hour hailing love and union of two hearts.</p>

                <h4>The Ceremony of Symbolism</h4>
                <p>The extensive wedding ceremonies start days prior to the main event with Kala
                    Pathrika rite (setting the wedding date) and Sumangali (worship of the married
                    women) where each ritual is an unparalleled experience to be a part of. Just the
                    ceremony of Pallikai Thellichal is extremely lavish and colorful, where many
                    kinds of grains mixed with curd are poured into seven earthen pots and
                    smeared with sandalwood. The pots are later immersed in the water as an
                    offering to the fishes, a symbol of auspiciousness.</p>
                <p>Sumangali Prarthanai is yet another unique ceremony to be found in Tamil
                    weddings. Women who are married and living a prosperous and harmonious
                    married life are referred to as Sumangalis, and such women in odd numbers are
                    worshipped and prayed to by the bride-to-be who then seeks their blessings for
                    a successful and harmonious conjugal life. This ceremony is again dazzling and
                    colorful as each of the Sumangalis are made to wear the traditional nine-yards
                    Madisar sari of vibrant colors.</p>
                <p>Thereafter, the sumptuous feast of authentic South Indian food is offered to
                    them on a traditional banana leaf. This rite is altogether a feast to our senses.
                    On the actual day of the marriage, first, an Aarti (fire oblation) is performed, and
                    the auspicious fruit, a coconut, is broken to usher in divine blessings and
                    protection. In the middle of the richly decorated, colorful Mandapam burns the
                    holy wedding fire, ignited and invoked as to the holy witness to the couple's
                    vows.</p>
                <p>The long and detailed rituals such as the Kanyadaan, the smearing of Sindoor
                    and the thali Kutta (tying of the thali, the Tamil equivalent of a mangalsutra) is
                    performed with great pomp, pride, and precision. Each ritual is a sight to behold
                    as a cultural symbolism to explore. The rite of Saptapadi, where the bride walks
                    seven steps rolling a rock forward with her toes, symbolizes the determination
                    with which she presses on in her marital vows to make the union successful. The
                    groom holds her toe, signifying his equal contribution to the marital bliss and
                    success.</p>
                <h4>In conclusion</h4>
                <p>Thus, altogether, the Tamil Matrimony is an unparalleled experience filled with
                    culture, customs, colors, pomp, emotions, and fun. It is such a unique canvas of
                    ethnic and ancient Indian nuances that one must attend a Tamil wedding at
                    least once in their life</p>
            </>
        ),
    },

    {
        id: 3,
        title: "Tips to Create an Impressive Matrimony Profile",
        image: "images/post3.jpg.png",
        shortDescription:
            "Creating an impressive matrimonial profile is crucial to making a great first impression. Here are some essential tips to help you create a profile that stands out...",
        fullDescription: (
            <>
                <h4>1. One Should Be Honest with the Information Provided:</h4>
                <p>
                    The profile must be honest with the details one wishes to share. Be honest when
                    you provide information about yourself as wrong information can get you an
                    expression of interest from another person, but ultimately, it is the authenticity
                    of information that helps you get the desired match.
                </p>

                <h4>2. Pictures Are the Heart of a Profile:</h4>
                <p>
                    Pictures are a must as they constitute the most important element of your profile.
                    One should upload at least two pictures, in different profiles and scenarios, in particular a new (less than one year old) clear photograph of
                    yourself, preferably a close-up. One should not upload group pictures, as they
                    naturally clicked. It should not be group pictures, and preferably, the
                    background should be your home or office as it creates a trust factor with the
                    person who is viewing it. Pictures should not form an impression that they
                    have been clicked for the sole purpose of putting them on the website. You
                    should look natural and confident.
                </p>

                <h4>3. Make Your Profile Is Adequately Detailed:</h4>
                <p>
                    The bigger the profile, the better it is. Fill in all the personal details about yourself including the
                    links to your social media profiles (Facebook, Twitter, LinkedIn etc.) as it
                    amounts to transparency and the other person can go through them to
                    know you better.
                </p>

                <h4>4. Being Specific Is a Big No:</h4>
                <p>
                    It's not that a matrimonial profile is all about
                    you. But, don't be too specific about it. For example, while creating a Gujarati
                    matrimonial profile, don't be too specific about the dietary aspects, even if you
                    are a pure vegetarian. This is because, in a matrimonial website, any other
                    person can initiate an interaction as the matrimonial profile is on a global
                    platform, and one should always be open for interaction with other people to
                    make an informed choice.
                </p>

                <h4>5. Mentioning the Family Background:</h4>
                <p>
                    This is one essential element that must
                    be included in your matrimonial profile. Matrimonial site not being a dating
                    site, should include information about your family, who all are a part of your
                    family, what they do, etc. The other person and more vitally to know a
                    little bit about the status and background you belong to. It also forms an
                    integral part of your personality at times.
                </p>

                <h4>6. No Scope of Error:</h4>
                <p>
                    The sanctity of marriage relies on truth & faith.
                    Therefore, one must be true and correct about the information provided in the
                    profile for the other person. This is because, at the time of the personal meet, it
                    can be disastrous to find out about the false information you put up on the
                    profile that includes being grammatically correct as it forms an impression on
                    the other person and being grammatically wrong won't make an impressive
                    profile.
                </p>

                <h4>7. Partner Preferences:</h4>
                <p>
                    A matrimonial profile consists of two parts - personal
                    information and partner preferences. On the one hand, while putting down the
                    personal information, be honest about it and don't oversell yourself. On the
                    other hand, while mentioning the partner preferences, don't be unreasonable
                    about it by expressing high expectations. Be balanced about it. One should be
                    sensible and subtle through with the words while mentioning them.
                </p>

                <h4>8. Get A Second Opinion About The Profile:</h4>
                <p>
                    It is always a good idea to get your
                    matrimonial profile reviewed by someone who is close to you. It can be a family
                    member or a close friend. This is because they can look at your profile from a
                    different perspective than you. They can advise you on some modifications in the
                    profile or change your personality traits which could be a positive change to the profile.
                </p>

                <h4>9. Browse Through the Profiles of Other People:</h4>
                <p>
                    It is an excellent way to make your profile impressive. One can scroll through some top profiles on the site to
                    know how they should introduce the information in a more presentable
                    manner. However, don't copy the same information or pattern out of a profile
                    as it can easily be figured out by intelligent people. Be creative and honest
                    enough to pick up suggestions for yourself to include in your profile.
                </p>

                <h4>10. Don't Lose Hope and Heart:</h4>
                <p>
                    There is always someone, somewhere who is made for you in heaven. Therefore, don't lose hope over delayed responses or
                    no matches. There will be times when your interest requests would be rejected,
                    or you won't get the desired results of your choice. Be patient and hopeful as
                    sooner or later, you shall find your soulmate who matches your preferences, and
                    you match theirs.
                </p>

                <div className="conclusion">
                    <p>
                        So, what are you waiting for? With these tips in your pocket, get cracking on
                        your matrimonial profile today!
                    </p>

                    <div className="post-meta">
                        <p>
                            This story was posted in <a href="#">Matrimonial Buzz</a> and tagged <a href="#">brides for marriage</a>, <a href="#">Indian bride</a>, <a href="#">Indian groom for marriage</a>, <a href="#">Indian Matrimony</a>, <a href="#">matrimonial site</a>, <a href="#">matrimony site</a> on <span className="date">November 13, 2018</span>
                        </p>
                    </div>

                    <div className="post-navigation">
                        <div className="prev-post">
                            <span>←</span> <a href="#">How to Keep the Love Alive in A Tamil Or Telugu Marriage?</a>
                        </div>
                        <div className="next-post">
                            <a href="#">Why Tamil Weddings Are A Must-Attend Event for Everyone</a> <span>→</span>
                        </div>
                    </div>
                </div>
            </>
        ),
    },

    {
        id: 4,
        title: "Tips to Create an Impressive Matrimony Profile",
        image: "images/post4.jpg.png",
        shortDescription:
            "Creating an impressive matrimonial profile is crucial to making a great first impression...",
        fullDescription: (
            <p>
                Creating an impressive matrimonial profile is crucial to making a great
                first impression. Highlight your interests, career, and family values
                while being honest and clear about your expectations.
            </p>
        ),
    },

    {
        id: 5,
        title: "Tips to Create an Impressive Matrimony Profile",
        image: "images/post5.jpg.png",
        shortDescription:
            "Creating an impressive matrimonial profile is crucial to making a great first impression...",
        fullDescription: (
            <p>
                Creating an impressive matrimonial profile is crucial to making a great
                first impression. Highlight your interests, career, and family values
                while being honest and clear about your expectations.
            </p>
        ),
    },
];

const BlogPost = () => {
    // ✅ State to manage expanded posts
    const [expandedPosts, setExpandedPosts] = useState({});

    // ✅ Toggle Read More / Less
    const handleToggleReadMore = (id) => {
        setExpandedPosts((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <>
            <Navbar />
            <div className="blog-container">
                {/* ✅ Main Blog Content */}
                <div className="main-content">
                    {blogPosts.map((post) => (
                        <div className="blog-post-container" key={post.id}>
                            <h2 className="post-title">{post.title}</h2>

                            {/* Social Share Buttons */}
                            <div className="social-share">
                            <div className="share-buttons">
                                    <button className="share-btn facebook">
                                        <i className="fab fa-facebook-f"></i> Share
                                    </button>
                                    <button className="share-btn twitter">
                                        <i className="fab fa-twitter"></i> Tweet
                                    </button>
                                    <button className="share-btn linkedin">
                                        <i className="fab fa-linkedin-in"></i> Share
                                    </button>
                                    <button className="share-btn pinterest">
                                        <i className="fab fa-pinterest-p"></i> Pin
                                    </button>
                                </div>
                            </div>

                            {/* Blog Image */}
                            <div className="post-image-container">
                            <img src={post.image} alt={post.title} className="post-image" />
                            </div>

                            {/* Blog Description */}
                            <div className="post-content">
                                {expandedPosts[post.id] ? (
                                    <div className="full-content">{post.fullDescription}</div>
                                ) : (
                                    <p className="short-description">{post.shortDescription}</p>
                                )}

                                {/* ✅ Toggle Button */}
                                <button
                                    className="read-more-btn"
                                    onClick={() => handleToggleReadMore(post.id)}
                                >
                                    {expandedPosts[post.id] ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ✅ Sidebar */}
                <div className="sidebar">
                    {/* Search Box */}
                    <div className="search-section">
                        <h3>Search for:</h3>
                        <div className="search-box">
                        <input type="text" placeholder="Enter keyword..." />
                            <button className="search-btn">Search</button>
                        </div>
                    </div>

                    {/* Facebook Widget */}
                    <div className="facebook-section">
                        <h3>FOLLOW US ON FACEBOOK</h3>
                    <div className="facebook-widget">
                        <iframe
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLoveVivah24x7&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                width="340"
                                height="500"
                                style={{ border: 'none', overflow: 'hidden' }}
                            scrolling="no"
                            frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                        </div>
                    </div>

                    <div className="twitter-section">
                        <h3>FOLLOW US ON TWITTER</h3>
                        <div className="twitter-widget">
                            <h4>Posts from @LoveVivah24x7</h4>
                            <p>Nothing to see here - yet</p>
              <p>When they post, their posts will show up here.</p>
                        </div>
                    </div>

                    <div className="categories-section">
                        <h3>CATEGORIES</h3>
                        <ul>
                            <li>Festivals</li>
              <li>Gifting</li>
              <li>Honeymoon</li>
                            <li>Matrimonial Buzz</li>
              <li>Media & PR</li>
              <li>Miscellaneous</li>
              <li>Relationships</li>
              <li>Uncategorized</li>
              <li>Wedding Tips</li>
                            <li>Wedding Trivia</li>
                      </ul>
                    </div>
                    
                    <div className="recent-posts-section">
                        <h3>RECENT POSTS</h3>
                        <ul>
                            <li>Why Choose A Matrimonial Site to Find the Love of Your Life?</li>
                            <li>Why Tamil Weddings Are A Must-Attend Event for Everyone</li>
                      <li>Tips to Create an Impressive Matrimony Profile</li>
                      <li>How to Keep the Love Alive in A Tamil Or Telugu Marriage?</li>
                            <li>NRI Woes When Searching for The Perfect Indian Partner</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPost;
