document.addEventListener("DOMContentLoaded", function() {
    const languageSwitchers = document.querySelectorAll("#languageSwitcher1, #languageSwitcher2");
    const selects = document.querySelectorAll("header select");
    const svgFirst = document.querySelector("header div.select svg:nth-of-type(1)");
    const svgLast = document.querySelector("header div.select svg:last-of-type");


    const translations = {
        english: {
            signInBtn: "Sign In",
            heading1: "Unlimited movies, TV shows, and more",
            paragraph: "Watch anywhere. Cancel anytime.",
            ctatext: "Ready to watch? Enter your email to create or restart your membership.",
            placeholder: "Email address",
            button: "Get Started",
            s1h1: "Enjoy on your TV",
            s1p1: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            s2h2: "Download your shows to watch offline",
            s2p2: "Save your favorites easily and always have something to watch.",
            span: "Downloading...",
            s3h3: "Watch everywhere",
            s3p3: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            s4h4: "Create profiles for kids",
            s4p4: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
            languageImageSrc: "https://occ-0-7332-3466.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55",
            faqh1: "Frequently Asked Questions",
            q1: "What is Netflix?",
            q2: "How much does Netflix cost?",
            q3: "Where can I watch?",
            q4: "How do I cancel?",
            q5: "What can I watch on Netflix?",
            q6: "Is Netflix good for kids?",
            answer1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            space1 : "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
            answer2: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 119.99 TLto 229.99 TL a month. No extra costs, no contracts.",
            answer3: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
            space3: "You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
            answer4: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
            answer5: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want,anytime you want.",
            answer6: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
            space6: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
            ctatext2: "Ready to watch? Enter your email to create or restart your membership.",
            placeholder2: "Email address",
            button2: "Get Started",
            contact: "Questions? Contact us.",
            a1: "FAQ",
            a2: "Help Center",
            a3: "Account",
            a4: "Media Center",
            a5: "Investor Relations",
            a6: "Jobs",
            a7: "Redeem Gift Cards",
            a8: "Ways to Watch",
            a9: "Terms of Use",
            a10: "Privacy",
            a11: "Cookie Preferences",
            a12: "Corporate Information",
            a13: "Contact Us",
            a14: "Speed Test",
            a15: "Legal Notices",
            a16: "Only on Netflix",
        },
        turkish: {
            signInBtn: "Oturum Aç",
            heading1: "Sınırsız film, dizi ve çok daha fazlası",
            paragraph: "İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.",
            ctatext: "İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi girmek.",
            placeholder: "E-posta adresi",
            button: "Başlayın",
            s1h1: "Televizyonunuzda izleyin",
            s1p1: "Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.",
            s2h2: "Çevrimdışı izlemek için içerikleri indirin",
            s2p2: "En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun.",
            span: "İndiriliyor...",
            s3h3: "İstediğiniz her yerde izleyin",
            s3p3: "Telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin.",
            s4h4: "Çocuklarınız için profiller oluşturun",
            s4p4: "Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde çocuklarınız, sadece onlara özel bir alanda en sevdikleri karakterlerle maceralara atılabilir.",
            languageImageSrc: "https://occ-0-7332-784.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABf9FUgiWN4GTIJexNEV8ZW_SPzGYmxKo7TaBfIoriNNfn85AMMEcvM61PwQ-NhPzGXz2qu53lDDcCuf0rH9FWOYBpvhUc2dQxIAQ.png?r=533",
            faqh1: "Sıkça Sorulan Sorular",
            q1: "Netflix nedir?",
            q2: "Netflix'in maliyeti nedir?",
            q3: "Nerede izleyebilirim?",
            q4: "Nasıl iptal ederim?",
            q5: "Netflix'te ne izleyebilirim?",
            q6: "Netflix çocuklar için uygun mudur?",
            answer1: "Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir streaming hizmetidir.",
            space1: "Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!",
            answer2: "Netflix'i akıllı telefonunuz, tabletiniz,Akıllı TV'niz, dizüstü bilgisayarınız veya yayın cihazınızda sabit bir aylık ücretle izleyin.Aylık plan ücretleri 149,99 TL ile 299,99 TL arasında değişmektedir.Ekstra maliyet yok, sözleşme yok.",
            answer3: "İstediğiniz yerde, istediğiniz zaman izleyin. Bilgisayarınızda netflix.com adresinden veya akıllı TV'ler, akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları dâhil Netflix uygulamasını sunan, internet bağlantılı herhangi bir cihazda anında izlemek için Netflix hesabınızla oturum açın.",
            space3: "Favori içeriklerinizi iOS veya Android uygulamasıyla da indirebilirsiniz. Seyahatteyken ve internet bağlantısı olmadan izlemek için indirilenleri kullanın. Netflix'i her yere beraberinizde götürün.",
            answer4: "Netflix esnektir. Sinir bozucu hiçbir sözleşme ve taahhüt yoktur. Hesabınızı çevrimiçi olarak iki tıklamayla kolayca iptal edebilirsiniz. İptal ücreti yoktur - hesabınızı istediğiniz zaman başlatın veya durdurun.",
            answer5: "Netflix, uzun metrajlı filmler, belgeseller, diziler ve programlar, anime, ödüllü Netflix orijinal içerikleri ve daha fazlasından oluşan kapsamlı bir kütüphaneye sahiptir. İstediğiniz her zaman, istediğiniz kadar çok şey izleyin.",
            answer6: "Üyeliğinize dâhil olan Netflix Çocuk deneyimi, çocukların ailece izlenebilecek dizi ve filmleri kendilerine özel bir alanda izlemelerini sağlarken kontrolü ebeveynlere verir.",
            space6: "Çocuk profillerinde bulunan PIN korumalı ebeveyn kontrolleri sayesinde, çocukların izleyebileceği içeriklerin yetişkinlik düzeylerini kısıtlayabilir ve onların görmesini istemediğiniz belirli içerikleri engelleyebilirsiniz.",
            ctatext2: "İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi girmek.",
            placeholder2: "E-posta adresi",
            button2: "Başlayın",
            contact: "Sorularınız mı var?Bizi arayın",
            a1: "SSS",
            a2: "Yardım Merkezi",
            a3: "Hesap",
            a4: "Medya Merkezi",
            a5: "Yatırımcı İlişkileri",
            a6: "İş İmkanları",
            a7: "Hediye Kartı Kullan",
            a8: "İzleme Yolları",
            a9: "Kullanım Koşulları",
            a10: "Gizlilik",
            a11: "Çerez Tercihleri",
            a12: "Kurumsal Bilgiler",
            a13: "Bize Ulaşın",
            a14: "Hız Testi",
            a15: "Yasal Hükümler",
            a16: "Sadece Netflix'te",
        }
    };

    function updateLanguage(selectedLanguage) {
        const translation = translations[selectedLanguage];

        
        document.getElementById("signInBtn").textContent = translation.signInBtn;
        document.getElementById("heading1").textContent = translation.heading1;
        document.getElementById("paragraph").textContent = translation.paragraph;
        document.getElementById("ctatext").textContent = translation.ctatext;
        document.getElementById("placeholder").textContent = translation.placeholder;
        document.getElementById("button").textContent = translation.button;

        document.getElementById("s1h1").textContent = translation.s1h1;
        document.getElementById("s1p1").textContent = translation.s1p1;
        document.getElementById("s2h2").textContent = translation.s2h2;
        document.getElementById("s2p2").textContent = translation.s2p2;
        document.getElementById("span").textContent = translation.span;
        document.getElementById("s3h3").textContent = translation.s3h3;
        document.getElementById("s3p3").textContent = translation.s3p3;
        document.getElementById("s4h4").textContent = translation.s4h4;
        document.getElementById("s4p4").textContent = translation.s4p4;
        document.getElementById("languageImage").src = translation.languageImageSrc;

        document.getElementById("faqh1").textContent = translation.faqh1;
        document.getElementById("question1").textContent = translation.q1;
        document.getElementById("question2").textContent = translation.q2;
        document.getElementById("question3").textContent = translation.q3;
        document.getElementById("question4").textContent = translation.q4;
        document.getElementById("question5").textContent = translation.q5;
        document.getElementById("question6").textContent = translation.q6;
        document.getElementById("answer1").textContent = translation.answer1;
        document.getElementById("space1").textContent = translation.space1;
        document.getElementById("answer2").textContent = translation.answer2;
        document.getElementById("answer3").textContent = translation.answer3;
        document.getElementById("space3").textContent = translation.space3;
        document.getElementById("answer4").textContent = translation.answer4;
        document.getElementById("answer5").textContent = translation.answer5;
        document.getElementById("answer6").textContent = translation.answer6;
        document.getElementById("space6").textContent = translation.space6;

        document.getElementById("ctatext2").textContent = translation.ctatext2;
        document.getElementById("placeholder2").textContent = translation.placeholder2;
        document.getElementById("button2").textContent = translation.button2;

        document.getElementById("contact").textContent = translation.contact;
        document.getElementById("a1").textContent = translation.a1;
        document.getElementById("a2").textContent = translation.a2;
        document.getElementById("a3").textContent = translation.a3;
        document.getElementById("a4").textContent = translation.a4;
        document.getElementById("a5").textContent = translation.a5;
        document.getElementById("a6").textContent = translation.a6;
        document.getElementById("a7").textContent = translation.a7;
        document.getElementById("a8").textContent = translation.a8;
        document.getElementById("a9").textContent = translation.a9;
        document.getElementById("a10").textContent = translation.a10;
        document.getElementById("a1").textContent = translation.a11;
        document.getElementById("a12").textContent = translation.a12;
        document.getElementById("a13").textContent = translation.a13;
        document.getElementById("a14").textContent = translation.a14;
        document.getElementById("a15").textContent = translation.a15;
        document.getElementById("a16").textContent = translation.a16;
        

        languageSwitchers.forEach(switcher => {
            switcher.value = selectedLanguage;
        });

        
        if (selectedLanguage === 'turkish') {
            selects.forEach(select => {
                select.style.marginLeft = '20px';
            });
            if (svgFirst) {
                svgFirst.style.marginLeft = '32px';
            }
            if (svgLast) {
                svgLast.style.right = '16.7%';
            }
        } else {
            selects.forEach(select => {
                select.style.marginLeft = '42.5px';
            });
            if (svgFirst) {
                svgFirst.style.marginLeft = '54px';
            }
            if (svgLast) {
                svgLast.style.right = '14.45%';
            }
        }
    }

    languageSwitchers.forEach(select => {
        select.addEventListener("change", function() {
            const selectedLanguage = this.value;
            updateLanguage(selectedLanguage);
        });
    });

    
    updateLanguage(languageSwitchers[0].value);

    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', function () {
            if (this.checked) {
                toggles.forEach(otherToggle => {
                    if (otherToggle !== this) {
                        otherToggle.checked = false;
                    }
                });
            }
        });
    });
});