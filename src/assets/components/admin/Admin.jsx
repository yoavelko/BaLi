import './Admin.css'
import Request from '../request/Request'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Draggable, { DraggableCore } from 'react-draggable';

function Admin() {

    const api = {
        "kind": "youtube#playlistItemListResponse",
        "etag": "XgMnsebYQMGtQgKKXl_u-v-p35w",
        "nextPageToken": "EAAaBlBUOkNCUQ",
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "RGmOJX1vq-MpX9X7B4v8GaeaXm8",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi42MzYyQ0E2MUE4ODAzQkU5",
                "snippet": {
                    "publishedAt": "2022-11-18T14:31:28Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "בניה ברבי - קרן שמש",
                    "description": "בניה באינסטגרם - https://www.instagram.com/benaia_barabi/\nבניה בפייסבוק - https://www.facebook.com/benaia.barabi/\n------------------------------------------------------------------------------------------------ \nלהזמנות הופעות - 03-3106031\noffice@barbamidbar.com\nיחסי-ציבור: נתנאל מויאל 050-8925363\n------------------------------------------------------------------------------------------------\n\nלשיר בכל שירותי הסטרימינג: https://fanlink.to/BenaiaKeren\n\nלהאזנה לאלבום \"קרן שמש\" בכל שירותי המוזיקה: https://fanlink.to/BenaiaKerenLP\n\nמילים :בניה ברבי, אבי אוחיון \nלחן: בניה ברבי, אבי אוחיון, מתן דרור\nהפקה מוסיקלית: ניר מימון, מתן דרור\nעיבוד: מתן דרור, ניר מימון, בניה ברבי\n\nאל תלכי,\nקרן שמש \nלא נגמר לנו היום. \nלמה את, מסתתרת \nעננים בכל מקום.\n \nאל תבכי, כמו הגשם\nלא חבל על הדמעות.\nיד חמה, מבקשת \nלחבק אותך שעות.\n \nאשים שירים שאת אוהבת,\nאתן לך יום להירגע.\nאני נגנב כשאת צוחקת \nככה אליי.\nתגידי מה את מבקשת \nשלא יהיה לי שום תירוץ.\nכשאין מילים את מתרגשת \nככה אליי.\n \nתחייכי,\nזה יפה לך\nזה עושה לי את היום.\nאם פתאום את נרדמת \nתחייכי גם בחלום.\n \nמטוסים בשמיים,\nאנשים על רכבות.\nאל תבכי, קרן שמש\nזה הזמן שלך לחיות.\n \nאשים שירים שאת אוהבת \nאתן לך יום להירגע \nאני נגנב כשאת צוחקת \nככה אליי.\nתגידי מה את מבקשת,\nשלא יהיה לי שום תירוץ.\nכשאין מילים את מתרגשת\nככה אליי.\n \nאל תבכי, קרן שמש,\nקחי לך בית אחרון.\nאיך תמיד את אומרת \nניפגש עם אור ראשון.\n \nאשים שירים שאת אוהבת,\nאתן לך יום להירגע.\nאני נגנב כשאת צוחקת,\nככה אליי.\n \nתגידי מה את מבקשת,\nשלא יהיה לי שום תירוץ.\nכשאין מילים את מתרגשת \nככה אליי.\n\n\nיוקלילי, גיטרה חשמלית: עידן שניאור\nקלידים ביטים ותכנותים: ניר מימון, מתן דרור\nקלידים נוספים: מור אוזן\nטרומבון, טובה: אודי רז\nכינור: ניצן קאנטי\nכלי הקשה: ניר מנצור \nבס: אבי יפרח, בניה ברבי\nחצוצרה : ספי ציזילנג\nמיקס : דניאל ברכר, מתן דרור\nמאסטרינג: דניאל ברכר\n\n\nקליפ \nבימוי וצילום: נדב אמבון\nצילום נוסף: סשה פרילוצקי, ליבנה ברבי\nעריכת וידאו: אייל אביב\nארט: לוקאס שובה\nצבע: רועי קייזרמן\nסטיילינג : עדי כהנים\n\nעיצוב עטיפה: Avoxvision\nהפצה דיגיטלית: D-Music",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/n5illsgvqKA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/n5illsgvqKA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/n5illsgvqKA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/n5illsgvqKA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/n5illsgvqKA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "n5illsgvqKA"
                    },
                    "videoOwnerChannelTitle": "בניה ברבי",
                    "videoOwnerChannelId": "UCnmHeCs19lkRYyfYqFnf5uA"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "mtTjxNRxtCdMGpuXqMwsG09VggI",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi43NkI3M0NGOUE4ODY2OTE1",
                "snippet": {
                    "publishedAt": "2022-11-18T14:31:40Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "אודיה & **** - האמת (Prod by. Moshe & Ofek)",
                    "description": "בס״ד\n\nלשיר החדש בכל שירותי הסטרימינג:\nhttps://fanlink.to/OdeyaEmet\n\nמילים ולחן: אודיה אזולאי\nעיבוד והפקה מוסיקלית: אופק יקותיאל, משה בן אברהם\nפתיח ״אתה לא ראוי לאהבה הזאת״ באדיבות מירו ומתנה הפקות\n\nוואלה אתה לא ראוי לטקסטים שלי\nלא אתה לא ראוי לרשימה הזאת של האקסים שלי\nתן להתפוצץ עליך שקט אין לי ברקסים\nוסתמתי את הפה יותר מדי\nאני לא מכבה הרפלקסים שלי\nהפעם בא לי לדבר\nכל מה שיושב לי על הלב אני אגיד\nאתה תתגבר\nזאת השבת הכי קשה שלי בחיים\nאתה לא תבין אתה לא שומר\nעליי יותר\nהרבה זמן לא חזרתי בוכה ממסיבות צהריים\nלקחתי כדור וכיביתי אותי ליומיים\nלא קמתי לקידוש\nאבל מה זה מעניין אותך אתה\nאכפת לך איך אתה לבוש\n\nהאמת\nהייתי חוזרת אחורה בזמן\nליום של שיחת יחסנו לאן\nהייתי מוותרת עליך\nמחבקת אותי\nוחוזרת לכאן האמת\nהייתי רוצה עוד שיחה עם האקס\nההוא שלימד אותי לחן וטקסט\nהייתי נלחמת עליו\nמחבקת אותו\nלא חוזרת לכאן\nבלעדיו\n\nכתבת עליי שירים אחרי שבוע ודקה\nוכשחבר שלך עוזב אז את זורקת לי חכה\nואת שולחת הודעות ומחכה\nנשבר לי מלשבור לך את הלב כשאת צריכה\n\nבא לך אהבה אז את דופקת לי בדלת\nאם לא תחבק אותי היום אני נופלת\nאיך אני חלש מול העיניים שלך\nשוב הן אדומות\nאני לא צריך שירים\nומאמי תכבי את המצלמות\n\nהאמת הייתי חוזר לי\nאחורה בזמן\nליום של שיחת יחסנו לאן\nהייתי מוותר על ההיא\nמחבק את עצמי\nוחוזר לי לכאן\nהאמת הייתי רוצה לדבר איתך שוב\nכי אנחנו זה מה שחשוב\nהייתי נלחם גם עכשיו\nבהוא שניצח\nשאין לי אותך אחריו\n\nהחולצות של הדיור שלך שנראות כמו פיג׳מה\nהחיבוק החצי מת שלך מיותר כמו ניקי ג׳אמה\nאתה קר אליי תקופה ואתה לא מספר לי למה\nלא מרגש אותך קהל ששר יורקת פה דם אה?\nלא נהיה ג׳סטין והיילי\nאו קניה וקים\nאו ביבי ושרה כי שנינו דפוקים\nאני עפה על טקסטים אתה על עוקבים\nאני עובדת קשה לך יש מנקים\n\nהאמת הייתי חוזר לי\nאחורה בזמן\nליום של שיחת יחסנו לאן\nהייתי מוותר על ההיא\nמחבק את עצמי\nוחוזר לי לכאן\nהאמת הייתי רוצה לדבר איתך שוב\nכי אנחנו זה מה שחשוב\nהייתי נלחם גם עכשיו\nבהוא שניצח\nשאין לי אותך אחריו\n\nכלי הקשה: משה בן אברהם\nפסנתר: אופק יקותיאל\nגיטרות חשמליות: עידן שניאור\nגיטרות אקוסטיות: מאור תיתון\nקולות: משה בן אברהם, גולן אברהם\nתכנותים: אופק יקותיאל, משה בן אברהם\nהוקלט באולפני O&M Studio\nמיקס ומאסטרינג: משה בן אברהם, אופק יקותיאל\n\nניהול וייצוג אישי: מיכל וייסברג aromamusic\nרוברטו בן שושן ופי איי איי , פרודקשן אדם אינבסמנט בע״מ.\nהפקת פוסט: זהבית לגאלי\nמפיק בפועל: ניב קקון\nשיווק ודיגיטל: עדי בן עמי\nעיצוב עטיפה, קליפ מילים: Avoxvision\nיחסי ציבור: עופר מנחם  menahem.ofer@gmail.com |\n  \nהפצה דיגיטלית: D Music\nניהול מדיה: ג׳ירף ניו מדיה\n\nניהול הפקה: עמוס מסיקה\nלהופעות: כספית ייצוג אמנים: 03-6886881\nמופעים פרטים: איילון 050-9494938\n\nכל הזכויות שמורות למחברים ©\nהליקון ארומה מיוזיק בע\"מ, אוקטובר  2022\n℗ 2022 Helicon Aroma Music Ltd.\n©2022 Helicon Aroma Music  Ltd.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/csafTcTFWDM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/csafTcTFWDM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/csafTcTFWDM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/csafTcTFWDM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/csafTcTFWDM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "csafTcTFWDM"
                    },
                    "videoOwnerChannelTitle": "אודיה - הערוץ הרשמי",
                    "videoOwnerChannelId": "UCKTbyJY0d-WRwFrXjBtETQQ"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "ktcgFfrNPhXluXK6fBziZTWf6P8",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi4xNzI4OTE0NTlBN0QyQUY0",
                "snippet": {
                    "publishedAt": "2022-11-18T14:31:51Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "אייל גולן - פנתרה (Prod. By Tamir Zur)",
                    "description": "אייל גולן בסבב היכלים - מופע חורף חדש!\n\n25.01, 26.01 - היכל מנורה מבטחים \n02.02 - היכל רוממה חיפה\n09.02 - ארנה ירושלים\nלכרטיסים\nhttps://2207.kupat.co.il/show/eyalgolan\n\nמילים: אופיר כהן. \nלחן: אייל גולן , אופיר כהן, אור חיים כהן ותמיר צור.\nקלידים ופסנתרים:  אופיר כהן\nעיבוד והפקה מוזיקלית: תמיר צור.\n\nייצוג: ליאם הפקות בע\"מ 03-6416415 \nניהול אישי: אודי גואטה 050-6347494 \nיחסי ציבור: רן רהב תקשורת ויחסי ציבור – \nלינור 0526714411\nנתנאל מויאל יחסי-ציבור 050-8925363\n\nמילים:\nאם אני צוחק סימן שטוב לי\nלא דופק חשבון לרכילות\nאני מהמר עלייך אול אין\nלאהוב אותך זה בא לי בקלות\n\nאת זורמת לי בתוך הווריד\nגם אלוהים יעיד\nלא תצעדי לבד\nוכלום בניינו לא יפריד\n\nפזמון:\nכי את פנתרה את משגעת את כל הבנים\nחפלה נדירה הלילה הם לא ישנים\nכי את פנתרה ולא חשוב לי מה כולם אומרים\nאחללה אווירה את רוקדת וכולם שרים \n\nאם אני בוכה סימן שרע לי\nבחיוך קטן עושה שלום\nהריקוד שלך הפך ויראלי\nכל המדינה על זה שרים את ההמנון\n\nגיטרות : עומרי זליג.\nתכנותיים וקלידים: אור חיים כהן, עומרי זליג ותמיר צור.\nכלי הקשה ודרבוקה: ניר שלום  \\\\ קולות רקע: אופיר כהן.\nמיקס: תמיר צור \\\\ מאסטרינג: רון תיכון.\nהוקלט ב – Musical Minds Studio  תמיר צור 2022\n\nעיצוב גרפיקה והפקת קליפים : AVOXVISION\nניו מדיה: MOBILE1 music\nהפצה דיגטלית: לינקטון\n\nכל הזכויות שמורות לליאם הפקות בע\"מ",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/d0gBmCQepRY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/d0gBmCQepRY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/d0gBmCQepRY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/d0gBmCQepRY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/d0gBmCQepRY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "d0gBmCQepRY"
                    },
                    "videoOwnerChannelTitle": "EyalGolanOfficial",
                    "videoOwnerChannelId": "UCrI0Slej0fiiwYPhR1EmFBw"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "C3HtBOdIzFA1Mo92A6mwUdykEC4",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi44OUE4RUIwOURGRUM0MDdG",
                "snippet": {
                    "publishedAt": "2022-11-18T14:32:04Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "טונה ויסמין מועלם - סהרה (חי בלייב פארק)",
                    "description": "טונה בקיסריה:  16.7.22 \nכרטיסים כאן: https://bit.ly/TunaLive\nלהאזנה והורדה: https://tuna.lnk.to/SaharaLive\nהפקה מוזיקלית: ניר דנן, יקיר בן טוב\nניהול אומנתי: ניר דנן ואיתי זבולון\n\nעריכת וידאו: ניר דנן ואיתי זבולון\nצבע ואפטר: נאור סוקי\nצילום הופעה: רועי חבני, יניב וקנין, עידו שחם, שחף בגר\n\nמילים: איתי זבולון\nלחן: איתי זבולון, ניר דנן, יקיר בן טוב\nגיטרה אקוסטית וקולות: ניר דנן\nקלידים וקולות: יקיר בן טוב\nמיקס: ניר דנן\nהקלטה וסאונד הופעה: טל סיון\nתאורה: מוחמד אבו סלמה\nניהול: ליאור מילר\nניהול הצגה: תהל שפר\nבקליין: משה לוי\nעיצוב: טל פוגל\nהפקה וניהול מדיה: אורטל לביא \nמאסטרינג: Jeremy Lubsey @ Vlado Meller\nהפצה: נענע דיסק\n\nניהול: ליאור מילר\nTunaoffice13@gmail.com\nלהזמנת הופעות טונה - כספית\n036886881\n\nטונה בפייסבוק: https://www.facebook.com/LamaTuna\nאינסטגרם: https://www.instagram.com/itay_tuna\nאתר ועד הוייב: https://bit.ly/TunaLive\nיוטיוב: https://tuna.lnk.to/YouTube\nספוטיפיי: https://tuna.lnk.to/Spotify\nאפל מיוזיק: https://tuna.lnk.to/AppleMusic\n\nיסמין מועלם - להאזנה בכל הפלטפורמות: https://bit.ly/JasminMehila\nיסמין מועלם בפייסבוק: https://www.facebook.com/JasminMoallem\nיסמין מועלם באינסטגרם: https://www.instagram.com/jasminmoallem\nלהזמנת הופעות יסמין מועלם: 'כספית' 03-6886881 kaspit@kaspit-art.co.il\nיח״צ יסמין: לירון פנחסי liron.prmail@gmail.com\nניהול יסמין: ׳יהלום׳ גלעד אדמוני ושרון ארביב hey@yahalomx.com\n\nכל הזכויות שמורות לוועד הווייב בע\"מ\n\n***\n\nהיי, חיפשתי כבר בכל מדבר\nאפילו בסהרה\nאנ'לא מוצא את הראש שלי\nאני פרופסור מפוזר\nתראי, העט על הנייר\nהלב איתך כפרה\nוואלאק איפה הראש שלי?\nאו-ווי\n\nהיא נווה מדבר בשביל גרון יבש \nכוכבים עבדו כפולות כדי שניפגש\nוכמו שראפרים רוצים לצוד קרדש\nכיוונתי, דרכתי ואש, אש, אש, אש\nהיא טובה, היא מתחמקת\nמול מיטב התכסיסים היא מפהקת\nבא לה רעש, הצעתי שקט\nהיססה קצת אבל בסוף היא לא הצביעה נגד\nוזה התאים כאילו שתי טיפות של פאזל\nאני לא יודע מה זה, אבל מאז אני תמיד איתה\nמה יש בך שגרם לי לשים בצד ת'האסל?\nהמדע עוד לא מבין את זה, אני אדע?\nאנשים חושבים אני על קראק\nיכולים לשרוף ימים שלמים על:\n\"רק את\" ו\"רק אתה\" \nו\"טה וטה טי\" ו\"טה טה טה\"\nמערבב ת'שוקולטה עם סלט של בטטה \nאני ב-\n\nהיי, חיפשתי כבר בכל מדבר\nאפילו בסהרה\nאנ'לא מוצא את הראש שלי\nאני פרופסור מפוזר\nתראי, העט על הנייר\nהלב איתך כפרה\nוואלאק איפה הראש שלי?\nאו-ווי\n\nלא מוצא כיוון כאילו אני לא מכאן \nמגולם לפרפר, עכשיו פרפר בהוריקן\nאז אם ראיתם איזה ראש כזה עם קוקו \nתנסו לצעוק לו \"זבולון\" ושלחו לנירו לאולפן\nהוא נעלם בתוך אופוריה משמחת \nכנראה בלי כוונה נתת לו בעיטה בתחת\nאיזה זוג ישרוד ביחד\nבלי למצוא את ההבדל בין אהבה, שליטה ופחד?\nשוכרים בית, שותים מאותו ספרייט\nחוזרים על אותו פייט, חוזרים על אותו… די\nגם אם מנקים את הראש עם סקוטשברייט\nשוטפים אותו טוב טוב, תמיד את בספוטלייט\nפרד, זוג, הו אילנה\nהיא גרמה לי לעבוד-בוד כמו ריהאנה\nהיא הייתה לי גם נירוונה. גם ג’ננה\nמתוקה כמו ביגידי-בקלאווה ופאטה כמו מורגנה, היי\n\nהיי, חיפשתי כבר בכל מדבר\nאפילו בסהרה\nאנ'לא מוצא את הראש שלי\nאני פרופסור מפוזר\nתראי, העט על הנייר\nהלב איתך כפרה\nוואלאק איפה הראש שלי?\nאו-ווי\n\n#טונה #יסמין_מועלם #מזרח_פרוע #סהרה",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/qALEkPoY-Hg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/qALEkPoY-Hg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/qALEkPoY-Hg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/qALEkPoY-Hg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/qALEkPoY-Hg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "qALEkPoY-Hg"
                    },
                    "videoOwnerChannelTitle": "Tuna Official",
                    "videoOwnerChannelId": "UCLCxf465pPOvPkEBJhN0ddg"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "45Hp3VcU9D6qOkcpboZ_D0_dSu0",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi40OEMzNzFDQjA5Q0YxMjQ3",
                "snippet": {
                    "publishedAt": "2022-11-18T14:32:29Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "אגם בוחבוט - קופידון (Prod by. Triangle)",
                    "description": "אגם בוחבוט בשיתוף פעולה עם סמסונג ישראל לרגל השקת סדרת המתקפלים החדשה Galaxy Z Flip 4\n\nניהול אישי וייצוג בלעדי\nGaga Management \nאורון כלפון ויואב גרוס בשיתוף זד אי הפקות, אמנון זנדני ומשה פרץ\nלהזמנת הופעות- גאגא 036056511 , בוכמן - 050-8914065 אופיר - 050-8499347\n\nלהאזנה לשיר בשרותי הסטרימינג\nhttps://orcd.co/cupid\n\nיחסי ציבור: זאביק דרור, עדי יואל 050-6800213\nשיווק דיגיטלי: יקיר ונה הפקות Y.V Productions\nקליפ מילים: AVOXVISION\nניהול דיגיטל: ביבר גלובל\nגרפיקה: Avoxvision\n\nמילים ולחן: עידו נצר, עמית מרדכי, בר אלמליח דונצוב, ים רפאלי \n הפקה מוזיקלית: עמית מרדכי,  עידו נצר, רותם ג׳ראד  (Triangle)\nמיקס: עידו נצר עמית מרדכי \nגיטרה: נועם בן עומרי\nבאס: עמית מרדכי, עידו נצר, נועם בן עומרי\nקלידים ותכנותים: עמית מרדכי, עידו נצר, יהלי בילר צידון, נועם זלטין\nעיבוד כלי נשיפה:  יונתן גורפינקל, יהלי בילר צידון, עידו נצר, עמית מרדכי \nכלי נשיפה: מתן גוב ארי (חצוצרה), רותם ג׳ראד (טרומבון), עפר כהן (סקסופון)\nקולות: נועם זלטין, אגם בוחבוט, ים רפאלי, עמית מרדכי, עידו נצר, יונתן גורפינקל, יהלי בילר צידון, אביב מורד, שני לוגסי, רותם ג׳ראד\n\nמילים:\nמאיפה באת?\nעם עיניים חום דבש על מאתיים קמ״ש\nכשאתה לידי זה יפה לך ממש\nזה יפה לך ממש\n\nקבענו בחמש אני למטה\nהוא לא חרטא\nהוא יודע טוב\nעשר ודקה מחזיר הביתה\nאפילו אבא שלי אוהב אותו\n\nארוחת שישי הוא בא אליי (ליי ליי)\nיודע לא יהיה פה טינניי (ניי ניי)\nאז ביי ביי\nלכל הבנות שהיית איתן לפניי\n\nהו ווהו\nעשית לי חם\nכמה מעלות\nהרמת לי ת׳לחץ דם\nצבעת ת׳לילות בלבן\nצורחת במקלחת\nהו ווהו\nהעיף לי ת׳סכך\nאיזה מלאך\nתודה קופידון יא אח\nלמה יפה כל כך\nטה טה טה דה\n\nקאט!\nנביא עציץ הכנה לכלב הכנה לילד\nאבל ניקח את זה לאט\nבלי לחץ\nניקח את זה לאט\nאבא שלו גנן הוא עונה בזמן לא מדליק מזגן מצטיין דיקאן\nלא משחק בדוקים הוא שולט באותיות אית״ן\nוהוא לא דן חסכן\n\nכולם לפתוח יומן\nחתונה בגן הפקאן\nסגרתי פרחים שמלה תקליטן\nשמישהו יעדכן ת׳חתן\n\nהו ווהו\nעשית לי חם\nכמה מעלות\nהרמת לי ת׳לחץ דם\nצבעת ת׳לילות בלבן\nצורחת במקלחת\nהו ווהו\nהעיף לי ת׳סכך\nאיזה מלאך\nתודה קופידון יא אח\nלמה יפה כל כך\nטה טה טה דה\n\nאל תהיה בן של זורחת השמש\nתענה לשאלה מליל אמש\nהיית שוחה בשבילי לירח?\nתטעם נו תטעם כל האוכל שלי מלח\nאתה מתוק כמו ריבה\nעד שמישהו ניגש אליי במסיבה\nבוא נשים על השתק ת׳עולם\nמאמי אני ואתה זה מושלם\nאיף נהייתי קיטשית\n\nהו ווהו\nעשית לי חם\nכמה מעלות\nהרמת לי ת׳לחץ דם\nצבעת ת׳לילות בלבן\nצורחת במקלחת\nהו ווהו\nהעיף לי ת׳סכך\nאיזה מלאך\nתודה קופידון יא אח\nלמה יפה כל כך\nטה טה טה דה\nהו ווהו\nעשית לי חם\nהרמת לי ת׳לחץ דם\nצורחת במקלחת\nהו ווהו\nהעיף לי ת׳סכך\nאיזה מלאך\nתודה קופידון יא אח\nלמה יפה כל כך\nטה טה טה דה\n\nVideo Produced by - ROMS\nhttps://www.roms.co.il/\nhttps://www.facebook.com/RomsStudios/\nhttps://www.instagram.com/roms_studios/\nבימוי, תסריט וקונספט - רומן בוצ'אצקי | Roman Buchatsky   \nhttps://www.instagram.com/roman_buchatsky/\nמפיקה ראשית - גלית בורנצוויג\nמפיקה בפועל - ספיר כהן\nצלם - מישה קמינסקי\nעוזרת במאי - מלינה קרפוביץ\nפוקוס פולר - מאיר ארד\nעוזרת צלם - יובל אוהב ציון\nתאורן ראשי - ירמי קביאט\nע. תאורה - דרור עידן, חיים כחלון\nגריפ - גולן קביאט\nע. גריפ - ניר הררי, אוהד אבן חיים\nמעצבת - רחלי לוין\nע. ארט - מיכאל חיות, עמיחי קמין דורון קנר\nלוקיישן - Livingroom Tlv \nFine_by_singa\n\nעריכה ופוסט - WAY\nhttps://www.instagram.com/way_studios\nhttps://waystudio.co.il/\nמפיקת פוסט - שני רייבר\nעריכת אופליין - רומן בוצ'אצקי\nעריכה נוספת - טל חיים\nתלת מימד, קומפוזיטינג וצביעה - יובל גור\nפתיח תלת מימד - עידו הרטמן\n\nהלבשה אגם בוחבוט - ראובן כהן\nע. הלבשה אגם בוחבוט - דניאל בן דוד\nאיפור אגם בוחבוט - אל אדידה\nאסיסטנטית איפור אגם בוחבוט - בר ליבל \nשיער אגם בוחבוט - עדן ירושלמי\nהלבשה קאסט - לירון שמעוני\nע. הלבשה קאסט - יובל חסידים\nאיפור קאסט - קרן אסף\nע. איפור קאסט - קרולינה מרקו\nשיער קאסט - ליאור גבריאלוב\nע שיער קאסט - סיוון רובינשטיין\nע. הפקה - טל קליין, עומר שחר, סנטוס פאנטה\nסוכן ביטוח - אסף קלכמן \nכוריאוגרפית - מיכל שי\nרקדניות - מאי יטקובסקי, מיה אגסי, ליאל שאול, יסמין מלסה\nקופידון - עידן שלו\nשחקן ראשי - אליעזר וקס\nמשתתפים - בן ניקסון\nדניאלה קאי פרידמן, בן שושן - H.H Models \nמתן אנקוה - Brodcast-PA - נילי רומנו, בן מלול, מאיה כץ, בנימין מסיקה\n \n \nפיץ' תוכן שאוהבים:\nמנכ\"ל: אייל סעדה\nסמנכ\"ל תפעול ולקוחות: צבי פלוטניצקי\nסמנכ\"ל פיתוח עסקי: שראל דניר\nסמנכ\"ל קריאייטיב והפקה: פרץ מרקיש\nניהול לקוח: מיכל קדוש\nניהול פרויקט: טליה הכהן\n\nקרדיטים הלבשה - אגם בוחבוט:\nינקי ונטף\n\nקרדיטים הלבשה - קאסט: \nטומי הימפילגר\n\nתודות מיוחדות: \nצוות Livingroom Tlv  - אלירן צדק, סינגה, מוריה מורלי\nפיטוסי שירותי מצלמה\nקוסטיה וסילקוב",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/C1ToP8UZr-s/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/C1ToP8UZr-s/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/C1ToP8UZr-s/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/C1ToP8UZr-s/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/C1ToP8UZr-s/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "C1ToP8UZr-s"
                    },
                    "videoOwnerChannelTitle": "אגם בוחבוט - הערוץ הרשמי",
                    "videoOwnerChannelId": "UC9TW96-3a8_scwVJjo9_PbA"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "c-favxSwuNj_pj-wILlNiEQD2Is",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi5COUU4NzEzMzg1MkZFQjlE",
                "snippet": {
                    "publishedAt": "2022-11-18T14:32:40Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "נועה קירל - פנתרה (Prod. By Jordi)",
                    "description": "הקליפ בחסות קוקה-קולה ישראל\nהורידו עכשיו את אפליקציית קוקה-קולה:\nhttps://cocacola.onelink.me/VHZw/NoaKirel\n\nיחסי ציבור: שיר פינטו דוברות ויחסי ציבור\n להזמנת הופעות פרטיות - 054-798-0676 \nלהזמנת המופע לאירועים סגורים – \n- NMC- 03-6909817  \nשיווק דיגיטלי: יקיר ונה הפקות Y.V Productions\nמנהלת סושיאל נועה קירל: רוני פרץ \n\nמילים ולחן: רון ביטון, ירדן \"ג׳ורדי\" פלג, איתי שמעוני ונועה קירל \n\nאני פנתרה\nאני ערה וכולם ישנים\nהם אומרים שאני מוזרה\nאני אומרת שהם רגילים\n(נועה קילה)\n\nפנסים דולקים עליי בלילה\nכל העיניים עליי, כל העיניים עליי (אני פנתרה)\nעדיין ממשיכה לעלות למעלה\nאל תגידו לי די, רק אל תגידו לי די די די\n\nיצאתי עם שיניים חשופות - נושכת\nבוא תביא לי אלף אריות - טורפת\nמוזמנים לראות ת׳קבלות - מוכרת\nכל העיניים עליי\n\nואיך אנ'לא אוהבת מוסכמות - שוברת\nוכמה שישימו לי גבולות - עוברת\nוכל מה שעושים אני עושה - אחרת\nרק אל תגידו לי די\n\nכל היום אני בכל מקום\nאין דקה לנשום, אין דקה לנשום\nבלילות אנ'לא רוצה לחלום\nאני רוצה לטעום, אני רוצה לטעום\n\nאני פנתרה\nאני ערה וכולם ישנים\nהם אומרים שאני מוזרה\nאני אומרת שהם רגילים\n\nחגורה שחורה \nאל תלמדו אותי תרגילים\nאני נולדתי ככה אשכרה\nוהיום כבר כולם יודעים\nאני פנתרה\n\nכשאני נותנת ת'סימן\nכל העיניים עלי\nרק אל תגידו לי די די די\n\nכולם מדברים אני עושה בשקט\nואם זה לא בא לי טוב אני מוחקת \nשמה ת'מעיל המנומר - שואגת\nרק אל תגידו לי די\n\nכל היום אני בכל מקום\nאין דקה לנשום, אין דקה לנשום\nבלילות אנ'לא רוצה לחלום\nאני רוצה לטעום, אני רוצה לטעום\n\nאני פנתרה\nאני ערה וכולם ישנים\nהם אומרים שאני מוזרה\nאני אומרת שהם רגילים\n\nחגורה שחורה \nאל תלמדו אותי תרגילים\nאני נולדתי ככה אשכרה\nוהיום כבר כולם יודעים\nאני פנתרה\n\nעיבוד והפקה מוסיקלית: ירדן \"ג׳ורדי\" פלג\nגיטרות: יוחאי פורטל \nחצוצרה: מתן גוב ארי\nקלידים ותכנותים: ירדן \"ג׳ורדי\" פלג\nמיקס ומאסטרינג: ירדן \"ג׳ורדי\" פלג\n\nניהול וייצוג בלעדי: רוברטו מיוזיק – רוברטו בן שושן:\nhttps://www.instagram.com/roberto_ben_shoshan1\n\nExecutive Producer Israel: Kamila Chantov @kamila_chantov\nExecutive Production : Raconteur Studio @raconteur.studio\nDirector : Indy Hait @indy.hait\nProduction Service Company: Warsaw Witches Association | WWA @warsawwitches\nDP: Jakub Stoszek | WWA @kubastoszek\nExecutive Producer Warsaw Witches: Marta Berens @martaberens\nLine Producer Warsaw Witches: Konstancja Landsberg\nProduction Coordinator: Kuba Nowakowski | Maciej Skrzyński \nProduction Assistant: Kateryna Oleshko | Leon Korzyński | Franciszek Knecht\nProduction Runner: Lucjan Janiszczyn\nSet Designer: Jana Kuczyńska\nSet Design Team: Aliaksei Hryharovich | Gleb Burnashev | Evgeniy Chernichenko \nChoreographer: Marina Ashotovna @dnnbdhdueuk\n1 AD: Kasia Frątczak\nSet Manager: Remik Kubiak\nFocus Puller: Krzysztof Solich \n1AC: Aleksandra Kamińska\nGaffer: Szymon Kuc\nSparks: Dominik Granas | Jakub Kapusta\nGrip: Grip 7\nMake up: Monika Kropat\nHair: Alina Dębowska\nStylist : Itay Bezaleli\nWardrobe PL: Dzvinka Kukul \nActing Coach: Christopher Mack\nStage Hands: Marcin Skajnowski | Marcin Buczyński | Paweł Merski\nMedic: Paweł Matyka\nCreative manager (Coca-Cola Israel): Roey Medalie   @Roeymedalie\nMarketing Brand manager  (Coca-Cola Israel):  Yael Saegev Gaber\nMaking of: Tomasz Kiełbasa\nLocation scouting: Tutaj Lokacje Filmowe\nCamera: ATM\nLighting: ATM\nTransport: Mariusz Waś | Marek Derbich | Robert Pawlak\nEditor: Indy Hait\nColorist: Colorist- Indy Hait \nVFX- Indy Hait\nFilm: Kodak Motion Picture Film @kodak_shootfilm\nLab: Cinelab | London @cinelabuk\nDesign Cover: Avoxvision\n\n#נועהקירל #פנתרה",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ZOf7aMbzQAM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ZOf7aMbzQAM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ZOf7aMbzQAM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ZOf7aMbzQAM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ZOf7aMbzQAM/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "ZOf7aMbzQAM"
                    },
                    "videoOwnerChannelTitle": "Noa Kirel",
                    "videoOwnerChannelId": "UC7sHZrh1-mdwyBLq52m1MSw"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "xE5Ismwk_8gQ4NurO-Zv91bhqnE",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi5CNDEwQURGQjkwNDIzRUYw",
                "snippet": {
                    "publishedAt": "2022-11-18T14:32:49Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "עדן בן זקן - כינורות (Prod. By Matan Dror)",
                    "description": "בס\"ד\n\n✨לאור הביקוש מופע עשור נוסף של עדן בן זקן!✨\n24/8 יום חמישי היכל מנורה 360 | כרטיסים אחרונים בקופת לאן: https://bit.ly/EBZ2408\n\nעדן בן זקן באינסטגרם: http://bit.ly/Eden_INSTA\nעדן בן זקן בפייסבוק: http://bit.ly/Eden_FB\n_____________\nניהול אישי ורפרטואר : לירון פרנקו liron.franko@gmail.com \nייצוג בלעדי והזמנת הופעות: שרית הפקות בע\"מ/04-9816716\nאירועים פרטיים הילה  050-5533448\nכל הזכויות שמורות לשרית הפקות בע\"מ וארומה Music\n_____________\nלשיר החדש בכל שירותי הסטרימינג: https://fanlink.to/EdenKinorot\n\nמילים: אבי אוחיון\nלחן: אבי אוחיון, מתן דרור, מור אוזן\n\n\nאל תנסה בכלל למכור לי אשליות\nאם תחפש אותי יצאתי לבלות\n\nנשבר ממשחקים כבר\nמה תלא מבין גם \nזוז אתה מסתיר לי\nלמה סתם לשרוף זמן\n\nאל תחבק אותי גם לא בחלומות\nאם תחפש אותי יצאתי לבלות\nככה שיכאב קצת קח לך שבוע\nככה שתלמד גם מה זה געגוע\n\nכינורות מנגנים לי בלילה לבד\nככה בלעדיך\nאתה לא מאמין איך קשה לי לחיות\nבלי למות עליך\nולמה תמיד שהכעס נרדם\nהשפיות חוזרת\nמנסה להסתיר וקשה לא לראות\nאיך אני אוהבת\n\nאל תנסה בכלל לתת לי הסברים\nלא מתנחמת מצרות של אחרים\nפתח את העניים\nיאלה תתעורר כבר\nלא רוצה כפיים \nמשהו לא קורה כאן\n\nאל תחפש בכוכבים במזלות\nאם לא תראה  אותי יצאתי לבלות\nלמה להרוס סתם \nלא חבל תגיד לי\nלא רוצה להיות שם\nכל זה לא מתאים לי\n\n\n\nעיבוד והפקה מוזיקלית: מתן דרור\nביט, בס, קלידים ותכנותים: מתן דרור\nגיטרות: מור אוזן\nקלידים נוספים: אסף צרויה\nשייקר: אבי אוחיון\nקולות: עדן בן זקן, שירה מור אדירי\nמיקס: מתן דרור\nמאסטרינג: ארן לביא\n\nבימוי ואנימציית תלת מימד: Avoxvision\nעיצוב עטיפה: Avoxvision\nניהול מדיה: יקיר ונה הפקות Y.V Productions\n\nהפצה דיגיטלית: D-Music",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4uyUMjIhp-U/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4uyUMjIhp-U/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4uyUMjIhp-U/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/4uyUMjIhp-U/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/4uyUMjIhp-U/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 6,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "4uyUMjIhp-U"
                    },
                    "videoOwnerChannelTitle": "עדן בן זקן - הערוץ הרשמי",
                    "videoOwnerChannelId": "UCt927ZDEsYMJL_8PXqMiVhg"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "ZJc1X3E_72O2Qcia65CfadGpR4A",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi4zNEM4RkZDQUU4MEYwQzJE",
                "snippet": {
                    "publishedAt": "2022-11-18T14:32:58Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "בן צור - מה עובר לך בראש",
                    "description": "ניהול אישי ואומנותי - איקו כהן\nלהזמנת הופעות: 0549202121\nייצוג ושיווק הופעות: Nmc united\nניהול יחסי ציבור: גילת קאשי - 05022640959\n\n\nמילים ולחן: תמר יהלומי ויונתן קלמי\nעיבוד והפקה מוזיקלית: בן צור\n\nמסיים את היום שלי בתשע \nמורח ת׳זמן על הכביש \nמבטיח לכתוב יותר על אבא \nבחוץ הכל הבל הבלים\n\nומה עכשיו את נעלמת \nכאילו שאני סתם איש\nזה עולה לי בבריאות תגידי למה\nאני בכלל מחפש אשמים… ? \n\nמה עובר לך בראש \nאנ׳לא רוצה לנחש \nאת רק תתחילי לכעוס \nואני בורח מאש \n \nאז מה אני מבקש \nאם אין לך כבר מה לתת\nבסוף אני רק הורס \nאז בינתיים שותק \nבנינו יש שקט \nבנינו יש שקט… \n\nאנ׳לא רוצה לוותר על הלב שלך\nהיום בחוץ לא מוצאים מה שלי יש איתך  \nאני כותב לך שירים ואת עושה לי שרירים  \nאני אלוף העולם בלהפסיד אותך  \n\nמה לא מספיק לך לקחת את הלב שלי\nאני לא ביקשתי תודה רק שתהי פה איתי \nאני כותב לך שירים, את לא אוהבת מילים \nאני אלוף העולם בלהפסיד אותך .   \n\nואין לי תלונות על הרגש \nאולי יש לי לב מקולקל \nאולי אני זה שאוהב באמת\nואת זאת שכבר לא אוהבת בכלל  \n\nאז מה עבר לך בראש \nתראי אני עוד חובש \nלאט את כל הפצעים \nהפקרת אותי בתוך אש \n\nשל אהבה עם עצמי \nואת לא כאן כבר מזמן\nאני רציתי פשוט ואת רצית מסוכן\n\nאנ׳לא רוצה לוותר על הלב שלך…\n\nצלם סטילס: טל שחר\nסטיילינג: כינרת מנור מזרחי\nקליפ מונפש ועיצוב עטיפה : ירין אלוש | 050-321-3997\nניהול מדיה: יקיר ונה הפקות Y.V Productions\n\nהפצה דיגיטלית: D-Music",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/k6VOZwkXmfA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/k6VOZwkXmfA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/k6VOZwkXmfA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/k6VOZwkXmfA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/k6VOZwkXmfA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 7,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "k6VOZwkXmfA"
                    },
                    "videoOwnerChannelTitle": "בן צור הערוץ הרשמי",
                    "videoOwnerChannelId": "UCWBO6JcrL1q5oz-AgtPViyA"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "gKKuuWsyFCJzbXHX8gsa1G4fQ7g",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi4xODJEMEQ5M0RCMDRGMzcy",
                "snippet": {
                    "publishedAt": "2022-08-13T06:49:53Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "מאיה דדון - יאללה ביי (Prod. by Maor Shitrit)",
                    "description": "מאיה בטיקטוק: https://www.tiktok.com/@mayadadon30\nמאיה באינסטגרם: https://www.instagram.com/maya_dadon1/\n\nניהול אישי : קורל טרבלסי \nניהול אומנותי : עדן בן זקן \nייצוג : אייקון ארטיסט מנגמנט בע״מ מאת שוקי ביטון ורוברטו בן שושן\nיחסי ציבור: עופר מנחם 050-7286538 // menahem.ofer@gmail.com\nלהזמנת הופעות : שרית הפקות רותי : 0525219616\n\nלשיר החדש בכל שירותי הסטרימינג: https://fanlink.to/MayaYalla\n\nמילים ולחן: רון ביטון ומאור שטרית \n\nבנות להזיז את האגן לימין\nואז את האגן לשמאל\nואז אתן תראו ת'בנים נכנסים לעניינים\nובאים לשאול\n\n(מה זה? של מי את? תגידי לי מותק)\nתזהר כי אין לי עותק\n(מה זה? מאיפה את באת לי יא וואלי?)\nאתה נראה לי מתבלבלי\n\nאיך הוא בא וזורק לי שטויות \nהוא כזה משוגע\nהבנות שוב אומרות לו  \nחיימי אתה לא נרגע\nמה חיפשתי לי גבר אחד כזה כולו בקלאס\nמאמי אתה מזה לא מנומס \nתקשיב אתה לא תעשה לי קרקס\n\nיאללה ביי\nאל תדבר יותר מדי\nהתייאשתי אז אולי \nלך תיפול עכשיו על מישהי אחרת\n\nיאללה ביי\nרק שרוטים נופלים עליי\nנו תגיד לי עד מתי\nאל תשלח לי הודעות אני חוסמת\n\nיאללה ביי\n\nבנות להזיז את האגן לימין\nואז את האגן לשמאל\nואז אתן תראו ת'בנים נכנסים לעניינים\nובאים לשאול\n\n(מה זה? של מי את? תגידי לי מותק)\nתזהר כי אין לי עותק\n(מה זה? מאיפה את באת לי יא וואלי?)\nאתה נראה לי מתבלבלי\n\nלא מפסיק לנסות \nמספר לי שהוא מאוהב\nאם מישהו יוריד ביטחון \nאני זה שאתן לך ת'גב \nאת הכל כבר שמעתי \nאת מי אתה בא לסובב\nמאמי אתה לא כזה מאהב\nלא אני לא מחזירה לך עוקב\n\nיאללה ביי\nאל תדבר יותר מדי\nהתייאשתי אז אולי \nלך תיפול עכשיו על מישהי אחרת\n\nיאללה ביי\nרק שרוטים נופלים עליי\nנו תגיד לי עד מתי\nאל תשלח לי הודעות אני חוסמת\n\nיאללה ביי\n\nעיבוד והפקה מוזיקלית: מאור שטרית\nקלידים ותכנותים: רון ביטון, מאור שטרית, מוטי כוחי\nקלידים וכינורות: אור כהן\nקולות:רון ביטון ומאור שטרית \nמיקס: מאור שטרית \nמאסטר: איציק פאליבה\n\nחברת הפקה MEMI PRODUCTIONSבשיתוף סטודיו poze,ובית מכבי - החברה העירונית ראשל״צ לתרבות ספורט ונופש.\n\nבימוי הפקה ותסריט- רז ממי\nצלם עורך - דוד גולדשטיין\nתאורן ראשי- דניאל סולודודה\nע. צלם - אדריאן חצבני\nע.תאורן - סם סולודוכין \nע. הפקה- יאן ברדיצ׳בסקיאיפור- ערן ישראלי\nשיער- קובי קלדרון\nסטיילינג מאיה- סימה ביטון\nהלבשה קאסט - ״פומה - puma”\nכראוגרפיה- מור חממי\nע. כראוגרפיה- גל בזיס\nצילום סטילס - אורטל טרבלסי\nעיצוב עטיפה : Avoxvision \nשחקן - דוראל שניידרמן - סוכנות divided\nרקדניות- יעל פרץ, עדי בללי, שי רביב, אוריה בוזגלו, מיכל בוקובסקי, הודיה ביטאו, ליאן מועלם, הילי אלג׳ם, שקד סווירי, נועה לביא, ליה קירל, ליאם מוסלטי, משי בוארון, שקד צ׳קול.\n\nתודות מיוחדות:תודה גדולה לבית מכבי ראשל״צ,חברה העירונית ראשון לציון לתרבות ספורט ונופש.תודה נוספת למותג הבגדים פומה.\n\nהפצה דיגיטלית : D-Music",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/BjQAaE_Dm78/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/BjQAaE_Dm78/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/BjQAaE_Dm78/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/BjQAaE_Dm78/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/BjQAaE_Dm78/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 8,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "BjQAaE_Dm78"
                    },
                    "videoOwnerChannelTitle": "מאיה דדון - הערוץ הרשמי",
                    "videoOwnerChannelId": "UC_nUJEFS5JqsYgnvq4Y9Dew"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "YAcpZqkEbFPu_HOX0Ibo-qF0ItU",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi44OEI3NUQ0QTlFM0FCOUU4",
                "snippet": {
                    "publishedAt": "2022-05-29T10:47:38Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "אנה זק - מי זאת || Anna Zak - Mi Zot",
                    "description": "ITMODELS\nניהול אישי וייצוג בלעדי – אופיר חמו\nלהזמנת הופעות גאגא בוקינג – 050-8499347 / 050-8614065\nיחסי ציבור : חגית נוביק סלומון & ירון כהן \nשיווק דיגיטלי: יקיר ונה הפקות Y.V Productions\n\nלשיר החדש בכל שירותי הסטרימינג: https://fanlink.to/AnnaMiZot\n\nמילים ולחן : אור בן ברוך , שירה מרגלית , יובל מעיין , רון ביטון\nעיבוד והפקה : יובל מעיין\n\n\nמי זו פה שקמה על הבוקר עם הלוק של הביוקר לא\nבודקת תמחיר \nלא צריכה לשאול את המראה במעלית אני יודעת מי הכי יפה בעיר אני \nכולם מחכים לה על הממתינה \nאם זה לא דחוף לה אז היא לא עונה \nלא עושה סיפור עושה מה באלה\n באה טיל עם הפיגמה \nקח מספר ואז תמתין\n\nתרשום \n052538164\nתוסיף גם 8\nהוא בטח לא מפסיק עכשיו להתקשר\nאופס הבאתי לו מספר אחר \n\nפייייי מי זאת\n\nאין אחד שלא מכיר\nואם 'תה לא מכיר אותי אז יאלה שתה כוס מים קח אוויר \n\nהגננת כבר ידעה בגן \nשהיא מבזבזת לי ת'זמן \nלימדתי ת'מורה שלי לאן לצאת\nמבוקשת כל הלוז שלי איוונטים \nכל המקרר שלי מגנטים\nהרמטכל ביקש ממני בתי\"ם\nמי זאת רוקדת על הבר\nכאילו אין מחר\nרוצה את המספר? תרשום\n\n052538164\nתוסיף גם 8\nהוא בטח לא מפסיק עכשיו להתקשר\nאופס הבאתי לו מספר אחר\n\nפייייייי מי זאת \n\nבוא לפה \nאל תיגע\nתזהר\nפן תיפגע\n\nתחכה\nעד מחר\nנו אל תכעס הכל בשביל הפאן\nאל תתקשר כי אין לאן\nכולם יודעים שזאת אני אני אני אני\n\nפיייייייי מי זאת\n\n\nקלידים ותכנותים : יובל מעיין \nכלי הקשה : יובל מעיין \nקולות : אנה זק , שירה מרגלית , אור בן ברוך , יובל מעיין\nמיקס ומאסטרינג : ארן לביא \n\n\nחברת הפקה - אורי אמיתי הפקות\nהפקה בפועל - אורי אמיתי, עומר טוהר\nבמאי וקונספט - איתמר לידר שירי\nצלם - יונתן קובץ׳\nארט דיירקטור - אור עדני\nסטיילינג - מזל חסון\nכוריאוגרפיה - אופק שובל\nאיפור אנה - אל אדידה\nשיער אנה - רן קריסי\nע במאי - לי-את הלר\nפוקוס פולר - ארמן סרקיסוב\nע צלם 2 - גלי רובין \nע ארט - יותם כהן, חנוך וובה, גילי כהן, שארלי שאולפור\nתאורן - טיומה טרחוב\nע תאורה - דניאל ראנדל\nע תאורה 2 - אשרף ג׳ורון\nגריפ - רונן יהלומי \nע גריפ - אוריאל צרפתי \nע גריפ 2 - לב\nביוטי דוגמנים ורקדנים - שרון גרייפנר, נופר דואני, רוני רבינוביץ׳, אלירן שלום, מוראל בן חיון, אביב גרבלי, אוראל עטון\nע סטיילינג - שקד דרעי, רונית\nע הפקה - ירדן וינברן, דניאל ליאצקי\nדוגמנים ודוגמניות - סטלה פילימונוב, מיה מורגנשטרן, טל יוסיפוב, מאור זמר טוב, שירה קינן, יעקב יהודין, דוד קאופמן, אריאל קוצ׳רגינסקי, אלעד נבון, איתי שלפק, ג’ורג’יה בל, יארה רוס \nרקדנים ורקדניות - שחר חג׳יוב, אסף פרקש, גילי גרינשטיין, סהר ויג, ליה גיסין, יאגו פהיירה\nמורה - קמא קמילה\nילדה - מיקה וויל\n\nפוסט פרודקשן:\nאופליין - אליפלט, עידן סטולר\nקאלר - גל איסר\nאונליין - אלון טיסון\nעריכת סאונד - איתן קריאף\n\nעיצוב גרפי: AVOXVISION\nהפצה דיגיטלית: D-Music\n\nתודות מיוחדות : \nריקי דלאל - חליפות",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/bcuRKDY0Rz0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/bcuRKDY0Rz0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/bcuRKDY0Rz0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/bcuRKDY0Rz0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/bcuRKDY0Rz0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 9,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "bcuRKDY0Rz0"
                    },
                    "videoOwnerChannelTitle": "Anna Zak Official Channel",
                    "videoOwnerChannelId": "UC9RDj8ozUQWm4oSsSV_aVHg"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "EPCiyDrj64W5__djVzsAs087VTM",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi5EQkEyODM0NTk2MUFEQkYz",
                "snippet": {
                    "publishedAt": "2022-08-13T06:50:08Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "Farah Chreim - Albi Elou [Official Lyric Video] (2022) / فرح شريم - قلبي الو",
                    "description": "Farah Chreim - Albi Elou [Official Lyric Video] (2022) / فرح شريم - قلبي الو\n\nWritten & Composed By: Mahfoud Al Maher\nArranged, Mix & Mastering By: Houssam Saabi\nVideo By: Muki Huduti\n\nDigital Distribution @WataryProduction \n\nLyrics | كلمات\n\n“يا بيي عيونو قتلوني والبسمة الحلوة الحنوني\n\u200f\u200eشفت في وكل شي بدي \u200eلعندو هني جابوني\n\u200f\u200eسمارو هدلي حيلي قلبلي نهاري مع ليلي\n\u200f\u200eع دربو بس بدي كفي تيغفا بقلبي شي ليلة\n\n\u200f\u200eقلبي الو هو عمري الحلو\n\u200f\u200eيا عيوني تغزلو بجمالو\n\u200f\u200eالضحكة حلا قلبي شافو ابتلى\n\u200f\u200eهالدنيي بدلا كرمالو\n\n\u200f\u200eخدوني ع بيتو دغري \u200eتكفي بحضونو عمري \n\u200f\u200eمابدي لا مال ولا جاه وبقبل بعيونو مهري\n\u200f\u200eبعيني  هالدني حلا لي شافو بجمالو صلى\n\u200f\u200eسرقلي هالقلب مني ونصيبي بالدني كلا”\n\n#farahchreim #albielou #فرح_شريم #قلبي_الو\n\nListen to ”Albi Elou“ on all the digital platforms: \nhttps://lnkfi.re/AlbiElou\n\nKeep Listening to Farah Chreim on:\nAnghami: https://play.anghami.com/artist/10059384\nSpotify: https://open.spotify.com/artist/76hwkSg4dVAp3IYhM5VqWc\nApple Music: https://music.apple.com/us/artist/farah-chreim/1571738179\nDeezer: https://www.deezer.com/us/artist/147446652\nYoutube Music: https://music.youtube.com/channel/UCto48p0Talr8GrOm9E2DKJw\n\nSubscribe to Farah Chreim channel for all the best and latest official music videos, behind the scenes and live performances\nhttps://www.youtube.com/c/farahchreim\n\nFollow Farah Chreim on:\n• Instagram: https://www.instagram.com/farahchreim/\n• Tiktok: https://www.tiktok.com/@farahchreim?l\n• Facebook: https://m.facebook.com/farahchreim/\n• Twitter: https://mobile.twitter.com/farahchreim\n• Snapchat: https://www.snapchat.com/add/chreimfarah \n\nContact\ninfo@musicismylife.com\n0096181111841",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XiL2F84vOw0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XiL2F84vOw0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XiL2F84vOw0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/XiL2F84vOw0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/XiL2F84vOw0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 10,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "XiL2F84vOw0"
                    },
                    "videoOwnerChannelTitle": "Farah Chreim - فرح شريم",
                    "videoOwnerChannelId": "UCkV5ZjNEj3tgAto1MtadUTQ"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "gNRHJVvxgZ5o1DRV62dDkrcGBnI",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi43RkJGOTAwRDhCOEQ1RjIy",
                "snippet": {
                    "publishedAt": "2022-08-13T06:50:20Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "أغنيه | ويش جابك قلي ويش جابك من مده سكرت بابك -  ( جودي الحوتي ) حصريآ 2022",
                    "description": "أغنيه | ويش جابك قلي ويش جابك من مده سكرت بابك -  ( جودي الحوتي ) حصريآ 2022\nجودي الحوتي - ويش جابك | Joudy - Wesh Jabak (Official Music Video) [Prod  Saleh Yasser ] \n🇱🇾🇱🇾🇱🇾 أغنية ليبية \nMusic Produced By: Saleh Yasser\nComposed By: Joudy Alhoty , Saleh Yasser\nLyrics: Joudy Alhoty \nRec, Mix & Master : Saleh Yasser\nRecorded At: Dolphin Studios\nDirected by. Ahmed Temsah\nEditing and Director of Photography. Hammadi Bodji\nPhotography. Salem Al-Jaj\nPhotography. Drone Awad Al Manfi\nColoring and graphics. Nabil El Rouba\nDirected By: Ahmed Altmsah\nPowered by: Takwene \nSocial Media : mohaned.zaiter - Ahmed Sharabia\n\nFollow Joudy on:\n----------------------------------\nInstagram: https://instagram.com/Juoooody\nSnapchat: Joudyal7houty\nTikTok: https://tiktok.com/@ju.o_d\n\nFollow Saleh Yasser on:\n----------------------------------\nInstagram: https://instagram.com/saleh.yasser\u200b  \n\nالكلمات :\nويش خطرها\nتسيب العين تسمرها \nتعقب أعذار وتهجرها\nجايني توا تبي حنيني\n\nراح بقسميته\nغلاك من الماضي عديته\nنحلفلك ناسي ونسيته\nما عاد معاك نضيع سنيني\n\nيا قلبي ياللي الليل أمسهرني\nفي جرت اللي ماعبرني\nنساني واجد كسرني\nما نمشيله، ولا قلبي يوماً نعطيله\nاللي نزل دمعي في ليله يجيك يوم يا هاجرني\n\nتقسى تنسى تنتسى\nأنت البادي بالجفاء\nقلبي ما تديره لعبة\nيجيك يوم وتتجدى\nتقسى تنسى تنتسى\nأنت البادي بالجفاء\nقلبي ما تديره لعبة\nيجيك يوم وتتجدى\nويش جابك قولي ويش جابك\nمن مدى صكرته بابك\nراح الوقت فاتك\nما عاد غيابك يعنيني\nويش جابك قولي ويش جابك\nمن مدى صكرته بابك\nراح الوقت فاتك\nما عاد غيابك يعنيني\n\nويش خطرها\nتسيب العين تسمرها\nتعقب أعذار وتهجرها\nجايني توا تبي حنيني\nراح بقسميته\nغلاك من الماضي عديته\nنحلفلك ناسي ونسيته\nما عاد معاك نضيع سنيني\n\nجاي بعد مدة\nيبيني من جده\nوبابه انا نسدى\nونسيت اللي بينا كان\nعادي شن يعني\nعذرك ما يقنعني\nوقلبي طاوعني\nنتحمله فرقاك\n\nويش خطرها\nتسيب العين تسمرها\nتعقب أعذار وتهجرها\nجايني توا تبي حنيني\n\nويش خطرها ويش جابك قولي \nويش جابك من مده سكرت بابك",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/klE3dc_NFtc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/klE3dc_NFtc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/klE3dc_NFtc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/klE3dc_NFtc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/klE3dc_NFtc/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 11,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "klE3dc_NFtc"
                    },
                    "videoOwnerChannelTitle": "Joudy Alhouti - جودي الحوتي",
                    "videoOwnerChannelId": "UCF5FFIkj2YfMhCNn61-mC_g"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "Gl-ueGtBdtHa-K6e-aZ-MQptTV4",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi45MTRCQjE3QzVGNDREODIz",
                "snippet": {
                    "publishedAt": "2022-05-29T10:48:12Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "עדן חסון - עושה לי צרות | Eden Hason - Osa Li Zarot",
                    "description": "עדן חסון מגיע לבריכת הסולטן ב-22 ביוני. לכרטיסים - https://bit.ly/42k1gCg בס\"ד\nשיר 6, אלבום 3.\n\nייצוג בלעדי והזמנת הופעות עדן חסון: שרית הפקות בע\"מ 04-9816716/ \u202d050-5535583\u202c\nניהול אישי עדן חסון: חנן פרנקו.\n-------------------------------------------\nלעמוד הרשמי בפייסבוק עדן : https://www.facebook.com/Edennhason\nעדן חסון באינסטגרם: Edennhason.\n----------------------\nלשירותי הסטרימינג  - https://fanlink.to/EdenOsaLi\n\nמילים ולחן: עדן חסון.\n\nחיים שלי נראה לי שנפסיק לדבר,\nנראה לי זה עושה לי רע יותר\nממה שזה עושה לי טוב. \n\nחיים שלי די לקרוא לי ככה, \nאני לא מיאמור ואת לא באה \nאם אני נמצא לא בטוב. \n\nכבר התרגלתי להמתין בין הודעה להודעה,\nאנלא יודע אם אני מכור אלייך או להרגשה\nשאת מבשלת אותי ככה כבר תקופה על אש קטנה.\n\nאת עושה לי צרות.\nמופיעה בלילות.\nאיך בחיבוק את מעלה בי אלפי שאלות. \nהאם את אוהבת אותי\nכמו שאני לפחות? \nמאמי זה סתם איתי.. אל תעשי לי דמעות.\n\nחיים שלי קיפלתי את הכל כדי לא לראות אותך,\nמצד שני פתאום לכולם יש עכשיו תריח שלך, אוטו כמו שלך בול עובר פה כל דקה \nהאצבע על ההדק רק לשלוח הודעה. \nהתרגלתי להמתין בין הודעה להודעה,\nאנלא יודע אם אני מכור אלייך או להרגשה,\nשאת מבשלת אותי ככה כבר תקופה על אש קטנה \n\nאת עושה לי צרות.\nמופיעה בלילות.\nאיך בחיבוק את מעלה בי אלפי שאלות. \nהאם את אוהבת אותי כמו שאני לפחות\nמאמי זה סתם איתי, אל תעשי לי דמעות.\n\nזה לא עניין של זוויות, את\nקצת גורמת לי להיות, מי\nשאני לא רוצה להיות\nמחפש אותך באחרות. \nתתני לי פעם אחת למות, \nבלי שתלחצי save בסוף\nאני אקום מזה לבד, \nאני לא צריך שיחיזקו לי ת'יד..\n\nאת עושה לי צרות..\n\n____________\nעיבוד והפקה מוזיקלית: יעקב למאי, עדן חסון.\nגיטרות: עידן שניאור.\nקלידים ותכנותים: עדן חסון, יעקב למאי, אור כהן.\nהקלטה ומיקס: יעקב למאי, עדן חסון.\nעריכה דיגיטלית: איציק פיליבה.\n\nעיצוב עטיפה וקליפ מילים : AVOXVISION\nניהול מדיה: אביחי ג׳רפי - ג׳ירף ניו מדיה\nהפצה דיגטלית: mobile 1 music\nיחסי ציבור: עופר מנחם 0507286538\nכל הזכויות שמורות לשרית הפקות בע״מ.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/y6YpayxgNpY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/y6YpayxgNpY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/y6YpayxgNpY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/y6YpayxgNpY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/y6YpayxgNpY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 12,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "y6YpayxgNpY"
                    },
                    "videoOwnerChannelTitle": "עדן חסון - Eden Hason",
                    "videoOwnerChannelId": "UCFmc1S3LEovsxhK73yi6_gg"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "sx4qRHj-xc248DqELSRSXD-oW-I",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi4wMUIwQkI1NEQ1RTFBNTND",
                "snippet": {
                    "publishedAt": "2022-08-13T06:56:00Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "החללית | אודיה – אוהבת אותך בטעות (By Offir Malol)",
                    "description": "בס\"ד \n\nהשיר השני מתוך הפרויקט המוזיקלי - ויזואלי \"החללית\" של היוצר והמפיק המוזיקלי אופיר מלול\n\nלהזמנת הופעות :050-9494938 אילון \nועדי עובדים כספית יצוג אמנים 03-6886881\n\nלשיר החדש בכל שירותי הסטרימינג: https://fanlink.to/OdeyaOffir\n\nמילים: אודיה אזולאי ואלי פרץ\nלחן: אודיה אזולאי, אופיר מלול\nעיבוד והפקה מוסיקלית: אופיר מלול\n\nכבר עשיתי הכל כדיי שתרצה למות\nכבר נפלט לי אוהבת אותך בטעות\nכבר לבשתי שמלות שהן התעללות לעיניים שלך\n\nכבר שתיתי את הכוס שלי עד התחתית\nבגללך כי ראית אותי רבנית\nואם כבר רבנית אז קרעתי גם את השמיים\n\nאבל עוד לא ניסיתי את השקט\nזה הנשק הכימי שלי\nוזה לא שתיתן לי ללכת\nאו תקום ותיפול בשבילי\n\nאבל מאמי קשה לי לראות אותך ככה ולא לחבק\nהתבלבלת, על מי אתה צועק?\nלאן הלכת? אני זבל אם לא התגעגעת\nאבל מאמי קשה לי לישון איתך ככה ולא לדבר\nא ני שואלת ואתה משקר\nלא מספר לי לאן אתה הולך אני בוכה לפסנתר\nכל הלילה… כל הלילה…\n\nכבר הסברתי לך שאתה מטומטם\nשה”יפים והיפות” שלך מנצלים אותך סתם\nלמסיבות, לקשרים, לשתיה ושמים לב שזה כל מה שיש בך\n\nכבר ניסיתי בכוח למצוא עומקים\nאתה לא איש של שירים אתה איש עסקים\nהאהבה שלי אלייך היא כמו אזיקים לידיים שלך\n\nעוד לא ניסיתי את השקט\nזה הנשק הכימי שלי\nוזה לא שתיתן לי ללכת\nאו תקום ותיפול תיקום תהפוך בשבילי\n\nאבל מאמי קשה לי לראות אותך ככה ולא לחבק\nהתבלבלת, על מי אתה צועק?\nלאן הלכת? אני זבל אם לא התגעגעת\nאבל מאמי קשה לי לישון איתך ככה ולא לדבר\nאני שואלת ואתה משקר\nלא מספר לי לאן אתה הולך אני בוכה לפסנתר\nכל הלילה… כל הלילה…\n\nאוליי זה לא קשור אלייך מה שיש בלב שלי\nאוליי זה הלבד הזה אולי זה הכאב שלי\nכי ההוא שפעם אהבתי התחתן לי\nכי בבית ספר שלי לימדו לבעוט בדשא של השכן שלי\n\nואתה רוקד במסיבות שהן חלום \nזה נראה שאתה שמח ושיש לך מקום\nאף אחד לא מנגב לך את הדמעות בסוף היום\nאתה בודד ואתה ריק מהאמת שלי פתאום\n\nמאמי קשה לי לראות אותך ככה ולא לחבק\nהתבלבלת, על מי אתה צועק?\nלאן הלכת? אני זבל אם לא התגעגעת\nמאמי קשה לי לישון איתך ככה ולא לדבר\nא ני שואלת ואתה משקר\nלא מספר לי לאן אתה הולך אני בוכה לפסנתר\nכל הלילה… כל הלילה…\n\nקלידים, תכנותים וסימפולים: אופיר מלול\nגיטרות: שמעון יחיא\nגיטרות נוספות: זיו גדש\nכינורות וקלידים אתניים: אופיר מלול\nקלידים נוספים: שי כהן, אריאל מלול\nקולות: אריאל מלול, אופיר מלול, אודיה אזולאי\nמיקס ומאסטרינג : שי (VAGUS) כהן\nהופק והוקלט בחללית של OFFIR MALOL\n\nיחסי ציבור:  עופר מנחם 050-7286538 | Menachem.ofer@gmail.com \n\nקליפ:\nהפקת קליפ: MOONLIGHT moonlightprod.team@gmail.com \nתסריט ובימוי: אריאל מלול\nעריכה: יונתן אוחיון ואריאל מלול\nצבע: גיל עמר\nתלת מימד ואפקטים מיוחדים: יונתן אוחיון\nצילום: גיל עמר\nע. צלם : דניאל עמר\nתאורה: שחר אלפי\nסטיילינג: אופיר מילר\nחליפה : H Uonique Boutiqe\nאיפור ושיער: ספיר חג'ג'\nהפקה בפועל: אופיר מלול \n\nהפצה דיגיטלית : D-MUSIC\nבניית קונספט ועיצוב גרפי : עידן מדיה |  https://idanmedia.co.il/\n\nייצוג וניהול אישי: ארומה music, רוברטו בן שושן, פי איי איי פרודקשן אדם אינבסמנט בע״מ. \n\nלהופעות פרטיות: אילון 0509494938\n\nכל הזכויות שמורות למחברים ©\nהליקון ארומה מיוזיק בע\"מ, אפריל  2022\n℗   2022 Helicon Aroma Music Ltd./ P.A.I Production Adam Investment Ltd.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Ab0Cesbityg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Ab0Cesbityg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Ab0Cesbityg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Ab0Cesbityg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Ab0Cesbityg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 13,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Ab0Cesbityg"
                    },
                    "videoOwnerChannelTitle": "אודיה - הערוץ הרשמי",
                    "videoOwnerChannelId": "UCKTbyJY0d-WRwFrXjBtETQQ"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "PLn5EOu1qATT-buPQSm6MS0_OQ0",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi43RDFFNUM4NkUwRDhEMjRD",
                "snippet": {
                    "publishedAt": "2022-08-13T06:50:35Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "אודיה - אינטלקטוערס (Prod. By Triangle)",
                    "description": "בס\"ד \n\nלשיר החדש בכל שירותי הסטרימינג: https://fanlink.to/IntellectuArs\n\nמילים: אודיה אזולאי\nלחן: עמית מרדכי, עידו נצר, אודיה אזולאי\nהפקה מוסיקלית: עידו נצר, עמית מרדכי  (Triangle) \n\nאני בחצי זוגיות\nויש לי חצי עבודה\nואני חצי מאושרת\nוחצי כפוית טובה\nואתה חצי מאוהב בי\nחצי מאוהב בך\nכותב לי חצאי שירים\nומתסבך לי תצורה\nאתה חכם אתה שואל\nאותי שאלות שבבסיס\nעומדת שאלה אחרת\nאינטליגנציה היא כרטיס\nלהופעות שלך בלילה\nעם בערך אהבה\nובערך ביטחון\nשהוא עצמי אבל בך\n\nבא לי לקום בלילה\nבא לי לישון ביום\nאתה חי לפי הספר\nאני חיה את החלום\nאם אתה כזה חזק\nאז למה אתה בוכה פתאום\nאולי כי אתה שומע\nאת השם שלי בכל מקום\n\nאני שלמה עם כל החצי\nככה זה כשאין ברירה\nואני חצי חרדית\nואני חצי לבושה\nואתה חצי מאמין\nאתה מפרש לי את התורה\nהנשמה שלך מול הגוף\nפעם תורי פעם תורה\nואני חצי בן חצי בת\nואני חצי ראפ ולפעמים לאט\nבקלאס חצי אינטלקטוערס\n\nבא לי לקום בלילה\nבא לי לישון ביום\nאתה חי לפי הספר\nאני חיה את החלום\nאם אתה כזה חזק\nאז למה אתה בוכה פתאום\nאולי כי אתה שומע\nאת השם שלי בכל מקום\n\nתגיד יכול להיות שאתה שרוט?\nהיו לי פה כאלו לפניך\nתגיד יכול להיות שאתה טעות?\nזה היה עושה לי את זה פעם אש עליך\nיפה שאתה מנסה להוריד לי ממני\nיפה שבסוף זה מוריד לי ממך\nיפה שלכולם יש מה להגיד\nאז הרמתי את הווליום ל\n\nמיקס, קלידים, תכנותים: עידו נצר, עמית מרדכי (Triangle)\r\n\nניהול וייצוג אישי: מיכל וייסברג aromamusic\nרוברטו בן שושן ופי איי איי , פרודקשן אדם אינבסמנט בע״מ.\r\nהפקת פוסט: זהבית לגאלי\r\nמפיק בפועל: ניב קקון\r\nשיווק ודיגיטל: דנה קניקובסקי\r\nצילום עטיפה: לידור חדידה\r\nעיצוב עטיפה והפקת קליפ מילים: AVOXVISION\r\nיחסי ציבור: עופר מנחם menahem.ofer@gmail.com | 0507286538\r\n \nהפצה דיגיטלית:  D Music\nניהול מדיה: ג׳ירף ניו מדיה\n\nניהול הפקה: עמוס מסיקה\nלהזמנת הופעות: כספית ייצוג אמנים: 03-6886881\nמופעים פרטים: איילון 050-9494938\n\nכל הזכויות שמורות למחברים ©\nהליקון ארומה מיוזיק בע\"מ, יולי  2022\n℗ 2022 Helicon Aroma Music Ltd.\n©2022 Helicon Aroma Music  Ltd.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/27KJdsez9Aw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/27KJdsez9Aw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/27KJdsez9Aw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/27KJdsez9Aw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/27KJdsez9Aw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 14,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "27KJdsez9Aw"
                    },
                    "videoOwnerChannelTitle": "אודיה - הערוץ הרשמי",
                    "videoOwnerChannelId": "UCKTbyJY0d-WRwFrXjBtETQQ"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "psydUL5Opf-Frv3jQF8Yt-N0v-8",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi5FRkU3NjdFNDBDMjFBNTlF",
                "snippet": {
                    "publishedAt": "2022-05-29T10:48:01Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "אושר כהן  - אהובי לב אדום",
                    "description": "לשיר החדש בכל שירותי הסטרימינג: https://fanlink.to/OsherAhuvi\n\nמילים ולחן: אושר כהן \nעיבוד והפקה מוסיקלית: אושר כהן\n\nהייתי הנסיך שלך\nהייתי אהובי לב אדום\nהייתי המטען שלך\nהייתי לך בכל האלבום \nאז איך את לא אומרת שלום \nאיך את לא אומרת שלום\nהייתי בשירים שלך\nבסטורי, בכבישים כל היום\nאז איך את לא אומרת שלום\nאיך את לא אומרת שלום\nהייתי נותן לך אותי על מגש \nאם היית אליי חוזרת בשביל שנתחיל מחדש\nכי סך הכול היה לך פה טוב וגם לי היה דבש\nרציתי לדבר איתך \nרציתי ממש \nיפה שלי תביני זה לא עוזר\nכתבתי כבר אלפיים סרנדות על הפסנתר \nוכמה את החזקת אותי \nשעות בלילות שהיה לך קשה לנשום\nאז איך את לא אומרת שלום\nאבל את אומרת להם שאני\nהכול עליי הכול אני אשם בהכול\nוכמה זה לא מכבד שוב אותך לאבד \nלפחד שנחזור ואז שוב ניפרד \nאת יוצאת ושותה אני נכנס ורוקד\nושוב את לא אומרת שלום\nאיך את לא אומרת שלום\nהייתי נותן לך אותי על מגש \nאם היית אליי חוזרת בשביל שנתחיל מחדש\nכי סך הכול היה לך פה טוב וגם לי היה דבש\nרציתי לדבר איתך \nרציתי ממש \nיפה שלי תביני זה לא עוזר\nכתבתי כבר אלפיים סרנדות על הפסנתר \nוכמה את החזקת אותי \nשעות בלילות שהיה לך קשה לנשום\nאז איך את לא אומרת שלום\n\n\n\nקלידים, תכנותים: אושר כהן \nגיטרות: מיקי אביעוז \nעוד: מיקי אביעוז \nכינורות ובגלמה: אושר כהן \nקולות: אושר כהן \n\nמיקס ומאסטרינג: נדב \"נאבי\" אהרוני ואושר כהן\n\nצילום: שי כהן ארבל\nעיצוב עטיפה והפקת קליפ אנימציה: AVOXVISION\n\nניהול אישי: רוברטו בן שושן\nארומה MUSIC ופרודקשן אדם אינוסטמנט בע\"מ\n\nהפקת פוסט: זהבית לגאלי\nיחסי ציבור: עופר מנחם 050-7286538 | Menachem.ofer@gmail.com\n\nהזמנת הופעות: נויה 050-2292764\n\nהפצה דיגיטלית: D-Music\n\n℗ כל הזכויות שמורות למחברים © \nהליקון ארומה מיוזיק בע\"מ, פרודקשן אדם אינוסטמנט בע\"מ,  אפריל 2022\n℗ 2022 Helicon Aroma Music Ltd./ P.A.I Production Adam Investment Ltd.\n© 2022 Helicon Aroma Music Ltd./ P.A.I Production Adam Investment Ltd.\n\n#אושרכהן #אהובילבאדום",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/IVKlVoHtrKo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/IVKlVoHtrKo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/IVKlVoHtrKo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/IVKlVoHtrKo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/IVKlVoHtrKo/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 15,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "IVKlVoHtrKo"
                    },
                    "videoOwnerChannelTitle": "Osher Cohen Music",
                    "videoOwnerChannelId": "UCEvY_JhVK0Z32GAo6uG-_YA"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "VnownRlpggLL0-rZX4g58NBWSo4",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi4zNDY1MzYwMjYwQUE2QTlD",
                "snippet": {
                    "publishedAt": "2022-07-08T13:18:31Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "אייל גולן & עדן בן זקן - אלף כוכבים (Prod. by Stav Beger)",
                    "description": "מילים ולחן: רון ביטון, סתיו בגר, איתי שמעוני ועדן בן זקן\nעיבוד והפקה מוסיקלית: סתיו בגר\n\nאייל גולן:\nייצוג: ליאם הפקות בע\"מ 03-6416415\nניהול אישי: אודי גואטה 050-6347494\nיחסי ציבור: רן רהב תקשורת ויחסי ציבור – לינור נוי 052-6714411\nנתנאל מויאל יחסי-ציבור 050-8925363\n\nעדן בן זקן:\nניהול אישי ורפרטואר: לירון פרנקו | Liron@sarithafakot.com\nייצוג בלעדי: שרית הפקות בע\"מ | 04-9816716\nיחסי ציבור: עופר מנחם תקשורת ויחסי ציבור | menachem.ofer@gmail.com |  050-7286538\n\nמילים:\nאני שרוף על הלב הטוב שלך\nהוא קצת חצוף\nומה עובר בראש שלך\nאני שרופה\nואיך אתה יודע אני חצופה\nאז מה התוכניות שלך\n \nבסופש הזה אני שומע רק אותך\nבסופש הזה אני שומעת רק אותך\nבסופש הזה אני הולך רק איתך\nבסופש הזה אני איתך אני איתך\n \nאלף כוכבים עלייך מסתכלים\nאיך שאת רוקדת\nאני על עננים כמה מבטים\nעוד שניה נופלת\n \nאם יש אותך אז יש הכל\nושנינו יחפים רוקדים פה על החול\nאם יש אותך אז יש הכל\nאיך אני אוהבת\nתחזיק חזק שלא ניפול\n \nזה כמו כישוף\nכל יום מחדש איתך\nזרמים בגוף\nאז מה אתה עושה לי מה\nאיתך חיים\nאני מוכן לעוף איתך\nחיים שלמים\nאז בוא ורק תזרוק מילה\n \nאיי לאב יו איי לאב יו\nאיי ניד יו איי ניד יו\n\nקלידים ותכנותים: סתיו בגר\nקלידים אתניים: אור כהן\nמיקס ומאסטר: סתיו בגר\nהוקלט באולפני ״לופו מיוזיק״\nצילום ועיצוב עטיפה: יונתן גירץ\n\nוידאו הופק ע״י: ״גירץ הפקות״\n\nבמאי ומפיק ראשי: יונתן גירץ\nתסריט: יונתן גירץ, מאי דיין ומישל נאור\nצלם ראשי: דניאל קדוש\nתאורן ועוזר צלם: אופיר נצר\nצילום סטילס: דניאל סטרבו\nצילום וידאו (מאחרי הקלעים): עומרי יוסף\nפרה הפקה: רן קפלן ויהודה קפלן\nעריכה: יונתן גירץ ודניאל קדוש\nאפטר אפקט: תומר שואל Tomash\nצבע: הקטור ברבי\nצילום רחפן: שלומי דעי\nעיצוב תאורה יאכטה: שובל בן לולו\nסטיילינג אייל גולן: ישראל רחמני\nעיצוב עטיפה: יונתן גירץ\nצילום עטיפה: דניאל סטרבו\n\nתודה מיוחדת לאילן בוסקילה מחוף טולום באילת\n\nלאינסטגרם של טולום ביץ' אילת - https://instagram.com/tulum_beach1?igshid=YmMyMTA2M2Y=\n\nלאינסטגרם של יאכטה טולו - \nhttps://instagram.com/tulum.yacht?igshid=YmMyMTA2M2Y=\n\nכל הזכויות שמורת למחברים ©\nהליקון ארומה מיוזיק, שרית הפקות, ליאם הפקות,  מאי, 2022\n 2022 Sarit Hafakot Ltd. / Helicon Aroma Music Ltd. / Liam Productions Ltd.©  &℗\n\nהפצה דיגיטלית:  Mobile1 Music",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/n3GL1Ry8quA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/n3GL1Ry8quA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/n3GL1Ry8quA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/n3GL1Ry8quA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/n3GL1Ry8quA/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 16,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "n3GL1Ry8quA"
                    },
                    "videoOwnerChannelTitle": "EyalGolanOfficial",
                    "videoOwnerChannelId": "UCrI0Slej0fiiwYPhR1EmFBw"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "8YJgUGSGTJEAyD8yXQOUQj-40zU",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi4yRjU0MzcwMkYwRkVDNDhC",
                "snippet": {
                    "publishedAt": "2022-02-13T09:23:26Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "שחר סאול - דובשנייה מארח את אגם בוחבוט ונורוז (Prod. by Ishta, Triangle)",
                    "description": "ייצוג בלעדי: ROMS & GAGA Management  אורון כלפון ויואב גרוס\nיצירת קשר והזמנת הופעות: גאגא בוקינג - 03-6056511 | אופיר - 050-849-9347\nיחסי ציבור ואסטרטגיה תקשורתית זאביק דרור - עדי: Adi@zevikdror.com | 0506800213\nשיווק דיגיטלי: יקיר ונה הפקות - Y.V Productions\n\nלשירותי הסטרימינג - https://fanlink.to/ShaharDuvshania\n\nתמצאו את שחר גם פה\nInstagram: https://www.instagram.com/shaharsaul/\nFacebook: https://www.facebook.com/congoboyyy/\n\n:קרדיטים שיר\nמילים: שחר סאול, רון ביטון, אור נורוזי, רון נשר, אפי אישטה\nלחן: שחר סאול, רון ביטון, אור נורוזי, אפי אישטה, רון נשר\nביצוע: שחר סאול, אגם בוחבוט, אור נורוז\nעיבוד: אפי אישטה, עמית מרדכי, עידו נצר (Triangle)\nמיקס: אפי אישטה, עידו נצר ועמית מרדכי  (Triangle)\nמאסטר: עמרי בר הוד\n\nVideo Produced by - ROMS\nhttps://www.roms.co.il/\nhttps://www.facebook.com/RomsStudios/\nhttps://www.instagram.com/roms_studios/\n\nבימוי וניהול שחר - רומן בוצ'אצקי | Roman Buchatsky   \nhttps://www.instagram.com/roman_buchatsky/\nמפיקה ראשית - גלית בורנצוויג\nהפקה בפועל - ספיר כהן\nצלמים - הדר כהן, טום כהן\nתאורן ראשי - יובל צוקי לסטר\nסט דקורטור - אדם גזלה\n\nעריכה ופוסט פרודקשן - WAY\nhttps://www.instagram.com/way_studios\nhttps://waystudio.co.il/\nמפיקת פוסט - נויה מור דימנד\nצביעה - יובל גור\nעריכות נוספות: טל חיים\n\nהלבשה אגם בוחבוט - ראובן כהן\nע.הלבשה אגם - דפנה רחום\nאיפור אגם בוחבוט - אל ידידיה\nשיער אגם בוחבוט - רן קריסי\nהלבשה שחר סאול ונורוז - יורה בורמטנוב\nסטיילינג קאסט - שני סבן אור\nע. סטיילינג - עמית בן נון\nאיפור ושיער - עדי שרעבן וקרן ישלח\nע.הפקה - סבסטיאן מיזדרחי, מוחמד כחיל\nצילום סטילס - עידן שיסטר, אור דנון\nקאסט - עמית גואטה, עומר מליחי, בר רולוב, ליאן עדי, ירדן חכם, שילת בסיל, שיה בן דוד, רומי סיסו, אור צעידי, דניאלה גוטמן, עדי אימנוט ביטאו אנדרגה, אלישבע מלכה, טוי קמפבל, עידו אטיאס, אלעד רבי, שחף ארבל, סיבלי סלע\n\nעיצוב עטיפה - Avoxvision\nהפצה דיגיטלית: Mobile1 Music\n\nקרדיטים הלבשה:\nפקטורי 54\nMother Of All\n\nתודות מיוחדות:\nמועדון \"השקט\"- אורן ואירה דולפין, מושית דיין.\nפיטוסי שרותי מצלמה\nעומר אלוני\nקוסטיה וסילקוב\nאור זוהר\n\nמילים:\nפויה \nילדה רעה של טיק טוק בואי לאבויה \nלא מתאמצת לא אכפת כמה צפו בה\nרודפת מותגים אז היא דוהרת כמו פומה\nוזה הזוי הא?\nדופקת לי ריקוד רק להדליק פה את האקס\nמאמי תרגעי בלי להתאמץ יש פלקס\nיודעת ת'מילים בעל פה כל טקסט\nנוהגת לבלות אבל אין לה ברקס\nרוצה לשתות? \nתביא בלוגה\nמעביר הכל אז היא קוראת לי באבאלובה\nבית טוב \nלא נגעו בה\nהפנים מפה אבל השאר מקובה. (שיייש!) \n\nמה אתה קורא לי יפיפה \nמותק תרגע תקשיב שניה\nאני ואת ביחד מניה \nאנחנו כמו ביטקוין עליה\nלמי אתה קורא דובשניה\nבוא אני אזרוק עליך אלפיה\nתראי מה את עשית פה מה נהיה\nאפילו גם השמש מזיעה יה יה. \n\nהיא באה לבלות \nאני רואה לה בעיניים\nבאה עם עוד ארבע חברות מגבעתיים\nשתתה יותר מידי והיא צריכה קצת מים\nכולם כבר הבינו שהיא לא שמה.  צומת לב\nכדאי שתשב\nלא מסוג הבחורות שתשים לך עוקב\nהיא כל היום בטיק טוק יש לה מאהב\nלא מחפשת כסף היא זורקת מאה אלף \nיציאות בערב רוצה לשתות בלוגה\nאין לה יומולדת כל הנרות על העוגה\nהלכה פתחה מימונה על הלגונה \nהכי יפה בפער\nיש לה לוק שלא נגעו בה \n\nמה אתה קורא לי יפיפה \nמותק תרגע תקשיב שניה\nאני ואת ביחד מניה \nאנחנו כמו ביטקוין עליה\nלמי אתה קורא דובשניה\nבוא אני אזרוק עליך אלפיה\nתראי מה את עשית פה מה נהיה\nאפילו גם השמש מזיעה יה יה. \n\nיפיפה.....\nיפיפה יה יה \nדובשניה יה יה \nיפיפה יה יה \nאת , דובשניה \nלמי אתה קורא דובשניה? \n\nמה אתה קורא לי יפיפה \nמותק תרגע תקשיב שניה\nאני ואת ביחד מניה \nאנחנו כמו ביטקוין עליה\nלמי אתה קורא דובשניה\nבוא אני אזרוק עליך אלפיה\nתראי מה את עשית פה מה נהיה\nאפילו גם השמש מזיעה יה יה.\n\nבחייייאת מי קרא עד לפה? תכתבו בתגובות",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/0aoNAe3BhAg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/0aoNAe3BhAg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/0aoNAe3BhAg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/0aoNAe3BhAg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/0aoNAe3BhAg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 17,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "0aoNAe3BhAg"
                    },
                    "videoOwnerChannelTitle": "שחר סאול - העמוד הרשמי Shahar Saul",
                    "videoOwnerChannelId": "UCDM73XycezlUMUWdCdFm0Yw"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "Kbsc8r5J3pZxyy2Np43q6dsJCQI",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi4xMTE0RDU2NTlEMTkxNzZB",
                "snippet": {
                    "publishedAt": "2022-07-08T13:18:43Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "بستوني & نورس الحنين - روح الروح /  Bastony Ft. Nawras Al Hanin - Ro7 El Ro7",
                    "description": "البوم بستوني الجديد 2022 - انت\nBastony New Album 2022 - Enty \n اغنية رقم 3 من البوم بستوني الجديد 2022 - انت\n\nللحجز والاستفسار يرجى التواصل على : Management & Booking\n ( Bastony@empr.co.il )\n\nكلمات - بستوني - Lyrics - Bastony\nالحان :  بستوني  - Composer : Bastony \nاداء بستوني & نورس الحنين // Performed : Bastony & Nawras al hanin\nMusic Production mixing and mastering By - youngest \nتوزيع - Youngest\n\nالاشتراك في القناة \n@bastony \n\nبستوني انستغرام -Bastony Instgram\n https://www.instagram.com/bastony__/\n\nنورس انستغرام - Nawras Instgram\n https://instagram.com/nawras_official?igshid=YmMyMTA2M2Y=\n\nالدكتور - شادي وتد\nhttps://instagram.com/shadi_wat?igshid=YmMyMTA2M2Y=\n\n\nموال - \nما تيجي تقلي مشتاق\nانت الي اخترت لفراق  \nبتتذكر شو كنت تقلي \n\nلازمة - \nبحبك كيف ما انتي \nيا روح الروح\nبلاقيكي وين ما كنتي \nما بترك قلبك مجروح \n\nبدونك لا ما بمشي\nتعال خليك ما تروح\nكرمالك بحرق كلشي\nوبخلي حبنا مسموح\n\nبيت- 1\nبحبك كيف مانتي ما تغيري شي\nلو نرجع بزمن ، لعطيتك كل شي \nما خطرت هشي قلبي الي ختار يمشي\nتمنيتك ترجعيلي كل ما وقعت رمشة\n \nيا ليلي ، قصتنا خلصت زمان \nرحتي وما تركتي غير الألم\nلسا حبنا ما خلص كلام\nما ، بقيقي ، ولا شي حتي سلام\n\nسي بارت - \nيا قلبي يا ليل بنص اليل \nتعبني الشوق ما فيني حيل\nتصلتلو ، وقلتلو\nلسا قلبي ناطرو \n\nلازمة - \nبحبك كيف ما انتي \nيا روح الروح\nبلاقيكي وين ما كنتي \nما بترك قلبك مجروح \n\nبدونك لا ما بمشي\nتعال خليك ما تروح\nكرمالك بحرق كلشي\nوبخلي حبنا مسموح\n\n\nبيت -2 \nهاتي نرجع بزمان\nيا قلبي لوين\nكيف مكلشي كان \nيا نور العين\nدورت عليكي بكل مكان \nمن وين الوين \nكيف عليكي هان حان ولاوان\n\n\nما يحكو انتي الي من الاساس\nبوعادك عبارة عن ضربة فاس براس\nما قدرت انساكي حتي بعد مية كاس\nكل ليلة اتجاهك بيشدني  الاحساس\n\nبتعرفي هشي قلبي دايب فيكي \nانطريني كل ليلة مستعد جيكي\nعصدري اغفيكي اهمسلك اني بحب \nكلشي فيكي يا قمر قلبي بس ليكي\n\nسي بارت -  \nيا قلبي يا ليل بنص اليل \nتعبني الشوق ما فيني حيل\nتصلتيلو ، چلتلو\nلسا قلبي ناطرو \n\nلازمة-\nبحبك كيف ما انتي \nيا روح الروح\nبلاقيكي وين ما كنتي \nما بترك قلبك مجروح \n\nبدونك لا ما بمشي\nتعال خليك ما تروح\nكرمالك بحرق كلشي\nوبخلي حبنا مسموح\n\nDigital distribution: EM-Music",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/vAVcl9s22A8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/vAVcl9s22A8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/vAVcl9s22A8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/vAVcl9s22A8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/vAVcl9s22A8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 18,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "vAVcl9s22A8"
                    },
                    "videoOwnerChannelTitle": "بستوني - Bastony",
                    "videoOwnerChannelId": "UCMlRdSZmhssHwtVyTTOs83g"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "dyCpw6lQYh8bhuEMqHWfilvfAFA",
                "id": "UExHbDBfYXA3VW5TOXRpN3loS3loVXdfSlRWWVkyVGtMSi5EMzgyRkY2QzI3NjdDMDM4",
                "snippet": {
                    "publishedAt": "2022-07-08T13:18:15Z",
                    "channelId": "UCRrwRp4LwIVu1nJSKaQOF-A",
                    "title": "עומר אדם – תמיד שלך (Prod By. Tamar Yahalomy & Yonatan Kalimi)",
                    "description": "מילים ולחן: תמר יהלומי ויונתן קלימי\nעיבוד והפקה מוזיקלית: תמר יהלומי ויונתן קלימי\n\nלא משנה לי איפה \nהפכתי ת׳עולם ואין בו \nמישהי שתראה אותי\nכמו שאת\n\nולגדול איתך ביחד \nשני ילדים בלי פחד \nמול הנוף של אלוהים \nביום שבת\n\nאני הלחן את מילים\nאת פעימות הלב שלי  \nסתם חיוך של בוקר בלי סיבה …\n\nיש לי מיליון סיבות\nלומר אני אוהב אותך \nואיך מכל הנשמות זכיתי בך\nמלאך שלי\nאז אל תדאגי\nכי יש לי מיליון פרחים \nרק לקשט ת'לב שלך\nבשביל של החיים אני אלך איתך\nתמיד שלך\nתמיד שלך\n\nוזה שקוף כמו מים\nשנהיה לנצח שניים\nאני אחרוט גם על שמיים \nבלבן\n\nומי צריך מסגרת\nנחיה פשוט כמו סרט\nאת תהיי כוכבת ואני קהל\n\nאני הספר את תווים\nאת פעימות הלב שלי\nסתם נשיקה קטנה לפני שינה…\n\nיש לי מיליון סיבות\nלומר אני אוהב אותך \nואיך מכל הנשמות זכיתי בך\nמלאך שלי\nאז אל תדאגי\nכי יש לי מיליון פרחים \nרק לקשט ת'לב שלך\nבשביל של החיים אני אלך איתך\nתמיד שלך\nתמיד שלך\n\nקלידים ותכנותים: תמר יהלומי ויונתן קלימי\nגיטרות, בס וכלי מיתר: מיקי אביעוז\nקולות: עומר אדם תמר יהלומי יונתן קלימי\nמיקס ומאסטרינג: איציק פיליבה\nהוקלט באולפני: T.Y STUDIO\n\nצילום ועריכת קליפ – גל איסייב\nעיצוב עטיפה – AVOXVISION\n\nניהול אישי עומר אדם: P.A.I LTD\nהפקה בפועל: יעל זוהר\nלהזמנת הופעות: 03-9667755\npai@adamltd.co.il P.A.I LTD© 2020\n\nיחסי ציבור: חגית נוביק סלומון & ירון כהן \nהפצה דיגיטלית: D-Music",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/PburljbL-fo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/PburljbL-fo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/PburljbL-fo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/PburljbL-fo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/PburljbL-fo/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Playlist Music USA - UK",
                    "playlistId": "PLGl0_ap7UnS9ti7yhKyhUw_JTVYY2TkLJ",
                    "position": 19,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "PburljbL-fo"
                    },
                    "videoOwnerChannelTitle": "עומר אדם - הערוץ הרשמי",
                    "videoOwnerChannelId": "UCo4y7A6EF2tZ1Q2Oxx64HNQ"
                }
            }
        ],
        "pageInfo": {
            "totalResults": 200,
            "resultsPerPage": 20
        }
    }

    const example = {
        url: 'video.resourceId.videoId',
        name: 'video.title',
        img: 'video.thumbnails.default.url',
        artist: 'video.videoOwnerChannelTitle',
        uploaded: 'video.publishedAt',
        timeSent: new Date()
    }

    const requests = [
        {
            url: "n5illsgvqKA",
            name: "בניה ברבי - קרן שמש",
            img: "https://i.ytimg.com/vi/n5illsgvqKA/default.jpg",
            artist: "בניה ברבי",
            uploaded: "2022-11-18T14:31:28Z",
            timeSent: "2023-07-24T21:50:99Z"
        },
        {
            url: "csafTcTFWDM",
            name: "אודיה & **** - האמת (Prod by. Moshe & Ofek)",
            img: "https://i.ytimg.com/vi/csafTcTFWDM/default.jpg",
            artist: "אודיה - הערוץ הרשמי",
            uploaded: "2022-11-18T14:31:40Z",
            timeSent: "2023-07-24T21:52:99Z"
        },
        {
            url: "d0gBmCQepRY",
            name: "אייל גולן - פנתרה (Prod. By Tamir Zur)",
            img: "https://i.ytimg.com/vi/d0gBmCQepRY/default.jpg",
            artist: "EyalGolanOfficial",
            uploaded: "2022-11-18T14:31:51Z",
            timeSent: "2023-07-24T21:49:99Z"
        }
    ]

    const playlist = [
        {
            url: "n5illsgvqKA",
            name: "ניתאי אלצור - האם להיות בך מאוהב",
            img: "https://i.ytimg.com/vi/n5illsgvqKA/default.jpg",
            artist: "ניתאי אלצור",
            uploaded: "2022-11-18T14:31:28Z",
            timeSent: "2023-07-24T21:50:99Z"
        },
        {
            url: "csafTcTFWDM",
            name: "אופק סגל - אהבה כזאת",
            img: "https://i.ytimg.com/vi/csafTcTFWDM/default.jpg",
            artist: "אופק סגל - הערוץ הרשמי",
            uploaded: "2022-11-18T14:31:40Z",
            timeSent: "2023-07-24T21:52:99Z"
        },
        {
            url: "d0gBmCQepRY",
            name: "צ'ן אילון - פנתרה",
            img: "https://i.ytimg.com/vi/d0gBmCQepRY/default.jpg",
            artist: "צ'ן אילון אופישיאל",
            uploaded: "2022-11-18T14:31:51Z",
            timeSent: "2023-07-24T21:49:99Z"
        }
    ]

    const [x, setX] = useState();
    const [y, setY] = useState();

    function handleStart() {
        console.log('start');
    }

    function handleDrag() {
        console.log('drag');
    }

    function handleStop() {
        console.log('stop');
    }

    const eventControl = (event, info) => {
        console.log('Event name: ', event);
        console.log(event, info);
    }

    return (
        <div id='admin-container' dir='rtl'>
            <div id='requests-container'>
                <div className='admin-headers'>בקשות ממתינות</div>
                <div id='requests-control-container'>
                    <button className='requests-controls' onClick={() => console.log('filter')}>filter</button>
                    <button className='requests-controls' onClick={() => console.log('delete marked')}>delete marked</button>
                    <button className='requests-controls' onClick={() => console.log('push marked')}>push marked</button>
                </div>
                <div id='requests-map-container'>
                    {requests.map((value, index) => {
                        return (
                            <>
                                <Draggable
                                    axis="y"
                                    handle=".handle"
                                    defaultPosition={{ x: 0, y: 0 }}
                                    position={{x: x, y: y}}
                                    grid={[25, 25]}
                                    scale={1}
                                    onDrag={(e) => {setX(e.target.getBoundingClientRect().x), setY(e.target.getBoundingClientRect().y), console.log(x), console.log(y)}}
                                    onStart={() => console.log('start')}
                                    onStop={() => console.log('stop')}
                                    onMouseDown={() => console.log('mouse dowm')}
                                    onMouseUp={() => console.log('mouse up')}
                                    onTouchStart={() => console.log('start')}
                                    onTouchEnd={() => console.log('end')}>
                                    <div className='handle'>
                                        <Request key={index} request={value} />
                                    </div>
                                </Draggable>
                            </>
                        )
                    })}
                </div>
            </div>
            <div id='playlist-container'>
                <div className='admin-headers'>תור השמעה</div>
                <div id='requests-control-container'>
                    <button className='requests-controls' onClick={() => console.log('filter')}>filter</button>
                    <button className='requests-controls' onClick={() => console.log('delete marked')}>delete marked</button>
                    <button className='requests-controls' onClick={() => console.log('push marked')}>push marked</button>
                </div>
                <div id='requests-map-container'>
                    {playlist.map((value, index) => {
                        return <Request key={index} request={value} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Admin