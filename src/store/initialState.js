import faker from 'faker';

function initState() {
    /**
     * Auction rules
     * @type {*[]}
     */
    const rules = [
        {
            ruleID: 1,
            increaseRatePrice: 0.1,
            increaseRateTime: 15,
        },
        {
            ruleID: 2,
            increaseRatePrice: 0.3,
            increaseRateTime: 10,
        },
        {
            ruleID: 3,
            increaseRatePrice: 0.5,
            increaseRateTime: 5,
        }
    ]

    const generateUsers = (()=>{
        let users = [];
        for(let i=1;i< 20;i++){
            users.push({
                userID: faker.random.uuid(),
                username: faker.internet.userName(),
                account:faker.finance.amount()
            });
        }
        return users;
    })();
    const generateAuctions=(function () {
        const auctions = [];
        let imageSample = [
            'camera-1248682_640.jpg',
            'quadrocopter-1658967_640.png',
            'headphone-159569_640.png',
            'mobile-605422_640.jpg',
            'smartphone-149622_640.png',
            'lens-1933639_640.png',
            'pc-1209746_640.png',
            'ipad-605420_640.jpg'
        ];
        for (let i = 0; i < 8; i++) {
            let  lastBidder = generateUsers[Math.floor(Math.random()*generateUsers.length)];
            let regularPrice = faker.commerce.price()*1;
            let totalBid = Math.floor(Math.random() * (regularPrice/18)) + 1;
            auctions.push(
                {
                    auctionID: faker.random.uuid(),
                    image: '/img/products/' + imageSample[i],
                    title: faker.commerce.productName(),
                    desc: faker.lorem.words(),
                    endTime: new Date(faker.date.future(0.5)).getTime(),
                    regularPrice: regularPrice,
                    totalBids: totalBid,
                    lastBidder: lastBidder.userID,
                    lastBidTime: new Date().getTime(),
                    ruleID: getRandomInt(1,3)

                }
            )
        }
        return auctions;
    })()


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const state = {
        auctions: generateAuctions,
        rules: rules,
        users:generateUsers,
        cUser: null
    };
    return state;
}
export default initState;