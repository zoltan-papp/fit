
Self executing Javascript

http://markdalgleish.com/2011/03/self-executing-anonymous-functions/
http://stackoverflow.com/questions/592396/what-is-the-purpose-of-a-self-executing-function-in-javascript
http://stackoverflow.com/questions/19491650/self-executing-function-jquery-vs-javascript-difference

OOP Javascript

http://eloquentjavascript.net/1st_edition/chapter8.html

-------------------

Bad practise rámászni a scroll eventre. Leterheled a böngészőt, és jajj :(
http://ejohn.org/blog/learning-from-twitter/


-------------------

-animated gif logo, amikor az oldal betölt. ha az lejátszódott, akkor jpg, a gradient miatt (de ezt már említettem). 
Ha ráklikkelek a logora, akkor újra lejátszódik a gif és persze a lep tetejére ugrunk
//KÉSZ


-az egész 1 oldalas lenne szoval csak lefele kell scrollozni. lefele scrollozásnál a logo és a menü a helyén marad, alatt lenne fixen egy 90px magas fehér sáv, így a menüt, 
logot mindig latnank a lap tetején. ahogy lefele scrollozunk és elérjük a köv menüpontot(pl ABOUT US után a WORKS részt), 
akkor a menuben a gradientes vonal jobbra összenyomódik (ease in, ease out). Majd a works menüpont felett ease out-tal megjelenik és végigfut a 
WORKS szöveg fölött. És így tovább (és persze fölfele scrollozásnál is happening van.
//KÉSZ


-amint látod tele van az oldal ilyen kis bizbaszokkal (kör, karika, X, félkör). ezek gyorsabban mozognak scrollozásnál, mint a tartalom. ha gyorsan 
scrollozok, akkor ezek lassabban indulnak el és ease out-tal szép lassan megállnak, pl 1-2 másodpercre rá ahogy scrolloztam. ezáltal ilyen kis 
lebegő hatásuk lesz. 60% opacity lehetne rajtuk(tratalom fölött, de a fejléc alatt repkednének.
//PLUGIN


a Contact us menüpontnál vannak az elérhetőségek. ezek nem csak ott vannak alapból, hanem ahogy scrollozok le és elérek egy megadott pixelt, akkor ezek a 
szövegboxok szépen megjelennek (mondjuk balról jobbra kimaszkolódvan)…nyilván itt is ease out, mert világdivat :)
//VILÁGDIVAT.. MEHET ANIMÁCIÓ, DE SZERINTEM NE ÉSZ NÉLKÜL

Amugy a legtöbb tartalmi résznél(pl szövegek) meg lehetne csinálni, hogy nem csak úgy alapból ott vannak az oldalon, hanem mondjuk 30px-lel jobbra kedődően a 
helyükre úsznak balra. gondolom ez html5-tel nem olyan nagy mutatvány. ilyenekkel föl lehetne dobni.
//TÚL SOK..

Alul a Send gomb Hoverje az legyen, h a Szöveg fehér lesz, a gomb pedig olyan kék, mint most a stroke (de nem hirtelen, hanem szép átlátszósággal)…erre kldök egy 
anim gifet h érthetőbb legyen. (othet info gif anim)
//KÉSZ