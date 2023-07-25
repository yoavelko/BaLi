import './User.css'
import SuggestionBox from '../suggestion-box/SuggestionBox'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function User() {

    // const israel = {[
    //       {
    //           "publishedAt": "2022-11-18T14:31:28Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "בניה ברבי - קרן שמש",
    //               "url": "https://i.ytimg.com/vi/n5illsgvqKA/default.jpg",
    //           "channelTitle": "Playlist Music USA - UK",
    //             "videoId": "n5illsgvqKA",
    //           "videoOwnerChannelTitle": "בניה ברבי",
    //           "videoOwnerChannelId": "UCnmHeCs19lkRYyfYqFnf5uA"
            
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "mtTjxNRxtCdMGpuXqMwsG09VggI",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi43NkI3M0NGOUE4ODY2OTE1",
    //         "snippet": {
    //           "publishedAt": "2022-11-18T14:31:40Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "אודיה & **** - האמת (Prod by. Moshe & Ofek)",
    //           "description": "בס״ד\n\nלשיר החדש בכל שירותי הסטרימינג:\nhttps://fanlink.to/OdeyaEmet\n\nמילים ולחן: אודיה אזולאי\nעיבוד והפקה מוסיקלית: אופק יקותיאל, משה בן אברהם\nפתיח ״אתה לא ראוי לאהבה הזאת״ באדיבות מירו ומתנה הפקות\n\nוואלה אתה לא ראוי לטקסטים שלי\nלא אתה לא ראוי לרשימה הזאת של האקסים שלי\nתן להתפוצץ עליך שקט אין לי ברקסים\nוסתמתי את הפה יותר מדי\nאני לא מכבה הרפלקסים שלי\nהפעם בא לי לדבר\nכל מה שיושב לי על הלב אני אגיד\nאתה תתגבר\nזאת השבת הכי קשה שלי בחיים\nאתה לא תבין אתה לא שומר\nעליי יותר\nהרבה זמן לא חזרתי בוכה ממסיבות צהריים\nלקחתי כדור וכיביתי אותי ליומיים\nלא קמתי לקידוש\nאבל מה זה מעניין אותך אתה\nאכפת לך איך אתה לבוש\n\nהאמת\nהייתי חוזרת אחורה בזמן\nליום של שיחת יחסנו לאן\nהייתי מוותרת עליך\nמחבקת אותי\nוחוזרת לכאן האמת\nהייתי רוצה עוד שיחה עם האקס\nההוא שלימד אותי לחן וטקסט\nהייתי נלחמת עליו\nמחבקת אותו\nלא חוזרת לכאן\nבלעדיו\n\nכתבת עליי שירים אחרי שבוע ודקה\nוכשחבר שלך עוזב אז את זורקת לי חכה\nואת שולחת הודעות ומחכה\nנשבר לי מלשבור לך את הלב כשאת צריכה\n\nבא לך אהבה אז את דופקת לי בדלת\nאם לא תחבק אותי היום אני נופלת\nאיך אני חלש מול העיניים שלך\nשוב הן אדומות\nאני לא צריך שירים\nומאמי תכבי את המצלמות\n\nהאמת הייתי חוזר לי\nאחורה בזמן\nליום של שיחת יחסנו לאן\nהייתי מוותר על ההיא\nמחבק את עצמי\nוחוזר לי לכאן\nהאמת הייתי רוצה לדבר איתך שוב\nכי אנחנו זה מה שחשוב\nהייתי נלחם גם עכשיו\nבהוא שניצח\nשאין לי אותך אחריו\n\nהחולצות של הדיור שלך שנראות כמו פיג׳מה\nהחיבוק החצי מת שלך מיותר כמו ניקי ג׳אמה\nאתה קר אליי תקופה ואתה לא מספר לי למה\nלא מרגש אותך קהל ששר יורקת פה דם אה?\nלא נהיה ג׳סטין והיילי\nאו קניה וקים\nאו ביבי ושרה כי שנינו דפוקים\nאני עפה על טקסטים אתה על עוקבים\nאני עובדת קשה לך יש מנקים\n\nהאמת הייתי חוזר לי\nאחורה בזמן\nליום של שיחת יחסנו לאן\nהייתי מוותר על ההיא\nמחבק את עצמי\nוחוזר לי לכאן\nהאמת הייתי רוצה לדבר איתך שוב\nכי אנחנו זה מה שחשוב\nהייתי נלחם גם עכשיו\nבהוא שניצח\nשאין לי אותך אחריו\n\nכלי הקשה: משה בן אברהם\nפסנתר: אופק יקותיאל\nגיטרות חשמליות: עידן שניאור\nגיטרות אקוסטיות: מאור תיתון\nקולות: משה בן אברהם, גולן אברהם\nתכנותים: אופק יקותיאל, משה בן אברהם\nהוקלט באולפני O&M Studio\nמיקס ומאסטרינג: משה בן אברהם, אופק יקותיאל\n\nניהול וייצוג אישי: מיכל וייסברג aromamusic\nרוברטו בן שושן ופי איי איי , פרודקשן אדם אינבסמנט בע״מ.\nהפקת פוסט: זהבית לגאלי\nמפיק בפועל: ניב קקון\nשיווק ודיגיטל: עדי בן עמי\nעיצוב עטיפה, קליפ מילים: Avoxvision\nיחסי ציבור: עופר מנחם  menahem.ofer@gmail.com |\n  \nהפצה דיגיטלית: D Music\nניהול מדיה: ג׳ירף ניו מדיה\n\nניהול הפקה: עמוס מסיקה\nלהופעות: כספית ייצוג אמנים: 03-6886881\nמופעים פרטים: איילון 050-9494938\n\nכל הזכויות שמורות למחברים ©\nהליקון ארומה מיוזיק בע\"מ, אוקטובר  2022\n℗ 2022 Helicon Aroma Music Ltd.\n©2022 Helicon Aroma Music  Ltd.",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/csafTcTFWDM/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/csafTcTFWDM/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/csafTcTFWDM/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/csafTcTFWDM/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/csafTcTFWDM/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 1,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "csafTcTFWDM"
    //           },
    //           "videoOwnerChannelTitle": "אודיה - הערוץ הרשמי",
    //           "videoOwnerChannelId": "UCKTbyJY0d-WRwFrXjBtETQQ"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "ktcgFfrNPhXluXK6fBziZTWf6P8",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi4xNzI4OTE0NTlBN0QyQUY0",
    //         "snippet": {
    //           "publishedAt": "2022-11-18T14:31:51Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "אייל גולן - פנתרה (Prod. By Tamir Zur)",
    //           "description": "אייל גולן בסבב היכלים - מופע חורף חדש!\n\n25.01, 26.01 - היכל מנורה מבטחים \n02.02 - היכל רוממה חיפה\n09.02 - ארנה ירושלים\nלכרטיסים\nhttps://2207.kupat.co.il/show/eyalgolan\n\nמילים: אופיר כהן. \nלחן: אייל גולן , אופיר כהן, אור חיים כהן ותמיר צור.\nקלידים ופסנתרים:  אופיר כהן\nעיבוד והפקה מוזיקלית: תמיר צור.\n\nייצוג: ליאם הפקות בע\"מ 03-6416415 \nניהול אישי: אודי גואטה 050-6347494 \nיחסי ציבור: רן רהב תקשורת ויחסי ציבור – \nלינור 0526714411\nנתנאל מויאל יחסי-ציבור 050-8925363\n\nמילים:\nאם אני צוחק סימן שטוב לי\nלא דופק חשבון לרכילות\nאני מהמר עלייך אול אין\nלאהוב אותך זה בא לי בקלות\n\nאת זורמת לי בתוך הווריד\nגם אלוהים יעיד\nלא תצעדי לבד\nוכלום בניינו לא יפריד\n\nפזמון:\nכי את פנתרה את משגעת את כל הבנים\nחפלה נדירה הלילה הם לא ישנים\nכי את פנתרה ולא חשוב לי מה כולם אומרים\nאחללה אווירה את רוקדת וכולם שרים \n\nאם אני בוכה סימן שרע לי\nבחיוך קטן עושה שלום\nהריקוד שלך הפך ויראלי\nכל המדינה על זה שרים את ההמנון\n\nגיטרות : עומרי זליג.\nתכנותיים וקלידים: אור חיים כהן, עומרי זליג ותמיר צור.\nכלי הקשה ודרבוקה: ניר שלום  \\\\ קולות רקע: אופיר כהן.\nמיקס: תמיר צור \\\\ מאסטרינג: רון תיכון.\nהוקלט ב – Musical Minds Studio  תמיר צור 2022\n\nעיצוב גרפיקה והפקת קליפים : AVOXVISION\nניו מדיה: MOBILE1 music\nהפצה דיגטלית: לינקטון\n\nכל הזכויות שמורות לליאם הפקות בע\"מ",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/d0gBmCQepRY/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/d0gBmCQepRY/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/d0gBmCQepRY/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/d0gBmCQepRY/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/d0gBmCQepRY/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 2,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "d0gBmCQepRY"
    //           },
    //           "videoOwnerChannelTitle": "EyalGolanOfficial",
    //           "videoOwnerChannelId": "UCrI0Slej0fiiwYPhR1EmFBw"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "C3HtBOdIzFA1Mo92A6mwUdykEC4",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi44OUE4RUIwOURGRUM0MDdG",
    //         "snippet": {
    //           "publishedAt": "2022-11-18T14:32:04Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "טונה ויסמין מועלם - סהרה (חי בלייב פארק)",
    //           "description": "טונה בקיסריה:  16.7.22 \nכרטיסים כאן: https://bit.ly/TunaLive\nלהאזנה והורדה: https://tuna.lnk.to/SaharaLive\nהפקה מוזיקלית: ניר דנן, יקיר בן טוב\nניהול אומנתי: ניר דנן ואיתי זבולון\n\nעריכת וידאו: ניר דנן ואיתי זבולון\nצבע ואפטר: נאור סוקי\nצילום הופעה: רועי חבני, יניב וקנין, עידו שחם, שחף בגר\n\nמילים: איתי זבולון\nלחן: איתי זבולון, ניר דנן, יקיר בן טוב\nגיטרה אקוסטית וקולות: ניר דנן\nקלידים וקולות: יקיר בן טוב\nמיקס: ניר דנן\nהקלטה וסאונד הופעה: טל סיון\nתאורה: מוחמד אבו סלמה\nניהול: ליאור מילר\nניהול הצגה: תהל שפר\nבקליין: משה לוי\nעיצוב: טל פוגל\nהפקה וניהול מדיה: אורטל לביא \nמאסטרינג: Jeremy Lubsey @ Vlado Meller\nהפצה: נענע דיסק\n\nניהול: ליאור מילר\nTunaoffice13@gmail.com\nלהזמנת הופעות טונה - כספית\n036886881\n\nטונה בפייסבוק: https://www.facebook.com/LamaTuna\nאינסטגרם: https://www.instagram.com/itay_tuna\nאתר ועד הוייב: https://bit.ly/TunaLive\nיוטיוב: https://tuna.lnk.to/YouTube\nספוטיפיי: https://tuna.lnk.to/Spotify\nאפל מיוזיק: https://tuna.lnk.to/AppleMusic\n\nיסמין מועלם - להאזנה בכל הפלטפורמות: https://bit.ly/JasminMehila\nיסמין מועלם בפייסבוק: https://www.facebook.com/JasminMoallem\nיסמין מועלם באינסטגרם: https://www.instagram.com/jasminmoallem\nלהזמנת הופעות יסמין מועלם: 'כספית' 03-6886881 kaspit@kaspit-art.co.il\nיח״צ יסמין: לירון פנחסי liron.prmail@gmail.com\nניהול יסמין: ׳יהלום׳ גלעד אדמוני ושרון ארביב hey@yahalomx.com\n\nכל הזכויות שמורות לוועד הווייב בע\"מ\n\n***\n\nהיי, חיפשתי כבר בכל מדבר\nאפילו בסהרה\nאנ'לא מוצא את הראש שלי\nאני פרופסור מפוזר\nתראי, העט על הנייר\nהלב איתך כפרה\nוואלאק איפה הראש שלי?\nאו-ווי\n\nהיא נווה מדבר בשביל גרון יבש \nכוכבים עבדו כפולות כדי שניפגש\nוכמו שראפרים רוצים לצוד קרדש\nכיוונתי, דרכתי ואש, אש, אש, אש\nהיא טובה, היא מתחמקת\nמול מיטב התכסיסים היא מפהקת\nבא לה רעש, הצעתי שקט\nהיססה קצת אבל בסוף היא לא הצביעה נגד\nוזה התאים כאילו שתי טיפות של פאזל\nאני לא יודע מה זה, אבל מאז אני תמיד איתה\nמה יש בך שגרם לי לשים בצד ת'האסל?\nהמדע עוד לא מבין את זה, אני אדע?\nאנשים חושבים אני על קראק\nיכולים לשרוף ימים שלמים על:\n\"רק את\" ו\"רק אתה\" \nו\"טה וטה טי\" ו\"טה טה טה\"\nמערבב ת'שוקולטה עם סלט של בטטה \nאני ב-\n\nהיי, חיפשתי כבר בכל מדבר\nאפילו בסהרה\nאנ'לא מוצא את הראש שלי\nאני פרופסור מפוזר\nתראי, העט על הנייר\nהלב איתך כפרה\nוואלאק איפה הראש שלי?\nאו-ווי\n\nלא מוצא כיוון כאילו אני לא מכאן \nמגולם לפרפר, עכשיו פרפר בהוריקן\nאז אם ראיתם איזה ראש כזה עם קוקו \nתנסו לצעוק לו \"זבולון\" ושלחו לנירו לאולפן\nהוא נעלם בתוך אופוריה משמחת \nכנראה בלי כוונה נתת לו בעיטה בתחת\nאיזה זוג ישרוד ביחד\nבלי למצוא את ההבדל בין אהבה, שליטה ופחד?\nשוכרים בית, שותים מאותו ספרייט\nחוזרים על אותו פייט, חוזרים על אותו… די\nגם אם מנקים את הראש עם סקוטשברייט\nשוטפים אותו טוב טוב, תמיד את בספוטלייט\nפרד, זוג, הו אילנה\nהיא גרמה לי לעבוד-בוד כמו ריהאנה\nהיא הייתה לי גם נירוונה. גם ג’ננה\nמתוקה כמו ביגידי-בקלאווה ופאטה כמו מורגנה, היי\n\nהיי, חיפשתי כבר בכל מדבר\nאפילו בסהרה\nאנ'לא מוצא את הראש שלי\nאני פרופסור מפוזר\nתראי, העט על הנייר\nהלב איתך כפרה\nוואלאק איפה הראש שלי?\nאו-ווי\n\n#טונה #יסמין_מועלם #מזרח_פרוע #סהרה",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/qALEkPoY-Hg/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/qALEkPoY-Hg/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/qALEkPoY-Hg/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/qALEkPoY-Hg/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/qALEkPoY-Hg/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 3,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "qALEkPoY-Hg"
    //           },
    //           "videoOwnerChannelTitle": "Tuna Official",
    //           "videoOwnerChannelId": "UCLCxf465pPOvPkEBJhN0ddg"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "45Hp3VcU9D6qOkcpboZ_D0_dSu0",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi40OEMzNzFDQjA5Q0YxMjQ3",
    //         "snippet": {
    //           "publishedAt": "2022-11-18T14:32:29Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "אגם בוחבוט - קופידון (Prod by. Triangle)",
    //           "description": "אגם בוחבוט בשיתוף פעולה עם סמסונג ישראל לרגל השקת סדרת המתקפלים החדשה Galaxy Z Flip 4\n\nניהול אישי וייצוג בלעדי\nGaga Management \nאורון כלפון ויואב גרוס בשיתוף זד אי הפקות, אמנון זנדני ומשה פרץ\nלהזמנת הופעות- גאגא 036056511 , בוכמן - 050-8914065 אופיר - 050-8499347\n\nלהאזנה לשיר בשרותי הסטרימינג\nhttps://orcd.co/cupid\n\nיחסי ציבור: זאביק דרור, עדי יואל 050-6800213\nשיווק דיגיטלי: יקיר ונה הפקות Y.V Productions\nקליפ מילים: AVOXVISION\nניהול דיגיטל: ביבר גלובל\nגרפיקה: Avoxvision\n\nמילים ולחן: עידו נצר, עמית מרדכי, בר אלמליח דונצוב, ים רפאלי \n הפקה מוזיקלית: עמית מרדכי,  עידו נצר, רותם ג׳ראד  (Triangle)\nמיקס: עידו נצר עמית מרדכי \nגיטרה: נועם בן עומרי\nבאס: עמית מרדכי, עידו נצר, נועם בן עומרי\nקלידים ותכנותים: עמית מרדכי, עידו נצר, יהלי בילר צידון, נועם זלטין\nעיבוד כלי נשיפה:  יונתן גורפינקל, יהלי בילר צידון, עידו נצר, עמית מרדכי \nכלי נשיפה: מתן גוב ארי (חצוצרה), רותם ג׳ראד (טרומבון), עפר כהן (סקסופון)\nקולות: נועם זלטין, אגם בוחבוט, ים רפאלי, עמית מרדכי, עידו נצר, יונתן גורפינקל, יהלי בילר צידון, אביב מורד, שני לוגסי, רותם ג׳ראד\n\nמילים:\nמאיפה באת?\nעם עיניים חום דבש על מאתיים קמ״ש\nכשאתה לידי זה יפה לך ממש\nזה יפה לך ממש\n\nקבענו בחמש אני למטה\nהוא לא חרטא\nהוא יודע טוב\nעשר ודקה מחזיר הביתה\nאפילו אבא שלי אוהב אותו\n\nארוחת שישי הוא בא אליי (ליי ליי)\nיודע לא יהיה פה טינניי (ניי ניי)\nאז ביי ביי\nלכל הבנות שהיית איתן לפניי\n\nהו ווהו\nעשית לי חם\nכמה מעלות\nהרמת לי ת׳לחץ דם\nצבעת ת׳לילות בלבן\nצורחת במקלחת\nהו ווהו\nהעיף לי ת׳סכך\nאיזה מלאך\nתודה קופידון יא אח\nלמה יפה כל כך\nטה טה טה דה\n\nקאט!\nנביא עציץ הכנה לכלב הכנה לילד\nאבל ניקח את זה לאט\nבלי לחץ\nניקח את זה לאט\nאבא שלו גנן הוא עונה בזמן לא מדליק מזגן מצטיין דיקאן\nלא משחק בדוקים הוא שולט באותיות אית״ן\nוהוא לא דן חסכן\n\nכולם לפתוח יומן\nחתונה בגן הפקאן\nסגרתי פרחים שמלה תקליטן\nשמישהו יעדכן ת׳חתן\n\nהו ווהו\nעשית לי חם\nכמה מעלות\nהרמת לי ת׳לחץ דם\nצבעת ת׳לילות בלבן\nצורחת במקלחת\nהו ווהו\nהעיף לי ת׳סכך\nאיזה מלאך\nתודה קופידון יא אח\nלמה יפה כל כך\nטה טה טה דה\n\nאל תהיה בן של זורחת השמש\nתענה לשאלה מליל אמש\nהיית שוחה בשבילי לירח?\nתטעם נו תטעם כל האוכל שלי מלח\nאתה מתוק כמו ריבה\nעד שמישהו ניגש אליי במסיבה\nבוא נשים על השתק ת׳עולם\nמאמי אני ואתה זה מושלם\nאיף נהייתי קיטשית\n\nהו ווהו\nעשית לי חם\nכמה מעלות\nהרמת לי ת׳לחץ דם\nצבעת ת׳לילות בלבן\nצורחת במקלחת\nהו ווהו\nהעיף לי ת׳סכך\nאיזה מלאך\nתודה קופידון יא אח\nלמה יפה כל כך\nטה טה טה דה\nהו ווהו\nעשית לי חם\nהרמת לי ת׳לחץ דם\nצורחת במקלחת\nהו ווהו\nהעיף לי ת׳סכך\nאיזה מלאך\nתודה קופידון יא אח\nלמה יפה כל כך\nטה טה טה דה\n\nVideo Produced by - ROMS\nhttps://www.roms.co.il/\nhttps://www.facebook.com/RomsStudios/\nhttps://www.instagram.com/roms_studios/\nבימוי, תסריט וקונספט - רומן בוצ'אצקי | Roman Buchatsky   \nhttps://www.instagram.com/roman_buchatsky/\nמפיקה ראשית - גלית בורנצוויג\nמפיקה בפועל - ספיר כהן\nצלם - מישה קמינסקי\nעוזרת במאי - מלינה קרפוביץ\nפוקוס פולר - מאיר ארד\nעוזרת צלם - יובל אוהב ציון\nתאורן ראשי - ירמי קביאט\nע. תאורה - דרור עידן, חיים כחלון\nגריפ - גולן קביאט\nע. גריפ - ניר הררי, אוהד אבן חיים\nמעצבת - רחלי לוין\nע. ארט - מיכאל חיות, עמיחי קמין דורון קנר\nלוקיישן - Livingroom Tlv \nFine_by_singa\n\nעריכה ופוסט - WAY\nhttps://www.instagram.com/way_studios\nhttps://waystudio.co.il/\nמפיקת פוסט - שני רייבר\nעריכת אופליין - רומן בוצ'אצקי\nעריכה נוספת - טל חיים\nתלת מימד, קומפוזיטינג וצביעה - יובל גור\nפתיח תלת מימד - עידו הרטמן\n\nהלבשה אגם בוחבוט - ראובן כהן\nע. הלבשה אגם בוחבוט - דניאל בן דוד\nאיפור אגם בוחבוט - אל אדידה\nאסיסטנטית איפור אגם בוחבוט - בר ליבל \nשיער אגם בוחבוט - עדן ירושלמי\nהלבשה קאסט - לירון שמעוני\nע. הלבשה קאסט - יובל חסידים\nאיפור קאסט - קרן אסף\nע. איפור קאסט - קרולינה מרקו\nשיער קאסט - ליאור גבריאלוב\nע שיער קאסט - סיוון רובינשטיין\nע. הפקה - טל קליין, עומר שחר, סנטוס פאנטה\nסוכן ביטוח - אסף קלכמן \nכוריאוגרפית - מיכל שי\nרקדניות - מאי יטקובסקי, מיה אגסי, ליאל שאול, יסמין מלסה\nקופידון - עידן שלו\nשחקן ראשי - אליעזר וקס\nמשתתפים - בן ניקסון\nדניאלה קאי פרידמן, בן שושן - H.H Models \nמתן אנקוה - Brodcast-PA - נילי רומנו, בן מלול, מאיה כץ, בנימין מסיקה\n \n \nפיץ' תוכן שאוהבים:\nמנכ\"ל: אייל סעדה\nסמנכ\"ל תפעול ולקוחות: צבי פלוטניצקי\nסמנכ\"ל פיתוח עסקי: שראל דניר\nסמנכ\"ל קריאייטיב והפקה: פרץ מרקיש\nניהול לקוח: מיכל קדוש\nניהול פרויקט: טליה הכהן\n\nקרדיטים הלבשה - אגם בוחבוט:\nינקי ונטף\n\nקרדיטים הלבשה - קאסט: \nטומי הימפילגר\n\nתודות מיוחדות: \nצוות Livingroom Tlv  - אלירן צדק, סינגה, מוריה מורלי\nפיטוסי שירותי מצלמה\nקוסטיה וסילקוב",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/C1ToP8UZr-s/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/C1ToP8UZr-s/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/C1ToP8UZr-s/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/C1ToP8UZr-s/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/C1ToP8UZr-s/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 4,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "C1ToP8UZr-s"
    //           },
    //           "videoOwnerChannelTitle": "אגם בוחבוט - הערוץ הרשמי",
    //           "videoOwnerChannelId": "UC9TW96-3a8_scwVJjo9_PbA"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "c-favxSwuNj_pj-wILlNiEQD2Is",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi5COUU4NzEzMzg1MkZFQjlE",
    //         "snippet": {
    //           "publishedAt": "2022-11-18T14:32:40Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "נועה קירל - פנתרה (Prod. By Jordi)",
    //           "description": "הקליפ בחסות קוקה-קולה ישראל\nהורידו עכשיו את אפליקציית קוקה-קולה:\nhttps://cocacola.onelink.me/VHZw/NoaKirel\n\nיחסי ציבור: שיר פינטו דוברות ויחסי ציבור\n להזמנת הופעות פרטיות - 054-798-0676 \nלהזמנת המופע לאירועים סגורים – \n- NMC- 03-6909817  \nשיווק דיגיטלי: יקיר ונה הפקות Y.V Productions\nמנהלת סושיאל נועה קירל: רוני פרץ \n\nמילים ולחן: רון ביטון, ירדן \"ג׳ורדי\" פלג, איתי שמעוני ונועה קירל \n\nאני פנתרה\nאני ערה וכולם ישנים\nהם אומרים שאני מוזרה\nאני אומרת שהם רגילים\n(נועה קילה)\n\nפנסים דולקים עליי בלילה\nכל העיניים עליי, כל העיניים עליי (אני פנתרה)\nעדיין ממשיכה לעלות למעלה\nאל תגידו לי די, רק אל תגידו לי די די די\n\nיצאתי עם שיניים חשופות - נושכת\nבוא תביא לי אלף אריות - טורפת\nמוזמנים לראות ת׳קבלות - מוכרת\nכל העיניים עליי\n\nואיך אנ'לא אוהבת מוסכמות - שוברת\nוכמה שישימו לי גבולות - עוברת\nוכל מה שעושים אני עושה - אחרת\nרק אל תגידו לי די\n\nכל היום אני בכל מקום\nאין דקה לנשום, אין דקה לנשום\nבלילות אנ'לא רוצה לחלום\nאני רוצה לטעום, אני רוצה לטעום\n\nאני פנתרה\nאני ערה וכולם ישנים\nהם אומרים שאני מוזרה\nאני אומרת שהם רגילים\n\nחגורה שחורה \nאל תלמדו אותי תרגילים\nאני נולדתי ככה אשכרה\nוהיום כבר כולם יודעים\nאני פנתרה\n\nכשאני נותנת ת'סימן\nכל העיניים עלי\nרק אל תגידו לי די די די\n\nכולם מדברים אני עושה בשקט\nואם זה לא בא לי טוב אני מוחקת \nשמה ת'מעיל המנומר - שואגת\nרק אל תגידו לי די\n\nכל היום אני בכל מקום\nאין דקה לנשום, אין דקה לנשום\nבלילות אנ'לא רוצה לחלום\nאני רוצה לטעום, אני רוצה לטעום\n\nאני פנתרה\nאני ערה וכולם ישנים\nהם אומרים שאני מוזרה\nאני אומרת שהם רגילים\n\nחגורה שחורה \nאל תלמדו אותי תרגילים\nאני נולדתי ככה אשכרה\nוהיום כבר כולם יודעים\nאני פנתרה\n\nעיבוד והפקה מוסיקלית: ירדן \"ג׳ורדי\" פלג\nגיטרות: יוחאי פורטל \nחצוצרה: מתן גוב ארי\nקלידים ותכנותים: ירדן \"ג׳ורדי\" פלג\nמיקס ומאסטרינג: ירדן \"ג׳ורדי\" פלג\n\nניהול וייצוג בלעדי: רוברטו מיוזיק – רוברטו בן שושן:\nhttps://www.instagram.com/roberto_ben_shoshan1\n\nExecutive Producer Israel: Kamila Chantov @kamila_chantov\nExecutive Production : Raconteur Studio @raconteur.studio\nDirector : Indy Hait @indy.hait\nProduction Service Company: Warsaw Witches Association | WWA @warsawwitches\nDP: Jakub Stoszek | WWA @kubastoszek\nExecutive Producer Warsaw Witches: Marta Berens @martaberens\nLine Producer Warsaw Witches: Konstancja Landsberg\nProduction Coordinator: Kuba Nowakowski | Maciej Skrzyński \nProduction Assistant: Kateryna Oleshko | Leon Korzyński | Franciszek Knecht\nProduction Runner: Lucjan Janiszczyn\nSet Designer: Jana Kuczyńska\nSet Design Team: Aliaksei Hryharovich | Gleb Burnashev | Evgeniy Chernichenko \nChoreographer: Marina Ashotovna @dnnbdhdueuk\n1 AD: Kasia Frątczak\nSet Manager: Remik Kubiak\nFocus Puller: Krzysztof Solich \n1AC: Aleksandra Kamińska\nGaffer: Szymon Kuc\nSparks: Dominik Granas | Jakub Kapusta\nGrip: Grip 7\nMake up: Monika Kropat\nHair: Alina Dębowska\nStylist : Itay Bezaleli\nWardrobe PL: Dzvinka Kukul \nActing Coach: Christopher Mack\nStage Hands: Marcin Skajnowski | Marcin Buczyński | Paweł Merski\nMedic: Paweł Matyka\nCreative manager (Coca-Cola Israel): Roey Medalie   @Roeymedalie\nMarketing Brand manager  (Coca-Cola Israel):  Yael Saegev Gaber\nMaking of: Tomasz Kiełbasa\nLocation scouting: Tutaj Lokacje Filmowe\nCamera: ATM\nLighting: ATM\nTransport: Mariusz Waś | Marek Derbich | Robert Pawlak\nEditor: Indy Hait\nColorist: Colorist- Indy Hait \nVFX- Indy Hait\nFilm: Kodak Motion Picture Film @kodak_shootfilm\nLab: Cinelab | London @cinelabuk\nDesign Cover: Avoxvision\n\n#נועהקירל #פנתרה",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/ZOf7aMbzQAM/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/ZOf7aMbzQAM/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/ZOf7aMbzQAM/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/ZOf7aMbzQAM/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/ZOf7aMbzQAM/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 5,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "ZOf7aMbzQAM"
    //           },
    //           "videoOwnerChannelTitle": "Noa Kirel",
    //           "videoOwnerChannelId": "UC7sHZrh1-mdwyBLq52m1MSw"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "xE5Ismwk_8gQ4NurO-Zv91bhqnE",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi5CNDEwQURGQjkwNDIzRUYw",
    //         "snippet": {
    //           "publishedAt": "2022-11-18T14:32:49Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "עדן בן זקן - כינורות (Prod. By Matan Dror)",
    //           "description": "בס\"ד\n\n✨לאור הביקוש מופע עשור נוסף של עדן בן זקן!✨\n24/8 יום חמישי היכל מנורה 360 | כרטיסים אחרונים בקופת לאן: https://bit.ly/EBZ2408\n\nעדן בן זקן באינסטגרם: http://bit.ly/Eden_INSTA\nעדן בן זקן בפייסבוק: http://bit.ly/Eden_FB\n_____________\nניהול אישי ורפרטואר : לירון פרנקו liron.franko@gmail.com \nייצוג בלעדי והזמנת הופעות: שרית הפקות בע\"מ/04-9816716\nאירועים פרטיים הילה  050-5533448\nכל הזכויות שמורות לשרית הפקות בע\"מ וארומה Music\n_____________\nלשיר החדש בכל שירותי הסטרימינג: https://fanlink.to/EdenKinorot\n\nמילים: אבי אוחיון\nלחן: אבי אוחיון, מתן דרור, מור אוזן\n\n\nאל תנסה בכלל למכור לי אשליות\nאם תחפש אותי יצאתי לבלות\n\nנשבר ממשחקים כבר\nמה תלא מבין גם \nזוז אתה מסתיר לי\nלמה סתם לשרוף זמן\n\nאל תחבק אותי גם לא בחלומות\nאם תחפש אותי יצאתי לבלות\nככה שיכאב קצת קח לך שבוע\nככה שתלמד גם מה זה געגוע\n\nכינורות מנגנים לי בלילה לבד\nככה בלעדיך\nאתה לא מאמין איך קשה לי לחיות\nבלי למות עליך\nולמה תמיד שהכעס נרדם\nהשפיות חוזרת\nמנסה להסתיר וקשה לא לראות\nאיך אני אוהבת\n\nאל תנסה בכלל לתת לי הסברים\nלא מתנחמת מצרות של אחרים\nפתח את העניים\nיאלה תתעורר כבר\nלא רוצה כפיים \nמשהו לא קורה כאן\n\nאל תחפש בכוכבים במזלות\nאם לא תראה  אותי יצאתי לבלות\nלמה להרוס סתם \nלא חבל תגיד לי\nלא רוצה להיות שם\nכל זה לא מתאים לי\n\n\n\nעיבוד והפקה מוזיקלית: מתן דרור\nביט, בס, קלידים ותכנותים: מתן דרור\nגיטרות: מור אוזן\nקלידים נוספים: אסף צרויה\nשייקר: אבי אוחיון\nקולות: עדן בן זקן, שירה מור אדירי\nמיקס: מתן דרור\nמאסטרינג: ארן לביא\n\nבימוי ואנימציית תלת מימד: Avoxvision\nעיצוב עטיפה: Avoxvision\nניהול מדיה: יקיר ונה הפקות Y.V Productions\n\nהפצה דיגיטלית: D-Music",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/4uyUMjIhp-U/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/4uyUMjIhp-U/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/4uyUMjIhp-U/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/4uyUMjIhp-U/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/4uyUMjIhp-U/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 6,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "4uyUMjIhp-U"
    //           },
    //           "videoOwnerChannelTitle": "עדן בן זקן - הערוץ הרשמי",
    //           "videoOwnerChannelId": "UCt927ZDEsYMJL_8PXqMiVhg"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "ZJc1X3E_72O2Qcia65CfadGpR4A",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi4zNEM4RkZDQUU4MEYwQzJE",
    //         "snippet": {
    //           "publishedAt": "2022-11-18T14:32:58Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "בן צור - מה עובר לך בראש",
    //           "description": "ניהול אישי ואומנותי - איקו כהן\nלהזמנת הופעות: 0549202121\nייצוג ושיווק הופעות: Nmc united\nניהול יחסי ציבור: גילת קאשי - 05022640959\n\n\nמילים ולחן: תמר יהלומי ויונתן קלמי\nעיבוד והפקה מוזיקלית: בן צור\n\nמסיים את היום שלי בתשע \nמורח ת׳זמן על הכביש \nמבטיח לכתוב יותר על אבא \nבחוץ הכל הבל הבלים\n\nומה עכשיו את נעלמת \nכאילו שאני סתם איש\nזה עולה לי בבריאות תגידי למה\nאני בכלל מחפש אשמים… ? \n\nמה עובר לך בראש \nאנ׳לא רוצה לנחש \nאת רק תתחילי לכעוס \nואני בורח מאש \n \nאז מה אני מבקש \nאם אין לך כבר מה לתת\nבסוף אני רק הורס \nאז בינתיים שותק \nבנינו יש שקט \nבנינו יש שקט… \n\nאנ׳לא רוצה לוותר על הלב שלך\nהיום בחוץ לא מוצאים מה שלי יש איתך  \nאני כותב לך שירים ואת עושה לי שרירים  \nאני אלוף העולם בלהפסיד אותך  \n\nמה לא מספיק לך לקחת את הלב שלי\nאני לא ביקשתי תודה רק שתהי פה איתי \nאני כותב לך שירים, את לא אוהבת מילים \nאני אלוף העולם בלהפסיד אותך .   \n\nואין לי תלונות על הרגש \nאולי יש לי לב מקולקל \nאולי אני זה שאוהב באמת\nואת זאת שכבר לא אוהבת בכלל  \n\nאז מה עבר לך בראש \nתראי אני עוד חובש \nלאט את כל הפצעים \nהפקרת אותי בתוך אש \n\nשל אהבה עם עצמי \nואת לא כאן כבר מזמן\nאני רציתי פשוט ואת רצית מסוכן\n\nאנ׳לא רוצה לוותר על הלב שלך…\n\nצלם סטילס: טל שחר\nסטיילינג: כינרת מנור מזרחי\nקליפ מונפש ועיצוב עטיפה : ירין אלוש | 050-321-3997\nניהול מדיה: יקיר ונה הפקות Y.V Productions\n\nהפצה דיגיטלית: D-Music",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/k6VOZwkXmfA/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/k6VOZwkXmfA/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/k6VOZwkXmfA/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/k6VOZwkXmfA/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/k6VOZwkXmfA/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 7,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "k6VOZwkXmfA"
    //           },
    //           "videoOwnerChannelTitle": "בן צור הערוץ הרשמי",
    //           "videoOwnerChannelId": "UCWBO6JcrL1q5oz-AgtPViyA"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "gKKuuWsyFCJzbXHX8gsa1G4fQ7g",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi4xODJEMEQ5M0RCMDRGMzcy",
    //         "snippet": {
    //           "publishedAt": "2022-08-13T06:49:53Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "מאיה דדון - יאללה ביי (Prod. by Maor Shitrit)",
    //           "description": "מאיה בטיקטוק: https://www.tiktok.com/@mayadadon30\nמאיה באינסטגרם: https://www.instagram.com/maya_dadon1/\n\nניהול אישי : קורל טרבלסי \nניהול אומנותי : עדן בן זקן \nייצוג : אייקון ארטיסט מנגמנט בע״מ מאת שוקי ביטון ורוברטו בן שושן\nיחסי ציבור: עופר מנחם 050-7286538 // menahem.ofer@gmail.com\nלהזמנת הופעות : שרית הפקות רותי : 0525219616\n\nלשיר החדש בכל שירותי הסטרימינג: https://fanlink.to/MayaYalla\n\nמילים ולחן: רון ביטון ומאור שטרית \n\nבנות להזיז את האגן לימין\nואז את האגן לשמאל\nואז אתן תראו ת'בנים נכנסים לעניינים\nובאים לשאול\n\n(מה זה? של מי את? תגידי לי מותק)\nתזהר כי אין לי עותק\n(מה זה? מאיפה את באת לי יא וואלי?)\nאתה נראה לי מתבלבלי\n\nאיך הוא בא וזורק לי שטויות \nהוא כזה משוגע\nהבנות שוב אומרות לו  \nחיימי אתה לא נרגע\nמה חיפשתי לי גבר אחד כזה כולו בקלאס\nמאמי אתה מזה לא מנומס \nתקשיב אתה לא תעשה לי קרקס\n\nיאללה ביי\nאל תדבר יותר מדי\nהתייאשתי אז אולי \nלך תיפול עכשיו על מישהי אחרת\n\nיאללה ביי\nרק שרוטים נופלים עליי\nנו תגיד לי עד מתי\nאל תשלח לי הודעות אני חוסמת\n\nיאללה ביי\n\nבנות להזיז את האגן לימין\nואז את האגן לשמאל\nואז אתן תראו ת'בנים נכנסים לעניינים\nובאים לשאול\n\n(מה זה? של מי את? תגידי לי מותק)\nתזהר כי אין לי עותק\n(מה זה? מאיפה את באת לי יא וואלי?)\nאתה נראה לי מתבלבלי\n\nלא מפסיק לנסות \nמספר לי שהוא מאוהב\nאם מישהו יוריד ביטחון \nאני זה שאתן לך ת'גב \nאת הכל כבר שמעתי \nאת מי אתה בא לסובב\nמאמי אתה לא כזה מאהב\nלא אני לא מחזירה לך עוקב\n\nיאללה ביי\nאל תדבר יותר מדי\nהתייאשתי אז אולי \nלך תיפול עכשיו על מישהי אחרת\n\nיאללה ביי\nרק שרוטים נופלים עליי\nנו תגיד לי עד מתי\nאל תשלח לי הודעות אני חוסמת\n\nיאללה ביי\n\nעיבוד והפקה מוזיקלית: מאור שטרית\nקלידים ותכנותים: רון ביטון, מאור שטרית, מוטי כוחי\nקלידים וכינורות: אור כהן\nקולות:רון ביטון ומאור שטרית \nמיקס: מאור שטרית \nמאסטר: איציק פאליבה\n\nחברת הפקה MEMI PRODUCTIONSבשיתוף סטודיו poze,ובית מכבי - החברה העירונית ראשל״צ לתרבות ספורט ונופש.\n\nבימוי הפקה ותסריט- רז ממי\nצלם עורך - דוד גולדשטיין\nתאורן ראשי- דניאל סולודודה\nע. צלם - אדריאן חצבני\nע.תאורן - סם סולודוכין \nע. הפקה- יאן ברדיצ׳בסקיאיפור- ערן ישראלי\nשיער- קובי קלדרון\nסטיילינג מאיה- סימה ביטון\nהלבשה קאסט - ״פומה - puma”\nכראוגרפיה- מור חממי\nע. כראוגרפיה- גל בזיס\nצילום סטילס - אורטל טרבלסי\nעיצוב עטיפה : Avoxvision \nשחקן - דוראל שניידרמן - סוכנות divided\nרקדניות- יעל פרץ, עדי בללי, שי רביב, אוריה בוזגלו, מיכל בוקובסקי, הודיה ביטאו, ליאן מועלם, הילי אלג׳ם, שקד סווירי, נועה לביא, ליה קירל, ליאם מוסלטי, משי בוארון, שקד צ׳קול.\n\nתודות מיוחדות:תודה גדולה לבית מכבי ראשל״צ,חברה העירונית ראשון לציון לתרבות ספורט ונופש.תודה נוספת למותג הבגדים פומה.\n\nהפצה דיגיטלית : D-Music",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/BjQAaE_Dm78/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/BjQAaE_Dm78/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/BjQAaE_Dm78/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/BjQAaE_Dm78/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/BjQAaE_Dm78/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 8,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "BjQAaE_Dm78"
    //           },
    //           "videoOwnerChannelTitle": "מאיה דדון - הערוץ הרשמי",
    //           "videoOwnerChannelId": "UC_nUJEFS5JqsYgnvq4Y9Dew"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "YAcpZqkEbFPu_HOX0Ibo-qF0ItU",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi44OEI3NUQ0QTlFM0FCOUU4",
    //         "snippet": {
    //           "publishedAt": "2022-05-29T10:47:38Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "אנה זק - מי זאת || Anna Zak - Mi Zot",
    //           "description": "ITMODELS\nניהול אישי וייצוג בלעדי – אופיר חמו\nלהזמנת הופעות גאגא בוקינג – 050-8499347 / 050-8614065\nיחסי ציבור : חגית נוביק סלומון & ירון כהן \nשיווק דיגיטלי: יקיר ונה הפקות Y.V Productions\n\nלשיר החדש בכל שירותי הסטרימינג: https://fanlink.to/AnnaMiZot\n\nמילים ולחן : אור בן ברוך , שירה מרגלית , יובל מעיין , רון ביטון\nעיבוד והפקה : יובל מעיין\n\n\nמי זו פה שקמה על הבוקר עם הלוק של הביוקר לא\nבודקת תמחיר \nלא צריכה לשאול את המראה במעלית אני יודעת מי הכי יפה בעיר אני \nכולם מחכים לה על הממתינה \nאם זה לא דחוף לה אז היא לא עונה \nלא עושה סיפור עושה מה באלה\n באה טיל עם הפיגמה \nקח מספר ואז תמתין\n\nתרשום \n052538164\nתוסיף גם 8\nהוא בטח לא מפסיק עכשיו להתקשר\nאופס הבאתי לו מספר אחר \n\nפייייי מי זאת\n\nאין אחד שלא מכיר\nואם 'תה לא מכיר אותי אז יאלה שתה כוס מים קח אוויר \n\nהגננת כבר ידעה בגן \nשהיא מבזבזת לי ת'זמן \nלימדתי ת'מורה שלי לאן לצאת\nמבוקשת כל הלוז שלי איוונטים \nכל המקרר שלי מגנטים\nהרמטכל ביקש ממני בתי\"ם\nמי זאת רוקדת על הבר\nכאילו אין מחר\nרוצה את המספר? תרשום\n\n052538164\nתוסיף גם 8\nהוא בטח לא מפסיק עכשיו להתקשר\nאופס הבאתי לו מספר אחר\n\nפייייייי מי זאת \n\nבוא לפה \nאל תיגע\nתזהר\nפן תיפגע\n\nתחכה\nעד מחר\nנו אל תכעס הכל בשביל הפאן\nאל תתקשר כי אין לאן\nכולם יודעים שזאת אני אני אני אני\n\nפיייייייי מי זאת\n\n\nקלידים ותכנותים : יובל מעיין \nכלי הקשה : יובל מעיין \nקולות : אנה זק , שירה מרגלית , אור בן ברוך , יובל מעיין\nמיקס ומאסטרינג : ארן לביא \n\n\nחברת הפקה - אורי אמיתי הפקות\nהפקה בפועל - אורי אמיתי, עומר טוהר\nבמאי וקונספט - איתמר לידר שירי\nצלם - יונתן קובץ׳\nארט דיירקטור - אור עדני\nסטיילינג - מזל חסון\nכוריאוגרפיה - אופק שובל\nאיפור אנה - אל אדידה\nשיער אנה - רן קריסי\nע במאי - לי-את הלר\nפוקוס פולר - ארמן סרקיסוב\nע צלם 2 - גלי רובין \nע ארט - יותם כהן, חנוך וובה, גילי כהן, שארלי שאולפור\nתאורן - טיומה טרחוב\nע תאורה - דניאל ראנדל\nע תאורה 2 - אשרף ג׳ורון\nגריפ - רונן יהלומי \nע גריפ - אוריאל צרפתי \nע גריפ 2 - לב\nביוטי דוגמנים ורקדנים - שרון גרייפנר, נופר דואני, רוני רבינוביץ׳, אלירן שלום, מוראל בן חיון, אביב גרבלי, אוראל עטון\nע סטיילינג - שקד דרעי, רונית\nע הפקה - ירדן וינברן, דניאל ליאצקי\nדוגמנים ודוגמניות - סטלה פילימונוב, מיה מורגנשטרן, טל יוסיפוב, מאור זמר טוב, שירה קינן, יעקב יהודין, דוד קאופמן, אריאל קוצ׳רגינסקי, אלעד נבון, איתי שלפק, ג’ורג’יה בל, יארה רוס \nרקדנים ורקדניות - שחר חג׳יוב, אסף פרקש, גילי גרינשטיין, סהר ויג, ליה גיסין, יאגו פהיירה\nמורה - קמא קמילה\nילדה - מיקה וויל\n\nפוסט פרודקשן:\nאופליין - אליפלט, עידן סטולר\nקאלר - גל איסר\nאונליין - אלון טיסון\nעריכת סאונד - איתן קריאף\n\nעיצוב גרפי: AVOXVISION\nהפצה דיגיטלית: D-Music\n\nתודות מיוחדות : \nריקי דלאל - חליפות",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/bcuRKDY0Rz0/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/bcuRKDY0Rz0/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/bcuRKDY0Rz0/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/bcuRKDY0Rz0/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/bcuRKDY0Rz0/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 9,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "bcuRKDY0Rz0"
    //           },
    //           "videoOwnerChannelTitle": "Anna Zak Official Channel",
    //           "videoOwnerChannelId": "UC9RDj8ozUQWm4oSsSV_aVHg"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "EPCiyDrj64W5__djVzsAs087VTM",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi5EQkEyODM0NTk2MUFEQkYz",
    //         "snippet": {
    //           "publishedAt": "2022-08-13T06:50:08Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "Farah Chreim - Albi Elou [Official Lyric Video] (2022) / فرح شريم - قلبي الو",
    //           "description": "Farah Chreim - Albi Elou [Official Lyric Video] (2022) / فرح شريم - قلبي الو\n\nWritten & Composed By: Mahfoud Al Maher\nArranged, Mix & Mastering By: Houssam Saabi\nVideo By: Muki Huduti\n\nDigital Distribution @WataryProduction \n\nLyrics | كلمات\n\n“يا بيي عيونو قتلوني والبسمة الحلوة الحنوني\n\u200f\u200eشفت في وكل شي بدي \u200eلعندو هني جابوني\n\u200f\u200eسمارو هدلي حيلي قلبلي نهاري مع ليلي\n\u200f\u200eع دربو بس بدي كفي تيغفا بقلبي شي ليلة\n\n\u200f\u200eقلبي الو هو عمري الحلو\n\u200f\u200eيا عيوني تغزلو بجمالو\n\u200f\u200eالضحكة حلا قلبي شافو ابتلى\n\u200f\u200eهالدنيي بدلا كرمالو\n\n\u200f\u200eخدوني ع بيتو دغري \u200eتكفي بحضونو عمري \n\u200f\u200eمابدي لا مال ولا جاه وبقبل بعيونو مهري\n\u200f\u200eبعيني  هالدني حلا لي شافو بجمالو صلى\n\u200f\u200eسرقلي هالقلب مني ونصيبي بالدني كلا”\n\n#farahchreim #albielou #فرح_شريم #قلبي_الو\n\nListen to ”Albi Elou“ on all the digital platforms: \nhttps://lnkfi.re/AlbiElou\n\nKeep Listening to Farah Chreim on:\nAnghami: https://play.anghami.com/artist/10059384\nSpotify: https://open.spotify.com/artist/76hwkSg4dVAp3IYhM5VqWc\nApple Music: https://music.apple.com/us/artist/farah-chreim/1571738179\nDeezer: https://www.deezer.com/us/artist/147446652\nYoutube Music: https://music.youtube.com/channel/UCto48p0Talr8GrOm9E2DKJw\n\nSubscribe to Farah Chreim channel for all the best and latest official music videos, behind the scenes and live performances\nhttps://www.youtube.com/c/farahchreim\n\nFollow Farah Chreim on:\n• Instagram: https://www.instagram.com/farahchreim/\n• Tiktok: https://www.tiktok.com/@farahchreim?l\n• Facebook: https://m.facebook.com/farahchreim/\n• Twitter: https://mobile.twitter.com/farahchreim\n• Snapchat: https://www.snapchat.com/add/chreimfarah \n\nContact\ninfo@musicismylife.com\n0096181111841",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/XiL2F84vOw0/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/XiL2F84vOw0/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/XiL2F84vOw0/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/XiL2F84vOw0/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/XiL2F84vOw0/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 10,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "XiL2F84vOw0"
    //           },
    //           "videoOwnerChannelTitle": "Farah Chreim - فرح شريم",
    //           "videoOwnerChannelId": "UCkV5ZjNEj3tgAto1MtadUTQ"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "gNRHJVvxgZ5o1DRV62dDkrcGBnI",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi43RkJGOTAwRDhCOEQ1RjIy",
    //         "snippet": {
    //           "publishedAt": "2022-08-13T06:50:20Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "أغنيه | ويش جابك قلي ويش جابك من مده سكرت بابك -  ( جودي الحوتي ) حصريآ 2022",
    //           "description": "أغنيه | ويش جابك قلي ويش جابك من مده سكرت بابك -  ( جودي الحوتي ) حصريآ 2022\nجودي الحوتي - ويش جابك | Joudy - Wesh Jabak (Official Music Video) [Prod  Saleh Yasser ] \n🇱🇾🇱🇾🇱🇾 أغنية ليبية \nMusic Produced By: Saleh Yasser\nComposed By: Joudy Alhoty , Saleh Yasser\nLyrics: Joudy Alhoty \nRec, Mix & Master : Saleh Yasser\nRecorded At: Dolphin Studios\nDirected by. Ahmed Temsah\nEditing and Director of Photography. Hammadi Bodji\nPhotography. Salem Al-Jaj\nPhotography. Drone Awad Al Manfi\nColoring and graphics. Nabil El Rouba\nDirected By: Ahmed Altmsah\nPowered by: Takwene \nSocial Media : mohaned.zaiter - Ahmed Sharabia\n\nFollow Joudy on:\n----------------------------------\nInstagram: https://instagram.com/Juoooody\nSnapchat: Joudyal7houty\nTikTok: https://tiktok.com/@ju.o_d\n\nFollow Saleh Yasser on:\n----------------------------------\nInstagram: https://instagram.com/saleh.yasser\u200b  \n\nالكلمات :\nويش خطرها\nتسيب العين تسمرها \nتعقب أعذار وتهجرها\nجايني توا تبي حنيني\n\nراح بقسميته\nغلاك من الماضي عديته\nنحلفلك ناسي ونسيته\nما عاد معاك نضيع سنيني\n\nيا قلبي ياللي الليل أمسهرني\nفي جرت اللي ماعبرني\nنساني واجد كسرني\nما نمشيله، ولا قلبي يوماً نعطيله\nاللي نزل دمعي في ليله يجيك يوم يا هاجرني\n\nتقسى تنسى تنتسى\nأنت البادي بالجفاء\nقلبي ما تديره لعبة\nيجيك يوم وتتجدى\nتقسى تنسى تنتسى\nأنت البادي بالجفاء\nقلبي ما تديره لعبة\nيجيك يوم وتتجدى\nويش جابك قولي ويش جابك\nمن مدى صكرته بابك\nراح الوقت فاتك\nما عاد غيابك يعنيني\nويش جابك قولي ويش جابك\nمن مدى صكرته بابك\nراح الوقت فاتك\nما عاد غيابك يعنيني\n\nويش خطرها\nتسيب العين تسمرها\nتعقب أعذار وتهجرها\nجايني توا تبي حنيني\nراح بقسميته\nغلاك من الماضي عديته\nنحلفلك ناسي ونسيته\nما عاد معاك نضيع سنيني\n\nجاي بعد مدة\nيبيني من جده\nوبابه انا نسدى\nونسيت اللي بينا كان\nعادي شن يعني\nعذرك ما يقنعني\nوقلبي طاوعني\nنتحمله فرقاك\n\nويش خطرها\nتسيب العين تسمرها\nتعقب أعذار وتهجرها\nجايني توا تبي حنيني\n\nويش خطرها ويش جابك قولي \nويش جابك من مده سكرت بابك",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/klE3dc_NFtc/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/klE3dc_NFtc/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/klE3dc_NFtc/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/klE3dc_NFtc/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/klE3dc_NFtc/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 11,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "klE3dc_NFtc"
    //           },
    //           "videoOwnerChannelTitle": "Joudy Alhouti - جودي الحوتي",
    //           "videoOwnerChannelId": "UCF5FFIkj2YfMhCNn61-mC_g"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "Gl-ueGtBdtHa-K6e-aZ-MQptTV4",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi45MTRCQjE3QzVGNDREODIz",
    //         "snippet": {
    //           "publishedAt": "2022-05-29T10:48:12Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "עדן חסון - עושה לי צרות | Eden Hason - Osa Li Zarot",
    //           "description": "עדן חסון מגיע לבריכת הסולטן ב-22 ביוני. לכרטיסים - https://bit.ly/42k1gCg בס\"ד\nשיר 6, אלבום 3.\n\nייצוג בלעדי והזמנת הופעות עדן חסון: שרית הפקות בע\"מ 04-9816716/ \u202d050-5535583\u202c\nניהול אישי עדן חסון: חנן פרנקו.\n-------------------------------------------\nלעמוד הרשמי בפייסבוק עדן : https://www.facebook.com/Edennhason\nעדן חסון באינסטגרם: Edennhason.\n----------------------\nלשירותי הסטרימינג  - https://fanlink.to/EdenOsaLi\n\nמילים ולחן: עדן חסון.\n\nחיים שלי נראה לי שנפסיק לדבר,\nנראה לי זה עושה לי רע יותר\nממה שזה עושה לי טוב. \n\nחיים שלי די לקרוא לי ככה, \nאני לא מיאמור ואת לא באה \nאם אני נמצא לא בטוב. \n\nכבר התרגלתי להמתין בין הודעה להודעה,\nאנלא יודע אם אני מכור אלייך או להרגשה\nשאת מבשלת אותי ככה כבר תקופה על אש קטנה.\n\nאת עושה לי צרות.\nמופיעה בלילות.\nאיך בחיבוק את מעלה בי אלפי שאלות. \nהאם את אוהבת אותי\nכמו שאני לפחות? \nמאמי זה סתם איתי.. אל תעשי לי דמעות.\n\nחיים שלי קיפלתי את הכל כדי לא לראות אותך,\nמצד שני פתאום לכולם יש עכשיו תריח שלך, אוטו כמו שלך בול עובר פה כל דקה \nהאצבע על ההדק רק לשלוח הודעה. \nהתרגלתי להמתין בין הודעה להודעה,\nאנלא יודע אם אני מכור אלייך או להרגשה,\nשאת מבשלת אותי ככה כבר תקופה על אש קטנה \n\nאת עושה לי צרות.\nמופיעה בלילות.\nאיך בחיבוק את מעלה בי אלפי שאלות. \nהאם את אוהבת אותי כמו שאני לפחות\nמאמי זה סתם איתי, אל תעשי לי דמעות.\n\nזה לא עניין של זוויות, את\nקצת גורמת לי להיות, מי\nשאני לא רוצה להיות\nמחפש אותך באחרות. \nתתני לי פעם אחת למות, \nבלי שתלחצי save בסוף\nאני אקום מזה לבד, \nאני לא צריך שיחיזקו לי ת'יד..\n\nאת עושה לי צרות..\n\n____________\nעיבוד והפקה מוזיקלית: יעקב למאי, עדן חסון.\nגיטרות: עידן שניאור.\nקלידים ותכנותים: עדן חסון, יעקב למאי, אור כהן.\nהקלטה ומיקס: יעקב למאי, עדן חסון.\nעריכה דיגיטלית: איציק פיליבה.\n\nעיצוב עטיפה וקליפ מילים : AVOXVISION\nניהול מדיה: אביחי ג׳רפי - ג׳ירף ניו מדיה\nהפצה דיגטלית: mobile 1 music\nיחסי ציבור: עופר מנחם 0507286538\nכל הזכויות שמורות לשרית הפקות בע״מ.",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/y6YpayxgNpY/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/y6YpayxgNpY/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/y6YpayxgNpY/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/y6YpayxgNpY/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/y6YpayxgNpY/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 12,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "y6YpayxgNpY"
    //           },
    //           "videoOwnerChannelTitle": "עדן חסון - Eden Hason",
    //           "videoOwnerChannelId": "UCFmc1S3LEovsxhK73yi6_gg"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "sx4qRHj-xc248DqELSRSXD-oW-I",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi4wMUIwQkI1NEQ1RTFBNTND",
    //         "snippet": {
    //           "publishedAt": "2022-08-13T06:56:00Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "החללית | אודיה – אוהבת אותך בטעות (By Offir Malol)",
    //           "description": "בס\"ד \n\nהשיר השני מתוך הפרויקט המוזיקלי - ויזואלי \"החללית\" של היוצר והמפיק המוזיקלי אופיר מלול\n\nלהזמנת הופעות :050-9494938 אילון \nועדי עובדים כספית יצוג אמנים 03-6886881\n\nלשיר החדש בכל שירותי הסטרימינג: https://fanlink.to/OdeyaOffir\n\nמילים: אודיה אזולאי ואלי פרץ\nלחן: אודיה אזולאי, אופיר מלול\nעיבוד והפקה מוסיקלית: אופיר מלול\n\nכבר עשיתי הכל כדיי שתרצה למות\nכבר נפלט לי אוהבת אותך בטעות\nכבר לבשתי שמלות שהן התעללות לעיניים שלך\n\nכבר שתיתי את הכוס שלי עד התחתית\nבגללך כי ראית אותי רבנית\nואם כבר רבנית אז קרעתי גם את השמיים\n\nאבל עוד לא ניסיתי את השקט\nזה הנשק הכימי שלי\nוזה לא שתיתן לי ללכת\nאו תקום ותיפול בשבילי\n\nאבל מאמי קשה לי לראות אותך ככה ולא לחבק\nהתבלבלת, על מי אתה צועק?\nלאן הלכת? אני זבל אם לא התגעגעת\nאבל מאמי קשה לי לישון איתך ככה ולא לדבר\nא ני שואלת ואתה משקר\nלא מספר לי לאן אתה הולך אני בוכה לפסנתר\nכל הלילה… כל הלילה…\n\nכבר הסברתי לך שאתה מטומטם\nשה”יפים והיפות” שלך מנצלים אותך סתם\nלמסיבות, לקשרים, לשתיה ושמים לב שזה כל מה שיש בך\n\nכבר ניסיתי בכוח למצוא עומקים\nאתה לא איש של שירים אתה איש עסקים\nהאהבה שלי אלייך היא כמו אזיקים לידיים שלך\n\nעוד לא ניסיתי את השקט\nזה הנשק הכימי שלי\nוזה לא שתיתן לי ללכת\nאו תקום ותיפול תיקום תהפוך בשבילי\n\nאבל מאמי קשה לי לראות אותך ככה ולא לחבק\nהתבלבלת, על מי אתה צועק?\nלאן הלכת? אני זבל אם לא התגעגעת\nאבל מאמי קשה לי לישון איתך ככה ולא לדבר\nאני שואלת ואתה משקר\nלא מספר לי לאן אתה הולך אני בוכה לפסנתר\nכל הלילה… כל הלילה…\n\nאוליי זה לא קשור אלייך מה שיש בלב שלי\nאוליי זה הלבד הזה אולי זה הכאב שלי\nכי ההוא שפעם אהבתי התחתן לי\nכי בבית ספר שלי לימדו לבעוט בדשא של השכן שלי\n\nואתה רוקד במסיבות שהן חלום \nזה נראה שאתה שמח ושיש לך מקום\nאף אחד לא מנגב לך את הדמעות בסוף היום\nאתה בודד ואתה ריק מהאמת שלי פתאום\n\nמאמי קשה לי לראות אותך ככה ולא לחבק\nהתבלבלת, על מי אתה צועק?\nלאן הלכת? אני זבל אם לא התגעגעת\nמאמי קשה לי לישון איתך ככה ולא לדבר\nא ני שואלת ואתה משקר\nלא מספר לי לאן אתה הולך אני בוכה לפסנתר\nכל הלילה… כל הלילה…\n\nקלידים, תכנותים וסימפולים: אופיר מלול\nגיטרות: שמעון יחיא\nגיטרות נוספות: זיו גדש\nכינורות וקלידים אתניים: אופיר מלול\nקלידים נוספים: שי כהן, אריאל מלול\nקולות: אריאל מלול, אופיר מלול, אודיה אזולאי\nמיקס ומאסטרינג : שי (VAGUS) כהן\nהופק והוקלט בחללית של OFFIR MALOL\n\nיחסי ציבור:  עופר מנחם 050-7286538 | Menachem.ofer@gmail.com \n\nקליפ:\nהפקת קליפ: MOONLIGHT moonlightprod.team@gmail.com \nתסריט ובימוי: אריאל מלול\nעריכה: יונתן אוחיון ואריאל מלול\nצבע: גיל עמר\nתלת מימד ואפקטים מיוחדים: יונתן אוחיון\nצילום: גיל עמר\nע. צלם : דניאל עמר\nתאורה: שחר אלפי\nסטיילינג: אופיר מילר\nחליפה : H Uonique Boutiqe\nאיפור ושיער: ספיר חג'ג'\nהפקה בפועל: אופיר מלול \n\nהפצה דיגיטלית : D-MUSIC\nבניית קונספט ועיצוב גרפי : עידן מדיה |  https://idanmedia.co.il/\n\nייצוג וניהול אישי: ארומה music, רוברטו בן שושן, פי איי איי פרודקשן אדם אינבסמנט בע״מ. \n\nלהופעות פרטיות: אילון 0509494938\n\nכל הזכויות שמורות למחברים ©\nהליקון ארומה מיוזיק בע\"מ, אפריל  2022\n℗   2022 Helicon Aroma Music Ltd./ P.A.I Production Adam Investment Ltd.",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/Ab0Cesbityg/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/Ab0Cesbityg/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/Ab0Cesbityg/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/Ab0Cesbityg/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/Ab0Cesbityg/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 13,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "Ab0Cesbityg"
    //           },
    //           "videoOwnerChannelTitle": "אודיה - הערוץ הרשמי",
    //           "videoOwnerChannelId": "UCKTbyJY0d-WRwFrXjBtETQQ"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "PLn5EOu1qATT-buPQSm6MS0_OQ0",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi43RDFFNUM4NkUwRDhEMjRD",
    //         "snippet": {
    //           "publishedAt": "2022-08-13T06:50:35Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "אודיה - אינטלקטוערס (Prod. By Triangle)",
    //           "description": "בס\"ד \n\nלשיר החדש בכל שירותי הסטרימינג: https://fanlink.to/IntellectuArs\n\nמילים: אודיה אזולאי\nלחן: עמית מרדכי, עידו נצר, אודיה אזולאי\nהפקה מוסיקלית: עידו נצר, עמית מרדכי  (Triangle) \n\nאני בחצי זוגיות\nויש לי חצי עבודה\nואני חצי מאושרת\nוחצי כפוית טובה\nואתה חצי מאוהב בי\nחצי מאוהב בך\nכותב לי חצאי שירים\nומתסבך לי תצורה\nאתה חכם אתה שואל\nאותי שאלות שבבסיס\nעומדת שאלה אחרת\nאינטליגנציה היא כרטיס\nלהופעות שלך בלילה\nעם בערך אהבה\nובערך ביטחון\nשהוא עצמי אבל בך\n\nבא לי לקום בלילה\nבא לי לישון ביום\nאתה חי לפי הספר\nאני חיה את החלום\nאם אתה כזה חזק\nאז למה אתה בוכה פתאום\nאולי כי אתה שומע\nאת השם שלי בכל מקום\n\nאני שלמה עם כל החצי\nככה זה כשאין ברירה\nואני חצי חרדית\nואני חצי לבושה\nואתה חצי מאמין\nאתה מפרש לי את התורה\nהנשמה שלך מול הגוף\nפעם תורי פעם תורה\nואני חצי בן חצי בת\nואני חצי ראפ ולפעמים לאט\nבקלאס חצי אינטלקטוערס\n\nבא לי לקום בלילה\nבא לי לישון ביום\nאתה חי לפי הספר\nאני חיה את החלום\nאם אתה כזה חזק\nאז למה אתה בוכה פתאום\nאולי כי אתה שומע\nאת השם שלי בכל מקום\n\nתגיד יכול להיות שאתה שרוט?\nהיו לי פה כאלו לפניך\nתגיד יכול להיות שאתה טעות?\nזה היה עושה לי את זה פעם אש עליך\nיפה שאתה מנסה להוריד לי ממני\nיפה שבסוף זה מוריד לי ממך\nיפה שלכולם יש מה להגיד\nאז הרמתי את הווליום ל\n\nמיקס, קלידים, תכנותים: עידו נצר, עמית מרדכי (Triangle)\r\n\nניהול וייצוג אישי: מיכל וייסברג aromamusic\nרוברטו בן שושן ופי איי איי , פרודקשן אדם אינבסמנט בע״מ.\r\nהפקת פוסט: זהבית לגאלי\r\nמפיק בפועל: ניב קקון\r\nשיווק ודיגיטל: דנה קניקובסקי\r\nצילום עטיפה: לידור חדידה\r\nעיצוב עטיפה והפקת קליפ מילים: AVOXVISION\r\nיחסי ציבור: עופר מנחם menahem.ofer@gmail.com | 0507286538\r\n \nהפצה דיגיטלית:  D Music\nניהול מדיה: ג׳ירף ניו מדיה\n\nניהול הפקה: עמוס מסיקה\nלהזמנת הופעות: כספית ייצוג אמנים: 03-6886881\nמופעים פרטים: איילון 050-9494938\n\nכל הזכויות שמורות למחברים ©\nהליקון ארומה מיוזיק בע\"מ, יולי  2022\n℗ 2022 Helicon Aroma Music Ltd.\n©2022 Helicon Aroma Music  Ltd.",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/27KJdsez9Aw/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/27KJdsez9Aw/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/27KJdsez9Aw/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/27KJdsez9Aw/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/27KJdsez9Aw/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 14,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "27KJdsez9Aw"
    //           },
    //           "videoOwnerChannelTitle": "אודיה - הערוץ הרשמי",
    //           "videoOwnerChannelId": "UCKTbyJY0d-WRwFrXjBtETQQ"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "psydUL5Opf-Frv3jQF8Yt-N0v-8",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi5FRkU3NjdFNDBDMjFBNTlF",
    //         "snippet": {
    //           "publishedAt": "2022-05-29T10:48:01Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "אושר כהן  - אהובי לב אדום",
    //           "description": "לשיר החדש בכל שירותי הסטרימינג: https://fanlink.to/OsherAhuvi\n\nמילים ולחן: אושר כהן \nעיבוד והפקה מוסיקלית: אושר כהן\n\nהייתי הנסיך שלך\nהייתי אהובי לב אדום\nהייתי המטען שלך\nהייתי לך בכל האלבום \nאז איך את לא אומרת שלום \nאיך את לא אומרת שלום\nהייתי בשירים שלך\nבסטורי, בכבישים כל היום\nאז איך את לא אומרת שלום\nאיך את לא אומרת שלום\nהייתי נותן לך אותי על מגש \nאם היית אליי חוזרת בשביל שנתחיל מחדש\nכי סך הכול היה לך פה טוב וגם לי היה דבש\nרציתי לדבר איתך \nרציתי ממש \nיפה שלי תביני זה לא עוזר\nכתבתי כבר אלפיים סרנדות על הפסנתר \nוכמה את החזקת אותי \nשעות בלילות שהיה לך קשה לנשום\nאז איך את לא אומרת שלום\nאבל את אומרת להם שאני\nהכול עליי הכול אני אשם בהכול\nוכמה זה לא מכבד שוב אותך לאבד \nלפחד שנחזור ואז שוב ניפרד \nאת יוצאת ושותה אני נכנס ורוקד\nושוב את לא אומרת שלום\nאיך את לא אומרת שלום\nהייתי נותן לך אותי על מגש \nאם היית אליי חוזרת בשביל שנתחיל מחדש\nכי סך הכול היה לך פה טוב וגם לי היה דבש\nרציתי לדבר איתך \nרציתי ממש \nיפה שלי תביני זה לא עוזר\nכתבתי כבר אלפיים סרנדות על הפסנתר \nוכמה את החזקת אותי \nשעות בלילות שהיה לך קשה לנשום\nאז איך את לא אומרת שלום\n\n\n\nקלידים, תכנותים: אושר כהן \nגיטרות: מיקי אביעוז \nעוד: מיקי אביעוז \nכינורות ובגלמה: אושר כהן \nקולות: אושר כהן \n\nמיקס ומאסטרינג: נדב \"נאבי\" אהרוני ואושר כהן\n\nצילום: שי כהן ארבל\nעיצוב עטיפה והפקת קליפ אנימציה: AVOXVISION\n\nניהול אישי: רוברטו בן שושן\nארומה MUSIC ופרודקשן אדם אינוסטמנט בע\"מ\n\nהפקת פוסט: זהבית לגאלי\nיחסי ציבור: עופר מנחם 050-7286538 | Menachem.ofer@gmail.com\n\nהזמנת הופעות: נויה 050-2292764\n\nהפצה דיגיטלית: D-Music\n\n℗ כל הזכויות שמורות למחברים © \nהליקון ארומה מיוזיק בע\"מ, פרודקשן אדם אינוסטמנט בע\"מ,  אפריל 2022\n℗ 2022 Helicon Aroma Music Ltd./ P.A.I Production Adam Investment Ltd.\n© 2022 Helicon Aroma Music Ltd./ P.A.I Production Adam Investment Ltd.\n\n#אושרכהן #אהובילבאדום",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/IVKlVoHtrKo/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/IVKlVoHtrKo/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/IVKlVoHtrKo/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/IVKlVoHtrKo/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/IVKlVoHtrKo/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 15,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "IVKlVoHtrKo"
    //           },
    //           "videoOwnerChannelTitle": "Osher Cohen Music",
    //           "videoOwnerChannelId": "UCEvY_JhVK0Z32GAo6uG-_YA"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "VnownRlpggLL0-rZX4g58NBWSo4",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi4zNDY1MzYwMjYwQUE2QTlD",
    //         "snippet": {
    //           "publishedAt": "2022-07-08T13:18:31Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "אייל גולן & עדן בן זקן - אלף כוכבים (Prod. by Stav Beger)",
    //           "description": "מילים ולחן: רון ביטון, סתיו בגר, איתי שמעוני ועדן בן זקן\nעיבוד והפקה מוסיקלית: סתיו בגר\n\nאייל גולן:\nייצוג: ליאם הפקות בע\"מ 03-6416415\nניהול אישי: אודי גואטה 050-6347494\nיחסי ציבור: רן רהב תקשורת ויחסי ציבור – לינור נוי 052-6714411\nנתנאל מויאל יחסי-ציבור 050-8925363\n\nעדן בן זקן:\nניהול אישי ורפרטואר: לירון פרנקו | Liron@sarithafakot.com\nייצוג בלעדי: שרית הפקות בע\"מ | 04-9816716\nיחסי ציבור: עופר מנחם תקשורת ויחסי ציבור | menachem.ofer@gmail.com |  050-7286538\n\nמילים:\nאני שרוף על הלב הטוב שלך\nהוא קצת חצוף\nומה עובר בראש שלך\nאני שרופה\nואיך אתה יודע אני חצופה\nאז מה התוכניות שלך\n \nבסופש הזה אני שומע רק אותך\nבסופש הזה אני שומעת רק אותך\nבסופש הזה אני הולך רק איתך\nבסופש הזה אני איתך אני איתך\n \nאלף כוכבים עלייך מסתכלים\nאיך שאת רוקדת\nאני על עננים כמה מבטים\nעוד שניה נופלת\n \nאם יש אותך אז יש הכל\nושנינו יחפים רוקדים פה על החול\nאם יש אותך אז יש הכל\nאיך אני אוהבת\nתחזיק חזק שלא ניפול\n \nזה כמו כישוף\nכל יום מחדש איתך\nזרמים בגוף\nאז מה אתה עושה לי מה\nאיתך חיים\nאני מוכן לעוף איתך\nחיים שלמים\nאז בוא ורק תזרוק מילה\n \nאיי לאב יו איי לאב יו\nאיי ניד יו איי ניד יו\n\nקלידים ותכנותים: סתיו בגר\nקלידים אתניים: אור כהן\nמיקס ומאסטר: סתיו בגר\nהוקלט באולפני ״לופו מיוזיק״\nצילום ועיצוב עטיפה: יונתן גירץ\n\nוידאו הופק ע״י: ״גירץ הפקות״\n\nבמאי ומפיק ראשי: יונתן גירץ\nתסריט: יונתן גירץ, מאי דיין ומישל נאור\nצלם ראשי: דניאל קדוש\nתאורן ועוזר צלם: אופיר נצר\nצילום סטילס: דניאל סטרבו\nצילום וידאו (מאחרי הקלעים): עומרי יוסף\nפרה הפקה: רן קפלן ויהודה קפלן\nעריכה: יונתן גירץ ודניאל קדוש\nאפטר אפקט: תומר שואל Tomash\nצבע: הקטור ברבי\nצילום רחפן: שלומי דעי\nעיצוב תאורה יאכטה: שובל בן לולו\nסטיילינג אייל גולן: ישראל רחמני\nעיצוב עטיפה: יונתן גירץ\nצילום עטיפה: דניאל סטרבו\n\nתודה מיוחדת לאילן בוסקילה מחוף טולום באילת\n\nלאינסטגרם של טולום ביץ' אילת - https://instagram.com/tulum_beach1?igshid=YmMyMTA2M2Y=\n\nלאינסטגרם של יאכטה טולו - \nhttps://instagram.com/tulum.yacht?igshid=YmMyMTA2M2Y=\n\nכל הזכויות שמורת למחברים ©\nהליקון ארומה מיוזיק, שרית הפקות, ליאם הפקות,  מאי, 2022\n 2022 Sarit Hafakot Ltd. / Helicon Aroma Music Ltd. / Liam Productions Ltd.©  &℗\n\nהפצה דיגיטלית:  Mobile1 Music",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/n3GL1Ry8quA/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/n3GL1Ry8quA/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/n3GL1Ry8quA/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/n3GL1Ry8quA/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/n3GL1Ry8quA/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 16,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "n3GL1Ry8quA"
    //           },
    //           "videoOwnerChannelTitle": "EyalGolanOfficial",
    //           "videoOwnerChannelId": "UCrI0Slej0fiiwYPhR1EmFBw"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "8YJgUGSGTJEAyD8yXQOUQj-40zU",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi4yRjU0MzcwMkYwRkVDNDhC",
    //         "snippet": {
    //           "publishedAt": "2022-02-13T09:23:26Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "שחר סאול - דובשנייה מארח את אגם בוחבוט ונורוז (Prod. by Ishta, Triangle)",
    //           "description": "ייצוג בלעדי: ROMS & GAGA Management  אורון כלפון ויואב גרוס\nיצירת קשר והזמנת הופעות: גאגא בוקינג - 03-6056511 | אופיר - 050-849-9347\nיחסי ציבור ואסטרטגיה תקשורתית זאביק דרור - עדי: Adi@zevikdror.com | 0506800213\nשיווק דיגיטלי: יקיר ונה הפקות - Y.V Productions\n\nלשירותי הסטרימינג - https://fanlink.to/ShaharDuvshania\n\nתמצאו את שחר גם פה\nInstagram: https://www.instagram.com/shaharsaul/\nFacebook: https://www.facebook.com/congoboyyy/\n\n:קרדיטים שיר\nמילים: שחר סאול, רון ביטון, אור נורוזי, רון נשר, אפי אישטה\nלחן: שחר סאול, רון ביטון, אור נורוזי, אפי אישטה, רון נשר\nביצוע: שחר סאול, אגם בוחבוט, אור נורוז\nעיבוד: אפי אישטה, עמית מרדכי, עידו נצר (Triangle)\nמיקס: אפי אישטה, עידו נצר ועמית מרדכי  (Triangle)\nמאסטר: עמרי בר הוד\n\nVideo Produced by - ROMS\nhttps://www.roms.co.il/\nhttps://www.facebook.com/RomsStudios/\nhttps://www.instagram.com/roms_studios/\n\nבימוי וניהול שחר - רומן בוצ'אצקי | Roman Buchatsky   \nhttps://www.instagram.com/roman_buchatsky/\nמפיקה ראשית - גלית בורנצוויג\nהפקה בפועל - ספיר כהן\nצלמים - הדר כהן, טום כהן\nתאורן ראשי - יובל צוקי לסטר\nסט דקורטור - אדם גזלה\n\nעריכה ופוסט פרודקשן - WAY\nhttps://www.instagram.com/way_studios\nhttps://waystudio.co.il/\nמפיקת פוסט - נויה מור דימנד\nצביעה - יובל גור\nעריכות נוספות: טל חיים\n\nהלבשה אגם בוחבוט - ראובן כהן\nע.הלבשה אגם - דפנה רחום\nאיפור אגם בוחבוט - אל ידידיה\nשיער אגם בוחבוט - רן קריסי\nהלבשה שחר סאול ונורוז - יורה בורמטנוב\nסטיילינג קאסט - שני סבן אור\nע. סטיילינג - עמית בן נון\nאיפור ושיער - עדי שרעבן וקרן ישלח\nע.הפקה - סבסטיאן מיזדרחי, מוחמד כחיל\nצילום סטילס - עידן שיסטר, אור דנון\nקאסט - עמית גואטה, עומר מליחי, בר רולוב, ליאן עדי, ירדן חכם, שילת בסיל, שיה בן דוד, רומי סיסו, אור צעידי, דניאלה גוטמן, עדי אימנוט ביטאו אנדרגה, אלישבע מלכה, טוי קמפבל, עידו אטיאס, אלעד רבי, שחף ארבל, סיבלי סלע\n\nעיצוב עטיפה - Avoxvision\nהפצה דיגיטלית: Mobile1 Music\n\nקרדיטים הלבשה:\nפקטורי 54\nMother Of All\n\nתודות מיוחדות:\nמועדון \"השקט\"- אורן ואירה דולפין, מושית דיין.\nפיטוסי שרותי מצלמה\nעומר אלוני\nקוסטיה וסילקוב\nאור זוהר\n\nמילים:\nפויה \nילדה רעה של טיק טוק בואי לאבויה \nלא מתאמצת לא אכפת כמה צפו בה\nרודפת מותגים אז היא דוהרת כמו פומה\nוזה הזוי הא?\nדופקת לי ריקוד רק להדליק פה את האקס\nמאמי תרגעי בלי להתאמץ יש פלקס\nיודעת ת'מילים בעל פה כל טקסט\nנוהגת לבלות אבל אין לה ברקס\nרוצה לשתות? \nתביא בלוגה\nמעביר הכל אז היא קוראת לי באבאלובה\nבית טוב \nלא נגעו בה\nהפנים מפה אבל השאר מקובה. (שיייש!) \n\nמה אתה קורא לי יפיפה \nמותק תרגע תקשיב שניה\nאני ואת ביחד מניה \nאנחנו כמו ביטקוין עליה\nלמי אתה קורא דובשניה\nבוא אני אזרוק עליך אלפיה\nתראי מה את עשית פה מה נהיה\nאפילו גם השמש מזיעה יה יה. \n\nהיא באה לבלות \nאני רואה לה בעיניים\nבאה עם עוד ארבע חברות מגבעתיים\nשתתה יותר מידי והיא צריכה קצת מים\nכולם כבר הבינו שהיא לא שמה.  צומת לב\nכדאי שתשב\nלא מסוג הבחורות שתשים לך עוקב\nהיא כל היום בטיק טוק יש לה מאהב\nלא מחפשת כסף היא זורקת מאה אלף \nיציאות בערב רוצה לשתות בלוגה\nאין לה יומולדת כל הנרות על העוגה\nהלכה פתחה מימונה על הלגונה \nהכי יפה בפער\nיש לה לוק שלא נגעו בה \n\nמה אתה קורא לי יפיפה \nמותק תרגע תקשיב שניה\nאני ואת ביחד מניה \nאנחנו כמו ביטקוין עליה\nלמי אתה קורא דובשניה\nבוא אני אזרוק עליך אלפיה\nתראי מה את עשית פה מה נהיה\nאפילו גם השמש מזיעה יה יה. \n\nיפיפה.....\nיפיפה יה יה \nדובשניה יה יה \nיפיפה יה יה \nאת , דובשניה \nלמי אתה קורא דובשניה? \n\nמה אתה קורא לי יפיפה \nמותק תרגע תקשיב שניה\nאני ואת ביחד מניה \nאנחנו כמו ביטקוין עליה\nלמי אתה קורא דובשניה\nבוא אני אזרוק עליך אלפיה\nתראי מה את עשית פה מה נהיה\nאפילו גם השמש מזיעה יה יה.\n\nבחייייאת מי קרא עד לפה? תכתבו בתגובות",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/0aoNAe3BhAg/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/0aoNAe3BhAg/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/0aoNAe3BhAg/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/0aoNAe3BhAg/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/0aoNAe3BhAg/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 17,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "0aoNAe3BhAg"
    //           },
    //           "videoOwnerChannelTitle": "שחר סאול - העמוד הרשמי Shahar Saul",
    //           "videoOwnerChannelId": "UCDM73XycezlUMUWdCdFm0Yw"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "Kbsc8r5J3pZxyy2Np43q6dsJCQI",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi4xMTE0RDU2NTlEMTkxNzZB",
    //         "snippet": {
    //           "publishedAt": "2022-07-08T13:18:43Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "بستوني & نورس الحنين - روح الروح /  Bastony Ft. Nawras Al Hanin - Ro7 El Ro7",
    //           "description": "البوم بستوني الجديد 2022 - انت\nBastony New Album 2022 - Enty \n اغنية رقم 3 من البوم بستوني الجديد 2022 - انت\n\nللحجز والاستفسار يرجى التواصل على : Management & Booking\n ( Bastony@empr.co.il )\n\nكلمات - بستوني - Lyrics - Bastony\nالحان :  بستوني  - Composer : Bastony \nاداء بستوني & نورس الحنين // Performed : Bastony & Nawras al hanin\nMusic Production mixing and mastering By - youngest \nتوزيع - Youngest\n\nالاشتراك في القناة \n@bastony \n\nبستوني انستغرام -Bastony Instgram\n https://www.instagram.com/bastony__/\n\nنورس انستغرام - Nawras Instgram\n https://instagram.com/nawras_official?igshid=YmMyMTA2M2Y=\n\nالدكتور - شادي وتد\nhttps://instagram.com/shadi_wat?igshid=YmMyMTA2M2Y=\n\n\nموال - \nما تيجي تقلي مشتاق\nانت الي اخترت لفراق  \nبتتذكر شو كنت تقلي \n\nلازمة - \nبحبك كيف ما انتي \nيا روح الروح\nبلاقيكي وين ما كنتي \nما بترك قلبك مجروح \n\nبدونك لا ما بمشي\nتعال خليك ما تروح\nكرمالك بحرق كلشي\nوبخلي حبنا مسموح\n\nبيت- 1\nبحبك كيف مانتي ما تغيري شي\nلو نرجع بزمن ، لعطيتك كل شي \nما خطرت هشي قلبي الي ختار يمشي\nتمنيتك ترجعيلي كل ما وقعت رمشة\n \nيا ليلي ، قصتنا خلصت زمان \nرحتي وما تركتي غير الألم\nلسا حبنا ما خلص كلام\nما ، بقيقي ، ولا شي حتي سلام\n\nسي بارت - \nيا قلبي يا ليل بنص اليل \nتعبني الشوق ما فيني حيل\nتصلتلو ، وقلتلو\nلسا قلبي ناطرو \n\nلازمة - \nبحبك كيف ما انتي \nيا روح الروح\nبلاقيكي وين ما كنتي \nما بترك قلبك مجروح \n\nبدونك لا ما بمشي\nتعال خليك ما تروح\nكرمالك بحرق كلشي\nوبخلي حبنا مسموح\n\n\nبيت -2 \nهاتي نرجع بزمان\nيا قلبي لوين\nكيف مكلشي كان \nيا نور العين\nدورت عليكي بكل مكان \nمن وين الوين \nكيف عليكي هان حان ولاوان\n\n\nما يحكو انتي الي من الاساس\nبوعادك عبارة عن ضربة فاس براس\nما قدرت انساكي حتي بعد مية كاس\nكل ليلة اتجاهك بيشدني  الاحساس\n\nبتعرفي هشي قلبي دايب فيكي \nانطريني كل ليلة مستعد جيكي\nعصدري اغفيكي اهمسلك اني بحب \nكلشي فيكي يا قمر قلبي بس ليكي\n\nسي بارت -  \nيا قلبي يا ليل بنص اليل \nتعبني الشوق ما فيني حيل\nتصلتيلو ، چلتلو\nلسا قلبي ناطرو \n\nلازمة-\nبحبك كيف ما انتي \nيا روح الروح\nبلاقيكي وين ما كنتي \nما بترك قلبك مجروح \n\nبدونك لا ما بمشي\nتعال خليك ما تروح\nكرمالك بحرق كلشي\nوبخلي حبنا مسموح\n\nDigital distribution: EM-Music",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/vAVcl9s22A8/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/vAVcl9s22A8/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/vAVcl9s22A8/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/vAVcl9s22A8/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/vAVcl9s22A8/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 18,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "vAVcl9s22A8"
    //           },
    //           "videoOwnerChannelTitle": "بستوني - Bastony",
    //           "videoOwnerChannelId": "UCMlRdSZmhssHwtVyTTOs83g"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "dyCpw6lQYh8bhuEMqHWfilvfAFA",
    //         "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi5EMzgyRkY2QzI3NjdDMDM4",
    //         "snippet": {
    //           "publishedAt": "2022-07-08T13:18:15Z",
    //           "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
    //           "title": "עומר אדם – תמיד שלך (Prod By. Tamar Yahalomy & Yonatan Kalimi)",
    //           "description": "מילים ולחן: תמר יהלומי ויונתן קלימי\nעיבוד והפקה מוזיקלית: תמר יהלומי ויונתן קלימי\n\nלא משנה לי איפה \nהפכתי ת׳עולם ואין בו \nמישהי שתראה אותי\nכמו שאת\n\nולגדול איתך ביחד \nשני ילדים בלי פחד \nמול הנוף של אלוהים \nביום שבת\n\nאני הלחן את מילים\nאת פעימות הלב שלי  \nסתם חיוך של בוקר בלי סיבה …\n\nיש לי מיליון סיבות\nלומר אני אוהב אותך \nואיך מכל הנשמות זכיתי בך\nמלאך שלי\nאז אל תדאגי\nכי יש לי מיליון פרחים \nרק לקשט ת'לב שלך\nבשביל של החיים אני אלך איתך\nתמיד שלך\nתמיד שלך\n\nוזה שקוף כמו מים\nשנהיה לנצח שניים\nאני אחרוט גם על שמיים \nבלבן\n\nומי צריך מסגרת\nנחיה פשוט כמו סרט\nאת תהיי כוכבת ואני קהל\n\nאני הספר את תווים\nאת פעימות הלב שלי\nסתם נשיקה קטנה לפני שינה…\n\nיש לי מיליון סיבות\nלומר אני אוהב אותך \nואיך מכל הנשמות זכיתי בך\nמלאך שלי\nאז אל תדאגי\nכי יש לי מיליון פרחים \nרק לקשט ת'לב שלך\nבשביל של החיים אני אלך איתך\nתמיד שלך\nתמיד שלך\n\nקלידים ותכנותים: תמר יהלומי ויונתן קלימי\nגיטרות, בס וכלי מיתר: מיקי אביעוז\nקולות: עומר אדם תמר יהלומי יונתן קלימי\nמיקס ומאסטרינג: איציק פיליבה\nהוקלט באולפני: T.Y STUDIO\n\nצילום ועריכת קליפ – גל איסייב\nעיצוב עטיפה – AVOXVISION\n\nניהול אישי עומר אדם: P.A.I LTD\nהפקה בפועל: יעל זוהר\nלהזמנת הופעות: 03-9667755\npai@adamltd.co.il P.A.I LTD© 2020\n\nיחסי ציבור: חגית נוביק סלומון & ירון כהן \nהפצה דיגיטלית: D-Music",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/PburljbL-fo/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/PburljbL-fo/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/PburljbL-fo/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/PburljbL-fo/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/PburljbL-fo/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Playlist Music USA - UK",
    //           "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
    //           "position": 19,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "PburljbL-fo"
    //           },
    //           "videoOwnerChannelTitle": "עומר אדם - הערוץ הרשמי",
    //           "videoOwnerChannelId": "UCo4y7A6EF2tZ1Q2Oxx64HNQ"
    //         }
    //       }
    //     ],
    //     "pageInfo": {
    //       "totalResults": 200,
    //       "resultsPerPage": 20
    //     }
    //   }

    // const overall = {
    //     "kind": "youtube#playlistItemListResponse",
    //     "etag": "1ksAdXESLbaoEyYswhQemjeqjbs",
    //     "nextPageToken": "EAAaBlBUOkNCUQ",
    //     "items": [
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "r7pzU5je81kyZdW8tmJs0xvHTe4",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy5DQUZGM0M0RkI3Mzk1Njky",
    //         "snippet": {
    //           "publishedAt": "2023-06-05T18:46:53Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "FAST X | Angel Pt. 1 (Official Video) - NLE Choppa, Kodak Black, Jimin of BTS, JVKE, & Muni Long",
    //           "description": "FAST X | Angel Pt. 1 (Official Music Video) - NLE Choppa, Kodak Black, Jimin of BTS, JVKE, & Muni Long\n\nAngel Pt 1. by NLE Choppa, Kodak Black, Jimin of BTS, JVKE, & Muni Long \nOut Now: https://fastx.lnk.to/angel-pt1\nFAST X Original Motion Picture Soundtrack: https://fastx.lnk.to/soundtrack\n\nFollow NLE Choppa:\nTxt: (901)245-5603\nWeb: https://nlechoppa.com\nEmail:  https://nlechoppa.com/mailing-list\nInstagram: https://instagram.com/nlechoppamusic\nFacebook: https://facebook.com/nlechoppamusic\nTwitter: https://twitter.com/nlechoppa1\nSnapchat: https://snapchat.com/add/nlechoppamusic\nTikTok: https://www.tiktok.com/@nlechoppamusic\nTriller: https://triller.co/@nlechoppa\n\nFollow Kodak Black\nYouTube: https://youtube.com/c/KodakBlack1K\nInstagram: https://www.instagram.com/kodakblack/\nTikTok: https://www.tiktok.com/@kodakblack\n\nFollow Jimin of BTS\nYouTube: https://www.youtube.com/@HYBELABELS\nInstagram: https://www.instagram.com/j.m\nTikTok: https://www.tiktok.com/@bts_official_bighit\n\nFollow JVKE\nYouTube: https://youtube.com/@JVKE\nInstagram: https://www.instagram.com/itsjvke/\nTikTok: https://www.tiktok.com/@jvke\n\nFollow Muni Long\nYouTube: https://youtube.com/@MuniLong\nInstagram: https://www.instagram.com/munilong/\nTikTok: https://www.tiktok.com/@munilong\n\nFollow The Fast Saga\nYouTube: @TheFastSaga \nInstagram: https://www.instagram.com/thefastsaga/ \nTikTok: https://www.tiktok.com/@thefastsaga\n\nCREATIVE TEAM:\n\nDirectors: Stripmall @stripmallproductions\nProduction Company: Dreambear @drmbear\nExecutive Producers: Evan Brown & Dave Gelb @evanmbrown @allthedave\nProducers: Nicolette Moreno & Jagger Corcione @nicsolit @burberryboxers\nDirector of Photography: Brett Arndt @b.a.cinema\nEditor: Ross Constable @ross_constable \nColorist: Bryan Smaller of Company3 @bryansmaller of @company_3\nVFX: Stripmall, Surpreeze & Thermonuclear @stripmallproductions @surpreeze @thermonuclear.tv\n\nLabel: Artist Partner Group @artistpg\n\nSVP Marketing, APG: Corey “Notes” Calder @coreynotes\nVideo Commissioner, APG: Enzo Borrelli @enzo.apg\n\nLYRICS:\n\n(Hook)\nAngel don’t fly so close to me\nI pull you down eventually\nYou don’t want to lose those wings\nPeople like me break beautiful things\nAngel don’t fly so close to me\nI’m what you want, not what you need\nYou don’t want to lose those wings\nPeople like me break beautiful things\n\n(Kodak Black)\nI give it all up to ease your pain yeah I would do that all day\nI stepped back from the game to keep you out of harm’s way\nRisk it all for the game but it take more than one person\nTwo people one til I feel the same when you hurting\nI was still in middle school when Givens fled the whip\nBodies were dropping before we ever knew bout the truck\nWe gonna be family no matter what way this go brother\nFrom the ugly corner where everybody betray each other\nI let you hang in the jets\nI let you bang with my set\nPut you before my own flesh\nLike why’d I ever do that\nMe and the streets got soul ties\nThe devil on my shoulder he whisper but I told him\n\n(Hook)\nAngel don’t fly so close to me\nI pull you down eventually\nYou don’t want to lose those wings\nPeople like me break beautiful things\nAngel don’t fly so close to me\nI’m what you want, not what you need\nYou don’t want to lose those wings\nPeople like me break beautiful things\n\n(NLE Choppa)\nGeneration curses of disloyalty\nWe breaking that\nLost my dog\nGot him back\nTook him in\nWe shakin’ back\n\n#NLEChoppa #FASTX #FASTXSoundtrack #AngelPt1\n\nStruggle never broke us\nIt just made us who we is\nLosses taught a lot of lessons\nMade the wins feeling like blessings\nFamily all that you got at the end\nHope you get the message\nI ain’t trying to make it without you\nBut if I got to then I got you\nThis aint about me it’s about the whole cake\nWe can take a slice on a different day\nJust keep your plate\nGod, Family, Money, Goals\nHeart, Mind, Body, Soul\nWatching out for street signs on a narrow road\nRainbows at the end\nI’m praying for a pot of gold and some angels\n\n(Pre-Chorus)\nDon’t you know (x4)\nI will never let you down\nNo, I’ll never be perfect\nNever want to see you hurting\nYou should go (x2)\nGet away fast\nA hundred on the dash tonight\nWish it didn’t have to be this way\n\n(Hook)\nAngel don’t fly so close to me\nI pull you down eventually\nYou don’t want to lose those wings\nPeople like me break beautiful things\nAngel don’t fly so close to me\nI’m what you want, not what you need\nYou don’t want to lose those wings\nPeople like me break beautiful things",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/jp0kTw1TCy0/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/jp0kTw1TCy0/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/jp0kTw1TCy0/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/jp0kTw1TCy0/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/jp0kTw1TCy0/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 0,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "jp0kTw1TCy0"
    //           },
    //           "videoOwnerChannelTitle": "NLE CHOPPA",
    //           "videoOwnerChannelId": "UCWICXNlSLc7eeNazpzUZcLg"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "ZRWBgKw2EdK5dAJqSaVuaP8PWds",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy5BMEMyREY0NjNCOTQ0MTkz",
    //         "snippet": {
    //           "publishedAt": "2023-04-29T18:59:52Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "David Kushner - Daylight (Official Music Video)",
    //           "description": "“Daylight” out now on all platforms: https://davidkushner.lnk.to/daylight\n\nLyrics:\n\n[Verse 1]\nTelling myself I won't go there\nOh, but I know that I won't care\nTryna wash away all the blood I've spilt\nThis lust is a burden that we both share\nTwo sinners can't atone from a lone prayer\nSouls tied, intertwined by pride and guilt\n\n[Pre-Chorus]\n(Ooh) There's darkness in the distance\nFrom the way that I've been livin'\n(Ooh) But I know I can't resist it\n\n[Chorus]\nOh, I love it and I hate it at the same time\nYou and I drink the poison from the same vine\nOh, I love it and I hate it at the same time\nHidin' all of our sins from the daylight\nFrom the daylight, runnin' from thе daylight\nFrom the daylight, runnin' from the daylight\nOh, I love it and I hatе it at the same time\n\n[Verse 2]\nTellin' myself it's the last time\nCan you spare any mercy that you might find\nIf I'm down on my knees again?\nDeep down, way down, Lord, I try\nTry to follow your light, but it's nighttime\nPlease don't leave me in the end\n\n[Pre-Chorus]\n(Ooh) There's darkness in the distance\nI'm beggin' for forgiveness\n(Ooh) But I know I might resist it, oh\n\n[Chorus]\nOh, I love it and I hate it at the same time\nYou and I drink the poison from the same vine\nOh, I love it and I hate it at the same time\nHidin' all of our sins from the daylight\nFrom the daylight, runnin' from the daylight\nFrom the daylight, runnin' from the daylight\nOh, I love it and I hate it at the same time\nOh, I love it and I hate it at the same time\nYou and I drink the poison from the same vine\nOh, I love it and I hate it at the same time\nHidin' all of our sins from the daylight\nFrom the daylight, runnin' from the daylight\nFrom the daylight, runnin' from the daylight\nOh, I love it and I hate it at the same time\n\n\nProduction Company / Altar 8 Studio\n\nCREW\nDirector/Dp - Luke Shaw & Landon Juern\n1st AC - Aaron Roams\nSteadicam - Zachary Stanke\nPhotographer - Lizzy Juern\nVideographers - Matthew Vietzke & Gerado Manuel Ortiz\n\nPOST\nVfx artist - Ryan Game\nEditor - Landon Juern\nColorist - Luke Shaw\n\nTALENT\nMan on fire - Yonel Cohen\nBoy - Leo Brien\nArtist - David Kushner\n\nPRODUCTION:\nProducer - Rob Kirwan\nMixing - Jacob Morris / GetMXD \nMastering - Jacob Morris / GetMXD \nDolby Atmos - Jacob Morris / GetMXD\n\nWRITERS:\nDavid Kushner\nHayden Hubers \nJeremy Fedryk\nJosh Bruce Williams \n\nARTWORK:\nJon Taylor Sweet\n\nMANAGEMENT:\nBrent Shows\n\nDavid Kushner Socials \n•  Instagram: https://www.instagram.com/david.kushn...\n•  TikTok: https://www.tiktok.com/@davidkushner?...\n•  Twitter: https://twitter.com/davidkushner_\n•  YouTube:   \n / followkush  \n•  Facebook: http://facebook.com/davidkushnermusic\n•  Website: https://davidkushnermusic.com/\n\nMiserable Music Group, LLC",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/MoN9ql6Yymw/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/MoN9ql6Yymw/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/MoN9ql6Yymw/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/MoN9ql6Yymw/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/MoN9ql6Yymw/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 1,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "MoN9ql6Yymw"
    //           },
    //           "videoOwnerChannelTitle": "DavidKushnerVEVO",
    //           "videoOwnerChannelId": "UCa4a-hXHI8bitNXnvyZNzEQ"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "_lO1MuDmZj91wxB9yApvEuKyKLQ",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy41NkRCODg4QzIyNjQ0REFG",
    //         "snippet": {
    //           "publishedAt": "2023-07-20T19:18:04Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "Jenny Lewis - Psychos (Official Video)",
    //           "description": "Official Video for \"Psychos\" by Jenny Lewis \n\nListen to Psychos from the new album Joy’All out now: https://JennyLewis.lnk.to/JoyAllID\n\nJoy’All Tour! Tickets are on sale now: https://JennyLewis.lnk.to/TourID \nWho The F Is Jenny Lewis? Listen: https://JennyLewis.lnk.to/WhoTheFID \n\nConnect with Jenny Lewis: \nhttps://www.jennylewis.com/ \nhttps://JennyLewis.lnk.to/InstagramID \nhttps://www.tiktok.com/@jennylewis \nhttps://twitter.com/jennylewis \nhttps://www.facebook.com/JennyLewis/ \nSign up for updates here: https://JennyLewis.lnk.to/EmailID \n\n#JennyLewis #JoyAll  #Psychos\n\nMusic video by Jenny Lewis performing Psychos. Blue Note Records; © 2023 Jenny Lewis, under exclusive license to UMG Recordings, Inc\n\nhttp://vevo.ly/krh9a1",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/vlNVtA6Lgu4/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/vlNVtA6Lgu4/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/vlNVtA6Lgu4/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/vlNVtA6Lgu4/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/vlNVtA6Lgu4/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 2,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "vlNVtA6Lgu4"
    //           },
    //           "videoOwnerChannelTitle": "JennyLewisVEVO",
    //           "videoOwnerChannelId": "UCfGBDWQJlNa8m6rmgCyswPQ"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "zUp5wasHCzqNNvLm_SitfoHO3i4",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy4zM0U5QzA1NUJENjE3Qjcw",
    //         "snippet": {
    //           "publishedAt": "2023-07-12T18:11:07Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "Olivia Rodrigo - vampire (Official Music Video)",
    //           "description": "Listen to vampire out now: https://OliviaRodrigo.lnk.to/vampire\n \nStore: https://OliviaRodrigo.lnk.to/store\n \nCreate a Short to vampire: https://yt.be/vampireOR2\n \nFollow Olivia Rodrigo:\nInstagram: https://instagram.com/oliviarodrigo\nTwitter: https://twitter.com/Olivia_Rodrigo\nFacebook: https://www.facebook.com/OliviaRodrigoOfficial/\nYouTube: https://www.youtube.com/@OliviaRodrigo\nTikTok: https://tiktok.com/@livbedumb\nDiscord: https://discord.gg/livieshq\n \nPresave GUTS: https://OliviaRodrigo.lnk.to/GUTS\n \nLYRICS\n \nhate to give the satisfaction asking how you’re doing now\nhow’s the castle built off people you pretend to care about\njust what you wanted\nlook at you, cool guy, you got it\n \ni see the parties and the diamonds sometimes when i close my eyes\nsix months of torture\nthat you sold as some forbidden paradise\ni loved you truly\ngotta laugh at the stupidity\n \ncuz i’ve made some real big mistakes\nbut you make the worst one look fine\ni should’ve known it was strange\nyou only come out at night\ni used to think i was smart\nbut you made\nme look so naive\nthe way you sold me for parts\nas you sunk your teeth into me, oh\nbloodsucker, famefucker\nbleeding me dry like a goddamn vampire\n \nevery girl i ever talked to told me you were bad, bad news\nyou called them crazy god i hate the way i called them crazy too\nyou’re so convincing\nhow do you lie without flinching\n(how do you lie, how do you lie, how do you lie)\n \noh, what a mesmerizing, paralyzing, fucked up little thrill\ncan’t figure out just how you do it and god knows i never will\nwent for me and not her\ncuz girls your age know better\n \ni’ve made some real big mistakes\nbut you make the worst one look fine\ni should’ve known it was strange\nyou only come out at night\ni used to think i was smart\nbut you made me look so naive\nthe way you sold me for parts\nas you sunk your teeth into me, oh\nbloodsucker, famefucker\nbleeding me dry like a goddamn vampire\n \nyou said it was true love\nbut wouldn’t that be hard\nyou can’t love anyone\ncuz that would mean you had a heart\ni tried you help you out\nnow i know that i can’t\ncuz how you think’s the kind of thing\ni’ll never understand\n \ni’ve made some real big mistakes\nbut you make the worst one look fine\ni should’ve known it was strange\nyou only come out at night\ni used to think i was smart\nbut you made me look so naive\nthe way you sold me for parts\nas you sunk your teeth into me, oh\nbloodsucker, famefucker\nbleeding me dry like a goddamn vampire\n \nCREDITS\n \nDirected by Petra Collins (IG: @petrafcollins)\nProduced by Tiffany Suh (IG: @tiffanysuh)\nProduction Supervising by Sina Pars (IG: @beingsinapars)\nProduction Coordinating by Nina Nwachukwu (IG: @ninamarien)\n1st AD - Mati Almanso (IG: @matinil)\nDP - Russ Fraser (IG: @russfraser)\nGaffner - Nick Durr (IG: @dicknurr)\nKey Grip - Luke Poole (IG: @lanative_grip)\nProduction Design by Nicholas des Jardins (IG: @nicholasdesjardins)\nStunt Coordinator - Pat Romano (IG: @romano_stunts)",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/RlPNh_PBZb4/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/RlPNh_PBZb4/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/RlPNh_PBZb4/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/RlPNh_PBZb4/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/RlPNh_PBZb4/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 3,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "RlPNh_PBZb4"
    //           },
    //           "videoOwnerChannelTitle": "OliviaRodrigoVEVO",
    //           "videoOwnerChannelId": "UCxE5jEls-T0QtlTHT8lI1lw"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "z2LuC1X22iWeM1djJIcef4NbIQc",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy5DQUE3MjAwQjQ1QTYzNDk1",
    //         "snippet": {
    //           "publishedAt": "2023-06-14T19:00:23Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "Melanie Martinez - VOID (Official Music Video)",
    //           "description": "'PORTALS' AVAILABLE Now: https://MelanieMartinez.lnk.to/PORTALSID \nShop vinyl, merch, and more: https://store.melaniemartinezmusic.com/\n\nCredits\nDirected by Melanie Martinez\n \nExecutive Producer: Wes Teshome\n Production Service Company: Dojohouse\nProducer: Abi Perl\nExecutive Producer: Danny Pollack\nProduction Manager: Autumn Maschi\nProduction Coordinator: Chris San Andres\n1st AD: Jasmine Thomas\nDirector of Photography: Nyk Allen\nProduction Designer: Wesley Goodrich\nStunt Coordinator: Charles Gresham \n \nPost:\nVFX and Design by Carbon\nMatthew McManus - Exec. Producer\nTina Starkweather - Head of Production\nMatthew Stevens - Creative Director\nNathan Lueptow - Senior Producer\n2D Lead - Michael Sarabia\nVFX Supervisor - Isaac Irvin\nCG Asset Lead - Will Moody\nAnimation Lead - Alex Rumsa\nColor Exec. Producer: Natalie Westerfield\nColorist: Briana Brackett\nEdit Company: Digital Sword\nEditor: Aris Cline\n \nGlam:\nCostume Design: Melanie Martinez \nCostume Construction: Muto Little\nKey Prosthetics &Key Special Makeup Effects: Malina Stearn\nStylist: Brett Alan Nelson\nKey Hair: William Scott Blair\n \nChoreographer: Jas Lin\n \nMarketing: Michelle Bodnar\nVideo Operations: Lily Thrall\n\nSubscribe for more official content from Melanie Martinez:\r\nhttps://melanie.lnk.to/MMsubscribe\r\n\r\nFollow Melanie Martinez\r\nhttps://facebook.com/melaniemartinezmusic\r\nhttps://twitter.com/melanielbbh\r\nhttps://instagram.com/littlebodybigheart\r\nhttps://soundcloud.com/melaniemartinezmusic\r\nhttp://melaniemartinezmusic.com\r\n\r\nThe official YouTube channel of Atlantic Records artist Melanie Martinez. Subscribe for the latest music videos, performances, and more.\n\n#melaniemartinez #void #portals",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/fzAyZ1Lh-zI/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/fzAyZ1Lh-zI/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/fzAyZ1Lh-zI/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/fzAyZ1Lh-zI/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/fzAyZ1Lh-zI/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 4,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "fzAyZ1Lh-zI"
    //           },
    //           "videoOwnerChannelTitle": "melanie martinez",
    //           "videoOwnerChannelId": "UC2YnEq5Fc5_zEO6bo0oNzCQ"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "0reJ9QJhpsz7-UzGrAZDjKbSVOI",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy45NDUzRUQ0MjY3RjAzQ0I2",
    //         "snippet": {
    //           "publishedAt": "2023-05-27T17:13:19Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "Alan Walker & Sasha Alex Sloan - Hero (Official Music Video)",
    //           "description": "Hey Walkers, my new single ‘Hero’ with the incredible @sadgirlsloan is out now. I’m very excited to finally release this piece, hope you like it!\n\n🎵 Listen ‘Hero’ here 👉  https://AlanWalker.lnk.to/hero \n\nRemember to subscribe to the channel and turn on 🔔\n\n//////////////// \n\nLyrics:\nBeen here before \nIt’s in my muscle memory I’m pretty sure\nI recognize you\nThere is something in your eyes\nWon't let you get away tonight\nYou leave me in the dark\nI'm stumbling around like I'm a question mark\nWondering if you’re around to catch me if I fall\nIf I come crashing to the wall\n\nWill you light me up\nJump start my heart\nI need someone\nBefore the sun goes down\nWho’s gonna save me now\nSome kind of hero\n\nI can’t breathe\nHoping you’re here to rescue me\nBefore the sun goes down\nWho’s gonna save me now\nSome kind of hero\n\nBeen here before\nIt's in my muscle memory, I’m pretty sure \nI've felt this energy\nThere’s something in your touch\nSomething reminding me of us\n\nWill you light me up\nJump start my heart\nI need someone\nBefore the sun goes down\nWho’s gonna save me now\nSome kind of hero\n\nI can’t breathe\nHoping you're here to rescue me\nBefore the sun goes down\nWho’s gonna save me now\nSome kind of hero\n\n//////////////// \n\n\u200b\u200bStarring:\nAlan Walker\nSasha Alex Sloan\n \nProduced by MER Recordings\n \nDirector: Mads Neset\nProducer: Miriam Eeg\nExecutive Producer: Gunnar Greve\nDoP: Morten Forsberg\nProduction Coordinator: Babatunde Adam Oluwalana\n1st AD: Anders Reime\nFocus Puller: Kristoffer Hergum\nDIT: Rasmus Skaaret\nGaffer: Jarl Johnsen\nBest Boy: Henrik Larsen\nLighting Assistant: Rikart Lahdesmaki Jensen\nLighting Assistant: Mikkel Foss\nLighting Assistant: Julius Braathen\nCostume Designer: Emina Mahmulijn\nHair & Makeup: Alexandra Løkka\nProduction Designer: Øyvind Møgster\nProps Assistant: Odin Møgster\nSound Technician: Nikolaj Gloppen\nProduction Assistant: Alex Hellstenius\nProduction Assistant: Benjamin Nøddelund\nBehind the Scenes: Kristoffer Aarak\nStills Photographer: Thormod Hjelmtveit\n \nPost-Production:\nEditor: Tormod Berge\nVFX Producer: Alf Løvvold\nOnline: Erik Teigland\nOnline: Peder Opland\nColor Grading: Didrik Bråthen\n\n//////////////// \n\nConnect with me 📲\n👉Join the W41K3R5: https://w41k3r.com/\n👉Instagram: https://www.instagram.com/alanwalkermusic/ \n👉TikTok: https://www.tiktok.com/@alanwalkermusic \n👉Facebook: https://www.facebook.com/alanwalkermusic \n👉Twitter: https://twitter.com/IAmAlanWalker \n👉Snapchat: https://www.snapchat.com/add/alanwalkermusic \n👉Discord: https://discord.gg/alanwalker\n\n👕 Official Merchandise: https://store.alanwalker.com/\n\n🎵Listen & Follow Walkerver Radio here: https://AlanWalker.lnk.to/WalkerRadio \n\n//////////////// \n\nConnect with Sasha Alex Sloan 📲\n👉Instagram: https://www.instagram.com/sadgirlsloan/ \n👉Facebook: https://www.facebook.com/sadgirlsloan \n👉Twitter: https://twitter.com/sadgirlsloan \n👉TikTok: https://www.tiktok.com/@sashaalexsloan \n👉YouTube: https://www.youtube.com/@sadgirlsloan \n👉Spotify: https://open.spotify.com/artist/4xnihxcoXWK3UqryOSnbw5?si=b2SB9nM0R2msRCUEdgmzYg \n \n#AlanWalker #SashaAlexSloan #WorldOfWalker",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/tu4HfcmMn1E/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/tu4HfcmMn1E/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/tu4HfcmMn1E/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/tu4HfcmMn1E/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/tu4HfcmMn1E/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 5,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "tu4HfcmMn1E"
    //           },
    //           "videoOwnerChannelTitle": "Alan Walker",
    //           "videoOwnerChannelId": "UCJrOtniJ0-NWz37R30urifQ"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "c8cB9uQEL5Ee19PIuJUMgrfFgR8",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy5CMEExMjJENzgwNTQ1MzEw",
    //         "snippet": {
    //           "publishedAt": "2023-05-27T17:13:17Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "Kim Petras & Nicki Minaj - Alone (Official Music Video)",
    //           "description": "Listen & download \"Alone (with Nicki Minaj)\" here: https://kimpetras.lnk.to/aloneYD\n\n►Follow Kim Petras:\nhttp://kimpetras.com\nhttp://instagram.com/kimpetras \nhttp://twitter.com/kimpetras\nhttp://facebook.com/kimpetras\nhttps://www.tiktok.com/@kimpetras\n\nTEXT KIM\n949-331-0609\n\n►Subscribe to Kim Petras: http://kimpetras.lnk.to/ytsubscribe\n\n►Connect with Nicki:\nhttp://www.nickiminajofficial.com\nhttps://instagram.com/nickiminaj\nhttps://twitter.com/nickiminaj\nhttps://facebook.com/nickiminaj\nhttps://tiktok.com/@nickiminaj\n\nOfficial “Alone\" Lyrics:\nYeah – its barbie and its Kim Petras (woo-ah)\n\n I’ve been tryna give it to you all night\nWhat’s it gonna take to get you all alone\nI just want you here by my side\nI don’t want to be here baby on my own\nYeah\nDon’t you wait don’t think about it\nYeah\nDon’t you wait just come on over now\nI’ve been tryna give it to you all night\nWhat’s it gonna take to get you all alone\n\nOo look at me\nLike what you see\nI’ve been feeling lonely baby you got what I need\nGimme what I like\nTryna **** tonight\nGot an appetite that only you can satisfy\nI can ride it ride it ride it ride it all night\nWatch me ride it ride it ride ride it all night\n Wanna feel the rush\nWanna feel your touch\nDon’t talk your talk\nUnless you’re gonna back it up\n If you want me let me know\nTell me now don’t hesitate\nYou got one chance \nBaby don’t let the moment slip away\nNo\n\nI’ve been tryna give it to you all night\nWhat’s it gonna take to get you all alone\nI just want you here by my side\n\nI don’t want to be here baby on my own\nYeah\nDon’t you wait don’t think about it\nYeah\nDon’t you wait just come on over now\nI’ve been tryna give it to you all night\nWhat’s it gonna take to get you all alone\n\nKimmy Bad\nNicki ready\nYes we brag\nWe throw jabs\nBitch’ll get dragged\nWe be like ‘gag’\nCall her Kim Petty\nWhen I r-ride, I ride it steady\nBrand new Range, I just painted it Betty\nI set trends from Queens to Beijing\nI’m not the one who does the imitating\nPuff puff pass cause you know we blazing\nWhen I put it on him, he say its amazing\nAll this cake, he doing a tasting\nI send shots, get ready, they may sting\nIts barbie and its Kim Petras\nMain character syndrome, they extras\nWe ain’t answering questions\nClick on a bitch before she finish her sentence\n\n If you want me let me know\nTell me now don’t hesitate\nYou got one chance \nBaby don’t let the moment slip away \nNo\n\ni’ve been tryna give it to you all night\nwhat’s it gonna take to get you all alone\nI just want you here by my side\nI don’t want to be here baby on my own\nyeah\ndon’t you wait don’t think about it\nyeah\ndon’t you wait just come on over now\nI’ve been tryna give it to you all night\nwhat’s it gonna take to get you all alone\n\nDirector: Arrad\nProduction Company: SixTwentySix\nEP: Austin Barbera\nDirectors Rep: Tommy LaBuda / LaBuda Management\nHead of Production//EP: Matias Letelier\nSX Prod. Coordinator: Amber Bolden\nLine Producer: Fernando Morillo\nProduction Manager: Jasmine Rose Holdsworth\nProduction Coordinator: Christopher San Andres\nDP: Carlos Veron\nProduction Designer: Brandon Mendez\nChoreographer: Cat Rendic\nWardrobe: Nikki Parisi\nDancer 1: Anna Chorneyko\nDancer 2: Clarys Biagi\nDancer 3: Morgan Wright\nDancer 4: Brittany Alexander\nHandsome Male: Alexander Jackson\nGymnast: Peng Peng Lee\nBodybuilder Womna: Joanna Tsakonakis\nEditor: Kevin VP\nVFX: Max Colt, Frender\nPost Supervisor: Dan Gillette\nColor: Bryan Smaller / Company3\n\n#KimPetras #NickiMinaj #Alone\n\n\nMusic video by Kim Petras performing Alone. © 2023 Amigo Records, LLC, under exclusive license to Republic Records, a division of UMG Recordings, Inc.",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/c_5AbgHmFqk/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/c_5AbgHmFqk/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/c_5AbgHmFqk/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/c_5AbgHmFqk/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/c_5AbgHmFqk/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 6,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "c_5AbgHmFqk"
    //           },
    //           "videoOwnerChannelTitle": "KimPetrasVEVO",
    //           "videoOwnerChannelId": "UCYD8yo6mdlZ47o4eFcGuarQ"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "qmuCpKAa2VIL4nxcz4QytWgB4a4",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy5ENDFBNEU4Q0YzRkIxNTkz",
    //         "snippet": {
    //           "publishedAt": "2023-06-05T18:47:03Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "Kylie Minogue - Padam Padam (Official Video)",
    //           "description": "The official video for Padam Padam by Kylie Minogue. \n\nListen/save Padam Padam here: https://Kylie.lnk.to/PadamPadamID\n \nThe new album Tension is available to pre-save/add now: https://Kylie.lnk.to/TensionID\n\nWatch Official Kylie Minogue videos: https://Kylie.lnk.to/TensionPlaylistID\n \nSubscribe Now! ✨:  https://www.youtube.com/user/kylieminogue/?sub_confirmation=1\n\nCREDITS\n \nDirector - Sophie Muller\nDP - Steven Chivers\n1st A.D - Andrew Coffing\n2nd A.D - Jimmy Brayl\n1st AC - Alli Gooch\n2nd AC - Joseph Hartzler\nSteadicam - Koji Kojima\nDIT - Andy Cordos\nGaffer - Julian Tuzzeo\nKey Grip - Josh Linkey\nLine Producer - Hope Farley\nProd. Supervisor - Joshua Hummel\nCommercial Coord -Taylor Gilroy\nBB Electric - Michael Proa\nElectric / Driver - Hassan Jabbar\nBB Grip - Ronnie Gotch\nGrip / Driver - Enrique Arriaga\nProduction Designer - Annie Sperling\nArt Coordinator - Michele Moore\nSet Decorator - Craig Roose\nProp Master - Roger Deering\nLeadman - Steve Rawlings\nSet Dresser - Danny Padilla\nVTR / Playback - Adam Delgado\nStylist - Bradley Kenneth\nWardrobe Assistant - Alyx Cohen\nWardrobe (Dancers) - Natalie Berwanger\nArtist Hair - Danillo Dixon\nHair Assist (Dancers) - Jaylin Seng & Esther Vasquez\nCraft Service - Brooke Lohr\nArtist Makeup - Anthony Nguyen\nMakeup (Dancers) - Sameerah Hoddison\nChoreographer - Jose ‘Hollywood’ Ramos\nChoreographer Assist - Erika Naranjo\n \nDancers:\nJordan Ledora Gaskin\nShyvon Campell\nJames Ryan Mertz\nPaula Ayotte\nMorgan Marie Wright\nChris Munar\nMichael Ramos\nDylon Cedillo\n \nCreative Manager - Faye Purcell\nBTS Stills - Erik Melvin\nBTS Video - Trent Barboza\n \nLYRICS\n \nYou look like fun to me\nYou look a little like somebody I know\nAnd I can tell you how this ends\nI’ll be in your head all weekend\n \nShivers and butterflies\nI get the shivers when I look into your eyes\nAnd I can tell that you’re all in\n‘Cause I can hear your heart beating\nPadam Padam\n \nPadam Padam\nI hear it and I know\nPadam Padam\nI know you wanna take me home\nPadam\nAnd get to know me close\nPadam Padam\nWhen your heart goes\nPadam Padam\nI hear it and I know\nPadam Padam\nI know you wanna take me home\nPadam\nAnd take off all my clothes\nPadam Padam\nWhen your heart goes\nPadam\n \nThis place is crowding up\nI think it’s time for you to take me out this club\nAnd we don’t need to use our words\nWanna see what’s underneath that t-shirt\nShivers and cold champagne\nI get the shivers every time you say my name\nAnd I can tell that you’re all in\n‘Cause I can hear your heart beating\n \nPadam Padam\nI hear it and I know\nPadam Padam\nI know you wanna take me home\nPadam\nAnd get to know me close\nPadam Padam\nWhen your heart goes\nPadam Padam\nI hear it and I know\nPadam Padam\nI know you wanna take me home\nPadam\nAnd take off all my clothes\nPadam Padam\nWhen your heart goes\nPadam\n \n#KylieMinogue #PadamPadam #Tension",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/p6Cnazi_Fi0/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/p6Cnazi_Fi0/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/p6Cnazi_Fi0/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/p6Cnazi_Fi0/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/p6Cnazi_Fi0/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 7,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "p6Cnazi_Fi0"
    //           },
    //           "videoOwnerChannelTitle": "Kylie Minogue",
    //           "videoOwnerChannelId": "UCyd8nl1opqfEVwJer32vURA"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "kbsIwWrJ6ENtXFSELu0RgSzxh6w",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy40ODI3NzUyRTg4MjdGOEY0",
    //         "snippet": {
    //           "publishedAt": "2023-07-12T18:11:22Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "R3HAB, INNA, Sash! – Rock My Body (Official Music Video)",
    //           "description": "R3HAB, INNA, Sash! – Rock My Body is OUT NOW! Stream/Download: https://spinninrecords.release.link/rock-my-body!YT\nMake sure to subscribe to Spinnin' Records: https://spinnin.lnk.to/subscribe\n..and turn on notifications to stay updated with all new uploads!🔔\n\nJoin our official Discord server: https://spinnin.lnk.to/discord\n\nJoin our Spinnin' Records Dance Top Hits Playlist ► https://spinninrecords.lnk.to/top100!YT\n\nFollow R3HAB:\nhttps://www.facebook.com/r3hab\nhttp://twitter.com/R3HAB\nhttps://soundcloud.com/r3hab\nhttp://www.instagram.com/r3hab\n\nFollow INNA: \nhttps://www.facebook.com/Inna\nhttps://www.instagram.com/inna/\nhttps://twitter.com/inna_ro\n\n---\nThe Spinnin’ Records YouTube channel is the home for all music videos of the world’s leading dance record label!\n\nWe feature the latest music videos by Spinnin’ artists like Afrojack, KSHMR, Ummet Ozcan, Blasterjaxx, Timmy Trumpet, Tujamo, Alok, Mike Williams, Lucas & Steve and many, many more! Expect daily uploads of official music videos, lyric videos and official audio across genres like dance, house, electro house, future house, deep house, big room, trap and slap house.\n\nFollow Spinnin’ Records:\nhttps://open.spotify.com/user/spinninrecordsofficial\nhttps://soundcloud.com/spinninrecords\nhttps://facebook.com/SpinninRecords\nhttps://instagram.com/spinninrecords\nhttps://twitter.com/SpinninRecords\nhttps://www.youtube.com/@spinninrecords\nhttps://spinninrecords.com\n\n#r3hab \n#inna \n#sash\n#spinnin \n#spinninrecords",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/aYCuEONIIDM/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/aYCuEONIIDM/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/aYCuEONIIDM/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/aYCuEONIIDM/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/aYCuEONIIDM/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 8,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "aYCuEONIIDM"
    //           },
    //           "videoOwnerChannelTitle": "Spinnin' Records",
    //           "videoOwnerChannelId": "UCpDJl2EmP7Oh90Vylx0dZtA"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "GUMI-XVsfDtHVmYiE-bc1gr4aLs",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy5GQjRCMEYyQTZCNDM1ODBE",
    //         "snippet": {
    //           "publishedAt": "2023-05-27T17:13:24Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "Dua Lipa - Dance The Night (From Barbie The Album) [Official Music Video]",
    //           "description": "Dua Lipa - Dance The Night (From Barbie The Album) [Official Music Video]\nDownload/Stream: https://barbiethealbum.lnk.to/DuaLipaID\nBarbie The Album Available Everywhere + Barbie The Movie In Theaters Now!\nDownload/Stream: https://barbiethealbum.lnk.to/BTA\n \nSubscribe to the Dua Lipa channel for all the best and latest official music videos, behind the scenes and live performances. \nhttps://www.youtube.com/channel/UC-J-KZfRV8c13fOCkhXdLiQ?sub_confirmation=1\n\nFollow Dua Lipa:\nInstagram:  https://dualipa.co/instagram\nFacebook: http://dualipa.co/facebook\nTikTok: https://www.tiktok.com/@dualipaofficial\nTwitter: http://dualipa.co/twitter\nYouTube: https://dualipa.co/youtube\n\nFollow Barbie The Album:\nhttps://www.instagram.com/barbiethealbum/\nhttps://tiktok.com/@barbiethealbum\nhttps://twitter.com/barbiethealbum\nhttps://www.facebook.com/BarbieTheAlbum/\nhttp://www.barbiethealbum.com/\n\nFollow Barbie The Movie: \nhttps://www.instagram.com/barbiethemovie/\nhttps://tiktok.com/@barbiethemovie\nhttps://twitter.com/barbiethemovie\nhttps://www.facebook.com/BarbieThemovie/\n\nLyrics: \nBaby you can\nFind me under the lights\nDiamonds under my eyes\nTurn the rhythm up\nDon’t you wanna just\nCome along for the ride\n\nOh my outfit so tight\nYou can see my heart beat tonight\nI can take the heat\nBaby best believe\r\nThat’s the moment I shine\n\nCuz every romance\nShakes and it bends\nDon’t give a damn\n\nWhen the nights here\nI don’t do tears\nBaby no chance\n\nI could dance, I could dance, I could dance\nWatch me, dance\nDance the night away\nMy heart could be burning but you won’t see it on my face\nWatch me, dance\nDance the night away\nI’ll still keep the party running not one hair out of place\n\nLately I’ve been\nMoving close to the edge\nStill be looking my best\nI stay on the beat\nYou can count on me\nI ain’t missing no steps\r\n\nCuz every romance\nShakes and it bends\nDon’t give a damn\n\nWhen the nights here\nI don’t do tears\nBaby no chance\n\nI could dance, I could dance, I could dance \nWatch me, dance\nDance the night away\nMy heart could be burning but you won’t see it on my face \nWatch me, dance\nDance the night away\nI’ll still keep the party running not one hair out of place\n\nWhen my heart breaks\nYou’ll never see it, never see it\nWhen my world shakes\nI feel alive, I feel alive\nI don’t play safe\nDon’t you know about me\n\n\rI could dance, I could dance, I could dance\n\nEven when the tears are flowing\n\rThey’re diamonds on my face\r\nI’ll still keep the party going not one hair out of place\n\rEven when the tears are flowing\r\nThey’re diamonds on my face\r\nI’ll still keep the party going not one hair out of place\r\n\nWatch me, dance\r\nDance the night away\nMy heart could be burning but you won’t see it on my face\nWatch me, dance\nDance the night away\n\rI’ll still keep the party running not one hair out of place\n\r\nWhen my heart breaks\r\nYou’ll never see it, never see it\nWhen my world shakes\nI feel alive, I feel alive\nI don’t play safe\r\nDon’t you know about me\r\n\nI could dance, I could dance, I could dance\n\nDance the night\n\nAbout Dua Lipa:\nBorn and raised in London to Kosovar-Albanian parents Dua Lipa signed to Warner Records in 2015, releasing her self titled debut in 2017 which featured the hit singles, 'Be The One', 'IDGAF', 'Hotter Than Hell' & her first UK #1 hit 'New Rules'. \n\nCritical success soon followed as Dua Lipa picked up Brit Awards for 'Best Female Solo Artist' and 'Best British Breakthrough Act' as well as Grammy Awards for 'Best New Artist' and 'Best Dance Recording' for the track 'Electricity' in collaboration with Silk City.\n\nHer second internationally acclaimed studio album 'Future Nostalgia' was released in 2020 and included the hit singles 'Don't Start Now, 'Break My Heart', 'Hallucinate' and 'Levitating', with the remix album 'Club Future Nostalgia' following shortly after featuring guest appearances from 'Blackpink', 'Missy Elliott', 'Madonna' and 'Gwen Stefani'.\n\n#DuaLipa #DanceTheNight #BarbieTheAlbum",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/OiC1rgCPmUQ/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/OiC1rgCPmUQ/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/OiC1rgCPmUQ/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/OiC1rgCPmUQ/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/OiC1rgCPmUQ/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 9,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "OiC1rgCPmUQ"
    //           },
    //           "videoOwnerChannelTitle": "Dua Lipa",
    //           "videoOwnerChannelId": "UC-J-KZfRV8c13fOCkhXdLiQ"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "9OpV4skNTv8Uh2N6G7a0MFtJW8U",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy4wOEZERTYyRTM2NjIyNzdF",
    //         "snippet": {
    //           "publishedAt": "2023-07-05T18:53:13Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "Oliver Tree - Bounce [Music Video]",
    //           "description": "Oliver Tree - Bounce [Music Video]\nStream/Download: https://olivertree.lnk.to/BounceID\nNew Album 'Alone In A Crowd' September 29! Pre-order/save: https://olivertree.lnk.to/AloneInACrowdID\nWritten & Directed by Oliver Tree\n\nShop 'Alone In A Crowd' vinyl, signed merch and more: https://olivertree.lnk.to/ShopID\n\nDirector, Writer & Executive Producer: Oliver Tree\nProduction Company: MrMr Films & Alien Boy Films - https://instagram.com/alienboyfilms\nProducer: Martha McGuirk\nExecutive Producer: Wes Teshome\nDOP: Luis \"Panch\" Perez \nVFX Super + Lead Compositor: Zdravko \"Zee\" Stoitchkov - https://instagram.com/wuziks\nVFX: Mikey Smith\nProduction Manager: Rosie Brear \nAlien Boy Films Production: Paul Donatelli \nEditor: Stefan Rokvić \nColourist: Adam Clarke \nLabel: Atlantic Records\nVideo Ops: Lily Thrall\nStoryboards by Orpheus Collar \nAnimatic Filmer: John Rizkallah\nManagement: https://www.instagram.com/goodluckhavefun/\n\nSerbian Production Company: Tuna+Icon\nEP: Ivana Antic\nProducer: Ramona Plazinić \nProducer: Luka Mrvoš \n1st AD: Ljubomir Božović\nPM: Aleksandra Babić \nLocation Manager: Tanasije Raković\nUnit Manager: Oliver Rnjak\nCasting Coordinator: Igor Milakov\n2nd AD: Kosta Ilić\nExtras Cord: Marija Vanilla\nCast PA: Balša Leković\nPA: Jana Milijković\nKey Grip: Marko Leković\nGaffer: Nedeljko Maletić\n1st AC A Cam: Nikola Jovanovic Endi\n2nd AC A Cam: Andrei Panov\nSFX: Zamal M’Barek\nProduction Designer: Damjan Paranosić\nHair Stylist: Tina Subić\nMakeup: Lena Dodočić \nStyling: Ivana Vasić E \nRigging Crew: Milan Alavanja\nStunt Supervisor: Slavisa Ivanovic \nStunt Coordinator: Marko Joksimovic\nStunt Team: Stevan Stojiljkovic\nSecret Agent 1: Dalibor Kostic \nSecret Agent 2: Ivan Djordjevic\nPlayback: Dejan Ceko\nDIT: Ivan Tanasković\nPhotographer: Branko Starčević \nPict Cord: Vukašin Mrdan\n\nTransport:  Miodrag Jovičić\nMedic: Sirius Med.Djordje Milicevic\nGenerator: Miloš Ivković\nCatering: Jerry Team\n\nLyrics: \nI’ma bounce you up and down\nYou’ll be coming back no doubt\nBaby please don’t make a sound\nYou’re waking up my neighbors now\n\nKeep quiet, can you shut your mouth?\nIt’s our secret till the truth comes out\nI’ma bounce you up and down\nYou’ll be coming back no doubt\n\n[VERSE]\nWho you gonna call\nIf things go wrong\nWhen things get bad\nIt’s always my fault\n\nBut when you need a friend\nWho you gonna call?\nLeave if you need but I really wanna see ya\n\nI’ll give you what you want\nWhen you feel lost\nBaby girl just give me a call\n\nI really wanna taste, so tell me if it’s on\nCome over to my place and stay up all night long\n\nI’ma bounce you up and down\nYou’ll be coming back no doubt\nBaby please don’t make a sound\nYou’re waking up my neighbors now\n\nKeep quiet, can you shut your mouth?\nIt’s our secret till the truth comes out\nI’ma bounce you up and down\nYou’ll be coming back no doubt\n\nI think about you all day lowkey\nMeaning I don’t want you to leave\nYou live in my head rent free\nSo come and stay the night with me\n\nI give it to you good\nI love the way you crave me\nLately I been hooked, you been driving me crazy\n\nI really wanna taste, so tell me if it’s on\nCome over to my place and stay up all night long\n\nI’ma bounce you up and down\nYou’ll be coming back no doubt\nBaby please don’t make a sound\nYou’re waking up my neighbors now\n\nKeep quiet, can you shut your mouth?\nIt’s our secret till the truth comes out\nI’ma bounce you up and down\nYou’ll be coming back no doubt\n\nConnect with Oliver Tree:\nhttp://olivertreemusic.com\nhttps://instagram.com/olivertree\nhttps://tiktok.com/@olivertree\nhttps://twitter.com/olivertree\nhttps://facebook.com/olivertreemusic\nhttps://soundcloud.com/olivertree\nhttps://vk.com/olivertree\n\n#OliverTree #Bounce #MusicVideo #AloneInACrowd #OfficialVideo",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/pBKiHaU-CwQ/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/pBKiHaU-CwQ/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/pBKiHaU-CwQ/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/pBKiHaU-CwQ/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/pBKiHaU-CwQ/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 10,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "pBKiHaU-CwQ"
    //           },
    //           "videoOwnerChannelTitle": "Oliver Tree",
    //           "videoOwnerChannelId": "UCHcb3FQivl6xCRcHC2zjdkQ"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "TazkMy8sVuhHpwR95sZmiI-lYqw",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy5FRUZEMEM4RTJCOUI4QThE",
    //         "snippet": {
    //           "publishedAt": "2023-05-27T17:13:22Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "JVKE - golden hour (Fujii Kaze Remix) (Official Lyric Video)",
    //           "description": "STREAM: golden hour (Fujii Kaze Remix): https://jvke.ffm.to/goldenhourxfujiikaze\n\nNEW ALBUM: this is what ____ feels like, out now: https://jvke.ffm.to/whatblankfeelslike\n\nSUBSCRIBE: https://www.youtube.com/channel/UCSOf...\n\nFOLLOW ME ON INSTAGRAM @ITSJVKE: https://www.instagram.com/itsjvke\u200b\n\nFOLLOW ME ON TIKTOK @JVKE: https://www.tiktok.com/@jvke\u200b\n\nFOLLOW ME ON TWITTER @JVKESONGS: https://twitter.com/jvkesongs\u200b\n\nSNAP ME: https://www.snapchat.com/add/imjakela\u200b...\n\nNEW MERCH: http://itsjvke.com/#shop\u200b\n\n#JVKE #FujiiKaze #goldenhour #remix",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/8hjX4BO2-ao/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/8hjX4BO2-ao/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/8hjX4BO2-ao/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/8hjX4BO2-ao/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/8hjX4BO2-ao/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 11,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "8hjX4BO2-ao"
    //           },
    //           "videoOwnerChannelTitle": "JVKE",
    //           "videoOwnerChannelId": "UCSOfUqPoqpp5aWDDnAyv94g"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "B4sSVeIN20-DE8t0MV3vi-tEHhI",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy40MDMwQzEwNjYwQUE0QThC",
    //         "snippet": {
    //           "publishedAt": "2023-04-15T18:24:59Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "Ed Sheeran - Eyes Closed [Official Video]",
    //           "description": "Listen to Eyes Closed: http://es.lnk.to/eyesclosed \nSubtract, the new album, out now: https://es.lnk.to/subtract\n\nSubscribe to Ed's channel: http://bit.ly/SubscribeToEdSheeran\n\nFollow Ed on...\nInstagram: http://instagram.com/teddysphotos\nTikTok: https://www.tiktok.com/@edsheeran\nFacebook: http://www.facebook.com/EdSheeranMusic\nTwitter: http://twitter.com/edsheeran\nDiscord: http://discord.gg/edsheeran\nOfficial Website: http://edsheeran.com\n\nDirected by Mia Barnes\nProduced by Roisín Audrey Moloney\nExecutive Producer Nathan Scherrer \nProduction Company Freenjoy \n \nCommissioned by Dan Curwin\nRecord Label Atlantic Records\nStyling & Grooming Liberty Shaw\nStyling Hillary Owen\n \nService Company LS Productions\nService line producer Ellen De Faux\nService line producer Marii Stoltsen\n \nCinematography Natasha Braier \nProduction Design Sarah Asmail\n1st AD Rawdon De Fresnes\nCamera Operator Ossie Mclean\nGaffer Peter Taylor\nKey Grip Davey Logan\nEdited by Chiao Chen\nSound Design Christian Stropko\nVFX by Mathematic\nColourist Dante Pasquinelli\nColour studio Ethos\n\n--\nLyrics:\n\nI know it’s a bad idea\nBut how can I help myself\nBeen inside for most this year\nAnd I thought a few drinks they might help\n\nIt’s been a while my dear\nDealing with the cards life dealt\nI’m still holding back these tears\nWhile my friends are somewhere else\n\nI pictured this year a little bit different when it hit February \nI step in the bar, it hit me so hard\nOh how can it be this heavy?\nEvery song reminds me you’re gone \nAnd I feel the lump form in my throat\n‘Coz I’m here alone\n\nJust dancing with my eyes closed\n‘Coz everywhere I look I still see you\nTime is moving so slow\nAnd I don’t know what else that I can do\nSo I’ll keep dancing with my eyes closed\nSo I’ll keep dancing with my\n\nDelusion is here again\nAnd I think you’ll come home soon\nA word brings me right back in\nThen it’s only me that’s in this room\nI guess I could just pretend\nThe colours are more than blue\nBut I lost more than my friend\nI can’t help but missing you\n\nI pictured this month a little bit different no one is ever ready \nAnd when it unfolds you get in a hole\nOh how can it be this heavy?\nEverything changes, nothing’s the same \nExcept the truth is now you’re gone\nAnd life just goes on\n\nSo I’m dancing with my eyes closed\n‘Coz everywhere I look I still see you\nTime is moving so slow\nAnd I don’t know what else that I can do\nSo I’ll keep dancing with my eyes closed\nSo I’ll keep dancing with my eyes closed\nOh I’ll keep dancing with my\n\nThey’re shutting the bar\nThey’re cleaning the floor\nAnd everyone is already home\nBut I’m on my own\n\nStill dancing with my eyes closed\n‘Coz everywhere I look I still see you\nTime is moving so slow\nAnd I don’t know what else that I can do\nSo I’ll keep dancing with my eyes closed\nOh I’ll keep dancing with my eyes closed\nOh I’ll keep dancing with my",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/u6wOyMUs74I/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/u6wOyMUs74I/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/u6wOyMUs74I/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/u6wOyMUs74I/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/u6wOyMUs74I/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 12,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "u6wOyMUs74I"
    //           },
    //           "videoOwnerChannelTitle": "Ed Sheeran",
    //           "videoOwnerChannelId": "UC0C-w0YjGpqDXGB8IHb662A"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "CApBeP-kXJXCJya9jixXbLpYUtY",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy5BOTFCRUNEMTkwNjBBODlF",
    //         "snippet": {
    //           "publishedAt": "2023-07-12T18:11:10Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "Rob49 - TRX ft. Roddy Ricch [Official Video]",
    //           "description": "Stream Rob49’s new album 4GODII on all platforms – OUT NOW https://rob49.lnk.to/4GODIIAlbum\n\nFollow Rob49:\nhttps://open.spotify.com/artist/1jBoSSrbz9n4ehQWA4cZgB?si=CqrmbblvQP6yoNp9qWligw\nhttps://www.instagram.com/rob49up/\nhttps://twitter.com/rob49up\nhttps://www.tiktok.com/@rob49_\n\n#rob49 #Roddyricch #TRX #4GODII #officialvideo",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/ixGm8i8ZMyw/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/ixGm8i8ZMyw/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/ixGm8i8ZMyw/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/ixGm8i8ZMyw/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/ixGm8i8ZMyw/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 13,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "ixGm8i8ZMyw"
    //           },
    //           "videoOwnerChannelTitle": "ROB49",
    //           "videoOwnerChannelId": "UCUdD69ZjWzkzqutB1JeBEGw"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "gNX2v6fT6AUTVGFd9bXyVZoMyqc",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy5EMzc5Q0I0REMzNEE0MkM1",
    //         "snippet": {
    //           "publishedAt": "2023-04-29T18:59:55Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "Lewis Capaldi - Wish You The Best (Official Video)",
    //           "description": "Listen to my new album ‘Broken By Desire To Be Heavenly Sent’ here: \nhttps://lewiscapaldi.lnk.tt/BBDTBHS    \n\nListen to my new single ‘Wish You The Best’ here:\nhttps://lewiscapaldi.lnk.tt/WYTB \n\nCast:\nJohn - David Bradley\nCraig - Tom Lewis\nWillow - Winnie\n\nCrew:\nWriter & Director: Phil Beastall\nProducer: James Whitehill\nPA: Jessica Whitehill\nCasting Director: Rae Hendrie\n1st AD: Dom Asbridge\nDOP: Matt Gentleman\nEditor: Paul Muller\nColourist: George Kyriacou, Black Kite Studios\n1st AC: Ben Sansom\n2nd AC: Luke Flaherty\nCostume Designer: Alice Rose Lewis\nMake up & Hair: Grace Brown\nDIT: Louis Weinzweig\nGaffer: Harrison Newman\nSpark: Joe Kennedy\nProduction Co-ordinator: Laurie Johnson\nLocation Manager: Joe Hargreaves\nRunner: Andrew Curtis\nRunner: Harry Cooke\nUnit stills & BTS: Dames May\nCommissioner: Caroline Clayton\nLabel Representatives: Rory Dewar & Jamie Glydon\nMedic: Les Spiteri\nCinetrike: Chris Wilkinson, Uppercut Productions\nCinetrike Operator: James Markwick\nDog supplied by Adrienne Thomas at Dogs On Camera \nHandled by Molly Davidson. Owned by Dawn Inett & Molly Davidson.\n \nFollow Lewis Capaldi for more\nInstragram: https://www.instagram.com/lewiscapaldi   \nFacebook: https://www.facebook.com/lewiscapaldi/   \nTikTok: https://www.tiktok.com/@lewiscapaldi   \nYouTube: https://www.youtube.com/c/lewiscapaldi?sub_confirmation=1\nTwitter: https://twitter.com/lewiscapaldi   \nWebsite: https://www.lewiscapaldi.com/  \n\nI miss knowing what you're thinking \nAnd hearing how your day has been\nDo you think you could tell me everything darling? \nBut leave out every part about him \n\nRight now you're probably by the ocean\nWhile I’m still out here in the rain \nWith every day that passes by since we've spoken \nIt’s like Glasgow gets farther from LA\nMaybe it's supposed to be this way \n\nBut oh my love\nI wanna say I miss the green in your eyes\nAnd when I said we could be friends guess I lied\nI wanna say I wish that you never left\nOh but instead I only wish you the best \nI wanna say without you everything’s wrong \nAnd you were everything I need all along\nI wanna say I wish that you never left\nOh but instead I only wish you the best \n\nWell I can’t help but notice\nYou seem happier than ever now \nAnd I guess that I should tell you I’m sorry\nIt seems I was the problem somehow\nMaybe I only brought you down\n\nBut oh my love\nI wanna say I miss the green in your eyes\nAnd when I said we could be friends guess I lied\nI wanna say I wish that you never left\nOh but instead I only wish you the best \nI wanna say without you everything’s wrong \nAnd you were everything I need all along\nI wanna say I wish that you never left\nOh but instead I only wish you the best \n\nBut oh my love\nOhhhhh\nOh my love\nOhhhhh\n\nWish I could say it's something I really mean \nBut I want you happy whether or not it's with me \nI wanna say I wish that you never left\nOh but instead I only wish you the best \n\nI wanna say without you everything’s wrong \nAnd you were everything I need all along\nI wanna say I wish that you never left\nOh but instead I only wish you the best\n\n \n#WishYouTheBest #LewisCapaldi",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/QZLxVvLyKTo/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/QZLxVvLyKTo/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/QZLxVvLyKTo/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/QZLxVvLyKTo/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/QZLxVvLyKTo/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 14,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "QZLxVvLyKTo"
    //           },
    //           "videoOwnerChannelTitle": "LewisCapaldiVEVO",
    //           "videoOwnerChannelId": "UCp-IaqOaxH7OLYFb9FEHK2A"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "xD0iifCjFQRruQf3AGr1CMsL_Ks",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy4yODlCQzBBRkMyNkRDMTcx",
    //         "snippet": {
    //           "publishedAt": "2023-04-29T18:59:50Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "Post Malone - Chemical (Official Music Video)",
    //           "description": "Official music video for “Chemical” by Post Malone. Stream & Download the song here: https://PostMalone.lnk.to/chemicalYD\n\n►Subscribe for more: https://postmalone.lnk.to/subscribeYD\n\n►Shop exclusive merch: https://postmalone.lnk.to/shop\n\n►Follow Posty online:\nhttps://www.postmalone.com\nhttps://instagram.com/postmalone\nhttps://twitter.com/postmalone\nhttps://facebook.com/postmalone\nhttps://snapchat.com/add/postmalone\nhttps://tiktok.com/@postmalone\nhttps://discord.gg/post-malone\n\n►Lyrics:\nOxytocin making it all ok \nWhen I come back down it doesn’t feel the same \nNow I’m sitting around waiting for the world to end all day \nCuz I couldn’t leave you if I tried\n \nYou break me then I break my rules\nLast time was the last time too\nIt’s fucked up I know but I’m still\n \nOutside of the party smoking in the car with you\nSeven nation army fighting at the bar with you \nTell you that I’m sorry \nTell me what I gotta do\nCuz I can’t let go\nIt’s chemical\nNo I can’t let go \nIt’s chemical\n \nEvery time I’m ready to make a change \nYou turn around and fuck out all my brains\nI ain’t tryna fight fate\nIt’s too late to save face \nI can’t get away\nMaybe there’s no mistakes\n \nYou break me the I break my rules\nLast time was the last time took\nIt’s fucked up I know but I’m still\n \nOutside of the party smoking in the car with you\nSeven nation army fighting at the bar with you\nTell you that I’m sorry\nTell me what I gotta do\nCuz I can’t let go\nIt’s chemical\nNo I can’t let go\nIt’s chemical\nNo I can’t let go\nIt’s chemical\n \nI can’t let go\nIt’s chemical\n\nTell you that I’m sorry\nTell me what I gotta do\nNo I can’t let go\nIt’s chemical\n\n\nDirector: Alfred Marroquin\nCreative Direction: PlayLab Inc.\nVisual Content & Production, Republic Records: Devon Libran\nProduction Company: Somesuch & Noire Creative\nExecutive Producer: Alli Maxwell\nExecutive Producer: Tim Nash\nEP + Supervising Producer: Sara Lacombe \nCo-Producer: Vanda Lee\nProduction Coordinator: April Qualls\nSomesuch Production Manager: Ashley Soloman\nDirector Rep, Lark Creative: Cheyenne Shannon \n \n1st AD: Erik  E-Class Mateo\n2nd AD: Anthony Hayward\nDirector of Photography: Mika Alaskan\n1st AC: Noah Ramos\n2nd AC: Jenny Roh\nDIT: Scott Sison\nSteadicam: Anthony Foster\nSingle Cover Art Photographer: Alfred Marroquin\nSingle Cover Art Asst. Photographer: Jack Buster\nDSP & Promo Still Photographer: Meg Young\nDSP & Promo Still Asst. Photographer: Matt Cluett\n \nGaffer: Ryan Breitenbach\nBBE: Kurt Myers\nElectric: Gio Guisti\nElectric: Ryan Morgan\nKey Grip: Luke Poole\nBB Grip: Grayson Venters\nGrip: Torrey Schoerner\nGrip: Jake Poole\nVTR: Kai Morrison\nDimmer Op: Taylor Gillum\n \nProduction Designer: Miranda Lorenz\nArt Director: Hensel Martinez\nSet Dresser: Ian Buckley\nArt Driver: Rolando Cosio\nArt PA: Taylor Woods\nSet PA: Cedric Weber\nSet PA: Justin Bennett\nSet PA: Camilo Valencia\nSet PA: Ricky Dula\nSet PA: Akeira Cramer\nTruck Set PA: Frank Rodriguez\n \nEditor: Chiao Chen\nColor: Dante Pasquinelli / Ethos Studio\n\n#PostMalone #Chemical \n\nMusic video by Post Malone performing Chemical. © 2023 Mercury Records/Republic Records, a division of UMG Recordings, Inc.",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/IzPQ_jA00bk/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/IzPQ_jA00bk/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/IzPQ_jA00bk/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/IzPQ_jA00bk/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/IzPQ_jA00bk/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 15,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "IzPQ_jA00bk"
    //           },
    //           "videoOwnerChannelTitle": "PostMaloneVEVO",
    //           "videoOwnerChannelId": "UCOhtMAg7xh8wv_wUHMgFc-Q"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "qM5ua5qgz-KYDGhALD0C9z-cnlI",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy5FRjgwREIzQTFGNUMwRkYy",
    //         "snippet": {
    //           "publishedAt": "2023-04-25T17:55:39Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "NF - HAPPY",
    //           "description": "Official music video for “HAPPY” by NF.\nNew album HOPE available now.\nSubscribe to NFrealmusic on YouTube: https://nf.lnk.to/youtubeID \n\nPlay the official HOPE video playlist here: https://NF.lnk.to/hopeID/youtube \n\nStream ‘HOPE’\nSpotify: https://nf.lnk.to/hopeID/spotify \nApple Music: https://nf.lnk.to/hopeID/applemusic \nAmazon Music: https://nf.lnk.to/hopeID/amazonmusic \nPandora: https://nf.lnk.to/hopeID/pandora \nSoundCloud: https://nf.lnk.to/hopeID/soundcloud \n\nNF | HOPE TOUR \ntickets and info at https://www.nfrealmusic.com/tour/ \n \nUS + CANADA: \n7.12 Columbus, OH - Schottenstein Center\n7.14 Rosemont, IL - Allstate Arena\n7.15 Minneapolis, MN - Target Center\n7.16 Lincoln, NE - Pinnacle Bank Arena\n7.18 Grand Rapids, MI - Van Andel Arena\n7.20 Newark, NJ - Prudential Center\n7.21 Boston, MA - Agganis Arena\n7.22 Philadelphia, PA - The Liacouras Center\n7.24 Greensboro, NC - Greensboro Coliseum Complex\n7.25 Huntsville, AL - Propst Arena at the Von Braun Center\n7.26 Nashville, TN - Bridgestone Arena\n7.28 Orlando, FL - Addition Financial Arena\n7.29 Duluth, GA - Gas South Arena\n7.31 North Little Rock, AR - Simmons Bank Arena\n8.01 Tulsa, OK - BOK Center\n8.02 Fort Worth, TX - Dickies Arena\n8.04 Glendale, AZ - Desert Diamond Arena\n8.05 Anaheim, CA - Honda Center\n8.06 San Francisco, CA - Bill Graham Civic Auditorium\n8.08 Portland, OR - Veterans Memorial Coliseum\n8.09 Seattle, WA - WAMU Theater\n8.11 Salt Lake City, UT - Vivint Arena \n8.12 Denver, CO - Ball Arena\n8.23 Vancouver, BC - Rogers Arena\n8.25 Calgary, AB - Scotiabank Saddledome\n8.26 Edmonton, AB - Rogers Place\n8.27 Saskatoon, SK - SaskTel Centre\n8.29 Winnipeg, MB - Canada Life Centre\n9.01 Toronto, ON - Scotiabank Arena\n9.02 Ottawa, ON - Canadian Tire Centre\n9.03 Laval, QC - Place Bell\n \nUK + EUROPE: \n9.23 Milan, Italy - Fabrique \n9.24 Zurich, Switzerland - Halle 622 \n9.26 Vienna, Austria - Gasometer \n9.27 Munich, Germany - Zenith \n9.29 Düsseldorf, Germany - Mitsubishi Electric Halle \n9.30 Amsterdam, Netherlands - AFAS Live \n10.1 Paris, France - L'Olympia \n10.3 Frankfurt, Germany - Jahrhunderthalle \n10.5 Hamburg, Germany - Sporthalle \n10.6 Berlin, Germany - Max-Schmeling-Halle \n10.8 Brussels, Belgium - Forest National \n10.10 Manchester, UK - O2 Victoria Warehouse \n10.11 Glasgow, UK - O2 Academy \n10.12 Dublin, Ireland - 3Olympia Theatre \n10.14 Cardiff, UK - Great Hall \n10.15 London, UK - Eventim Apollo \n\nFollow NF \nInstagram: https://instagram.com/nfrealmusic \nFacebook: http://facebook.com/nfrealmusic \nTwitter: http://twitter.com/nfrealmusic \nSpotify: https://nf.lnk.to/spotifyYD \nWebsite: http://www.nfrealmusic.com \nEmail: https://nf.lnk.to/emailYD \n\nProducer: Nathan Feuerstein & Patrick Tohill\nDirector: Patrick Tohill & Nathan Feuerstein\n\n#NF #NFHOPE #HAPPY",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/vhumOLNSSJY/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/vhumOLNSSJY/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/vhumOLNSSJY/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/vhumOLNSSJY/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/vhumOLNSSJY/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 16,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "vhumOLNSSJY"
    //           },
    //           "videoOwnerChannelTitle": "NFVEVO",
    //           "videoOwnerChannelId": "UCI3H1FsjbdqGcLq93ZilV5g"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "PzX2M3x3xWTfm9vIHVCrJucbeMU",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy5FOThBQUYwMTBBMENCRkM3",
    //         "snippet": {
    //           "publishedAt": "2023-05-05T18:22:40Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "David Guetta, Anne-Marie, Coi Leray - Baby Don’t Hurt Me (Official Video)",
    //           "description": "Listen to “Baby Don’t Hurt Me” by David Guetta, Anne-Marie & Coi Leray: \nhttps://davidguetta.lnk.to/babydonthurtme\n\nSubscribe to be notified for new videos ➡️ https://davidguetta.lnk.to/YouTube\n\n#davidguetta #annemarie #coileray\n\nDIRECTOR: Hannah Lux Davis\nPRODUCTION COMPANY: London Alley\nEXECUTIVE PRODUCERS: Brandon Bonfiglic, Andrew Lerios & Luga Podesta\nPRODUCER: Andrew Lerios\nCREATIVE PRODUCER: Tatum Abbott\nDIRECTOR OF PHOTOGRAPHY: Corey Waters\nEDITOR: Eric Wysocki & Luis Caraza\n\nDavid Guetta & Anne-Marie & Coi Leray - Baby Don’t Hurt Me\n(David Guetta, Ed Sheeran, Coi Leray Collins, Anne-Marie Rose Nicholson, Johnny McDaid, Steve Mac, Akil \"worldwidefresh\" King, Feli Ferraro, Tobias Frederiksen, Mikkel Cox, Dee Dee Halligan, Junior Torello)\nProduced by David Guetta, Toby Green, Mike Hawkins & Johnny Goldstein\nAnne-Marie vocal producer: Cam Gower Pool\nMixed by Serban Ghenea at MixStar Studios, Virginia Beach, VA\nAssistant Mix Engineer: Bryce Bordone\nPublishers: JackBack Publishing Ltd, admin by Write Here Music (SACEM)/Reservoir Music (ASCAP); Sony/ATV Music Publishing Ltd; CLC Publishing/UMPG (BMI); EMI Music Publishing Ltd; Sony Music Publishing; Rockstone Music Ltd under exclusive license to Universal Music Publishing Ltd; King Wit A Dream Publishing, admin by Sony Songs (BMI); Bye Felicia’s Music/Straight From the Art Music (BMI), admin by Songs of Universal; Kobalt; Hanseatic Musikverlag GmBH/Warner Chappell Music France\nAnne-Marie appears courtesy of Major Toms/Asylum records UK, a division of Warner Music UK Limited\nCoi Leray appears courtesy of Republic Records and UMG Recordings, Inc\n(P) & (C) 2023 What A DJ Ltd, Under License to Warner Music UK Limited\n\nFollow David Guetta:\nInstagram: https://www.instagram.com/davidguetta/\nTikTok: https://www.tiktok.com/@davidguetta\nTwitter: https://twitter.com/DavidGuetta\nFacebook: https://www.facebook.com/DavidGuetta/\nWebsite: https://davidguetta.com/\n\nFollow Anne-Marie:\nInstagram: https://www.instagram.com/annemarie/\nTikTok: https://www.tiktok.com/@annemarie\nTwitter: https://twitter.com/AnneMarie\nFacebook: https://www.facebook.com/iamannemarie/\nWebsite: https://www.iamannemarie.com/\n\nFollow Coi Leray:\nInstagram: https://www.instagram.com/coileray/\nTikTok: https://www.tiktok.com/@coileray\nTwitter: https://twitter.com/coi_leray\nFacebook: https://www.facebook.com/OfficialCoiLeray/\nWebsite: https://www.coileray.com/",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/k3DBmAlUh1A/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/k3DBmAlUh1A/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/k3DBmAlUh1A/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/k3DBmAlUh1A/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/k3DBmAlUh1A/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 17,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "k3DBmAlUh1A"
    //           },
    //           "videoOwnerChannelTitle": "David Guetta",
    //           "videoOwnerChannelId": "UC1l7wYrva1qCH-wgqcHaaRg"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "GI6Lp4Q7aT6M21CJUkQRqYSBhIU",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy41NTg1MkQyQzRCRjlBOTRD",
    //         "snippet": {
    //           "publishedAt": "2023-04-29T18:59:58Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "Labrinth - Never Felt So Alone (Official Video)",
    //           "description": "Official video for “Never Felt So Alone” by Labrinth\n \nPre-Save/Pre-Add the new album 'Ends & Begins': https://www.labrinth.com/\n\nListen & Download “Never Felt So Alone” out now: https://lab.lnk.to/NFSA\n\nAmazon Music - https://lab.lnk.to/NFSA/amazonmusic\nApple Music - https://lab.lnk.to/NFSA/applemusic\nDeezer - https://lab.lnk.to/NFSA/deezer\niTunes - https://lab.lnk.to/NFSA/itunes\nSoundCloud - https://lab.lnk.to/NFSA/soundcloud\nSpotify - https://lab.lnk.to/NFSA/spotify\nTidal - https://lab.lnk.to/NFSA/tidal\nYouTube Music - https://lab.lnk.to/NFSA/youtubemusic\n\nDIRECTOR Daniel Sannwald @danielsannwald\nART DIRECTOR/MOVEMENT DIRECTOR Candela Capitán @candelacapitan\n\nCREATIVE DIRECTOR Rudy Grazziani @rudy\nVIDEO PRODUCTION, COLUMBIA RECORDS Bryan Younce @bryanyounce\n\nPRODUCTION COMPANY Somesuch & Noire Creative @somesuchandco & @noirecreative\nEXECUTIVE PRODUCER Alli Maxwell @iamallimaxwell\nEXECUTIVE PRODUCER Tim Nash @timmynasher\nEP + SUPERVISING PRODUCER Sara Lacombe @frassysassy\nNOIRE CREATIVE HEAD OF PRODUCTION Dain August @seabatomic\nSOMESUCH PRODUCTION MANAGER Ashley Soloman @ashleysoloman\nPRODUCTION MANAGER Laura Goldenstein @logold\nPRODUCTION COORD. Vladen Ponomar @vladenponomar\nASST PRODUCTION COORD. April Qualls @ayeprahl_badu\nOCA PROJECT MANAGER\nMarielle Co @marielleco + @originalcreativeagency\n\n1ST AD Ev Saloman @haitianev\n2ND AD Aris Ray @arisray.ig\n2ND 2ND AD Skye Grissom @skyegrissom\n\nDIRECTOR OF PHOTOGRAPHY Jeremy Valender @jeremyvalender\nGAFFER Mathias Peralta @mathiasperalta\nKEY GRIP Luke Poole @lanative_grip\n\nPRODUCTION DESIGNER John Richoux @johnrichouxdesign\nART DIRECTOR Nick DeCell @isthismyfloor\n\nASST. CHOREOGRAPHER Kiani del Valle @kianidelvalle\nSTUNT COORDINATOR Sara Beko @sara_beko_\nDANCER Ed Munro @edmunro\nDANCER Layne Williams @layne_willis\nDANCER Evan Sagadencky @evansagadencky\nDANCER Marirosa Crawford @marirosacrawford\nDANCER Orlando Agawin @orlandonod90\nTHE LOVER Monet Morton @monetmorton\n\nMAKEUP Nikki Parisi @nikkiparisi\n\nLABRINTH VANITIES\nSTYLIST Lisa Jarvis @lisajarvis_stylist\nGROOMER Sienree @sienree\n\nBILLIE EILISH VANITIES\nSTYLIST Lana Jay Lackey @lanajaylackey\nMAKEUP Emily Cheng @emilychengmakeup\nHAIR Ben Mohapi @salonbenjamin\n\nEDITOR Will Town & Modern Post @willhtown + @modern.post\nCOLOR John O'Riordan & Pundersons Gardens @_johngrades_ + @pundersonsgardens\nVFX Max Colt @maxcoltt \n\nFollow Labrinth:\nSpotify: http://smarturl.it/LabrinthSpotify\nApple Music: http://smarturl.it/LabrinthAppleMusic\nDeezer: http://smarturl.it/LabrinthDeezer\nInstagram: https://www.instagram.com/labrinth\nFacebook: https://www.facebook.com/Labrinth/\nTwitter: https://twitter.com/Labrinth\nOfficial Site: https://www.labrinth.com/\n\n#Labrinth #NeverFeltSoAlone #EndsAndBegins",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/pqCVMRcj_bc/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/pqCVMRcj_bc/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/pqCVMRcj_bc/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/pqCVMRcj_bc/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/pqCVMRcj_bc/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 18,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "pqCVMRcj_bc"
    //           },
    //           "videoOwnerChannelTitle": "LabrinthVEVO",
    //           "videoOwnerChannelId": "UCGLzRVwflLiCoKKErrMfREg"
    //         }
    //       },
    //       {
    //         "kind": "youtube#playlistItem",
    //         "etag": "spa4Ajlb4hFa7_Xq2NT-5xrPaCI",
    //         "id": "UEx4MHNZYkNxT2I4VEJQUmRtQkhzNUlmdHZ2OVRQYm9ZRy5CRDQyNTg1MUYyMUNGOUU0",
    //         "snippet": {
    //           "publishedAt": "2023-07-15T19:47:45Z",
    //           "channelId": "UClYiXQ2e1DUEPcWbcQtq1NA",
    //           "title": "$NOT - Easter Pink (Official Video)",
    //           "description": "The official video for $NOT’s “Easter Pink\" - Out Now!\n\nStream “Easter Pink\":\nhttps://snot.lnk.to/EasterPink\n\nText $NOT: (561) 220-3481\n\nFollow $NOT:\nWebsite: https://snot.xyz\nInstagram: https://www.instagram.com/snot\nTwitter: https://twitter.com/snot\nFacebook: https://www.facebook.com/officialsnot\nSoundcloud: https://soundcloud.com/sn0t",
    //           "thumbnails": {
    //             "default": {
    //               "url": "https://i.ytimg.com/vi/D3psPKLXTuE/default.jpg",
    //               "width": 120,
    //               "height": 90
    //             },
    //             "medium": {
    //               "url": "https://i.ytimg.com/vi/D3psPKLXTuE/mqdefault.jpg",
    //               "width": 320,
    //               "height": 180
    //             },
    //             "high": {
    //               "url": "https://i.ytimg.com/vi/D3psPKLXTuE/hqdefault.jpg",
    //               "width": 480,
    //               "height": 360
    //             },
    //             "standard": {
    //               "url": "https://i.ytimg.com/vi/D3psPKLXTuE/sddefault.jpg",
    //               "width": 640,
    //               "height": 480
    //             },
    //             "maxres": {
    //               "url": "https://i.ytimg.com/vi/D3psPKLXTuE/maxresdefault.jpg",
    //               "width": 1280,
    //               "height": 720
    //             }
    //           },
    //           "channelTitle": "Redlist - Fresh Charts",
    //           "playlistId": "PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG",
    //           "position": 19,
    //           "resourceId": {
    //             "kind": "youtube#video",
    //             "videoId": "D3psPKLXTuE"
    //           },
    //           "videoOwnerChannelTitle": "SNOT",
    //           "videoOwnerChannelId": "UCNUL2JzmNpQJV4avV9AdjeA"
    //         }
    //       }
    //     ],
    //     "pageInfo": {
    //       "totalResults": 150,
    //       "resultsPerPage": 20
    //     }
    //   }
    
    const [israel, setIsrael] = useState()
    const [section, setSection] = useState(israel)

    useEffect(() => {
      axios.get("http://localhost:3000/user/dummy")
        .then((res) => {
            console.log(res);
            setIsrael(res.data);
            setSection(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
        }, [])
        console.log(section);


    return (
        <div id='user-container' dir='rtl'>
            <div id='bali-logo'>BaLi</div>
            <Link to={'/admin'}>admin</Link>
            <div id='user-establishment-container'>
                <div id='establishment-logo'>ESTAB LOGO</div>
                <div id='establishment-slogan'>"עשה לך רב וקנה לך חבר"</div>
            </div>
            <div id='user-search-container'>
                <input id='user-searchbar' type="text" placeholder='חפש...'/>
            </div>
            <div id='user-suggestion-container'>
                {section && section.map((value, index) => {
                    return <SuggestionBox key={index} video={value} />
                })}
            </div>
            <div id='user-footer'>
                <div onClick={() => setSection(israel)}>ישראל</div>
                <div onClick={() => setSection(israel)}>עולמי</div>
                <div>עסק זה</div>
            </div>
        </div>
    )
}

export default User