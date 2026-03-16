/**
 * Units data - 8 English learning modules, one per planet.
 * Pure data only - no runtime state (that lives in GameState).
 */
export const units = [
    {
        id: 1,
        name: "Good Morning!",
        focus: "Verb 'be' & Greetings",
        grammar: {
            noteEn: "In English, every sentence needs a verb. We use 'am', 'is', and 'are' to talk about who we are or how we feel. In Arabic, this verb is often hidden in the present tense, but in English, you must say it!",
            noteAr: "\u0641\u064a \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629\u060c \u062a\u062d\u062a\u0627\u062c \u0643\u0644 \u062c\u0645\u0644\u0629 \u0625\u0644\u0649 \u0641\u0639\u0644. \u0646\u0633\u062a\u062e\u062f\u0645 'am' \u0648 'is' \u0648 'are' \u0644\u0644\u062a\u062d\u062f\u062b \u0639\u0646 \u0647\u0648\u064a\u062a\u0646\u0627 \u0623\u0648 \u0634\u0639\u0648\u0631\u0646\u0627. \u0641\u064a \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629\u060c \u063a\u0627\u0644\u0628\u0627\u064b \u0645\u0627 \u064a\u0643\u0648\u0646 \u0647\u0630\u0627 \u0627\u0644\u0641\u0639\u0644 \u0645\u0633\u062a\u062a\u0631\u0627\u064b \u0641\u064a \u0627\u0644\u0645\u0636\u0627\u0631\u0639\u060c \u0644\u0643\u0646 \u0641\u064a \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u064a\u062c\u0628 \u0630\u0643\u0631\u0647!",
            form: [
                "Affirmative (+): Subject + be (I am, You are, He/She is).",
                "Negative (-): Add not after be (I am not, He is not).",
                "Question (?): Move be to the start (Are you...?)."
            ],
            examples: [
                "\"I am a student.\"",
                "\"He is not a teacher.\"",
                "\"Is she your friend?\""
            ],
            logic: [
                "Identifies roles and names.",
                "English sentences MUST have a verb.",
                "Be links subjects to descriptors."
            ]
        },
        practice: {
            questions: [
                { q: "What do you say to someone at 8:00 AM?", options: ["Good morning", "Good evening"], answer: 0, wrongEn: "Wrong! 8:00 AM is in the morning.", wrongAr: "\u062e\u0637\u0623! \u0627\u0644\u0633\u0627\u0639\u0629 8 \u0635\u0628\u0627\u062d\u0627\u064b \u062a\u0643\u0648\u0646 \u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d." },
                { q: "___ name is Omar. Nice to meet you.", options: ["My", "His"], answer: 0, wrongEn: "Wrong! Use 'My' to introduce yourself.", wrongAr: "\u062e\u0637\u0623! \u0627\u0633\u062a\u062e\u062f\u0645 'My' \u0644\u062a\u0642\u062f\u064a\u0645 \u0646\u0641\u0633\u0643." },
                { q: "How do you introduce a friend?", options: ["This is my friend, Ali", "I am Ali"], answer: 0, wrongEn: "Wrong! Use 'This is...' to introduce others.", wrongAr: "\u062e\u0637\u0623! \u0627\u0633\u062a\u062e\u062f\u0645 'This is...' \u0644\u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0622\u062e\u0631\u064a\u0646." },
                { q: "I use a ___ to write in my notebook.", options: ["Pencil", "Eraser"], answer: 0, wrongEn: "Wrong! We write with pencils, not erasers.", wrongAr: "\u062e\u0637\u0623! \u0646\u062d\u0646 \u0646\u0643\u062a\u0628 \u0628\u0627\u0644\u0623\u0642\u0644\u0627\u0645 \u0627\u0644\u0631\u0635\u0627\u0635\u060c \u0648\u0644\u064a\u0633 \u0628\u0627\u0644\u0645\u0633\u0627\u062d\u0627\u062a." },
                { q: "\"Goodbye\" is a way to say hello.", options: ["True", "False"], answer: 1, wrongEn: "Wrong! 'Goodbye' is for leaving, not for hello.", wrongAr: "\u062e\u0637\u0623! 'Goodbye' \u0644\u0644\u0648\u062f\u0627\u0639 \u0648\u0644\u064a\u0633 \u0644\u0644\u062a\u062d\u064a\u0629." },
                { q: "A \"Classmate\" is a person in your school.", options: ["True", "False"], answer: 0, wrongEn: "Wrong! A classmate is definitely a student in your school.", wrongAr: "\u062e\u0637\u0623! \u0632\u0645\u064a\u0644 \u0627\u0644\u062f\u0631\u0627\u0633\u0629 \u0647\u0648 \u0628\u0627\u0644\u062a\u0623\u0643\u064a\u062f \u0637\u0627\u0644\u0628 \u0641\u064a \u0645\u062f\u0631\u0633\u062a\u0643." }
            ]
        },
        vocabulary: {
            list: [
                { en: "Principal", ar: "\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u062f\u0631\u0633\u0629", context: "The principal is in his office." },
                { en: "Classmate", ar: "\u0632\u0645\u064a\u0644 \u062f\u0631\u0627\u0633\u0629", context: "Ali is my classmate in English." },
                { en: "Teacher", ar: "\u0645\u0639\u0644\u0645", context: "Mr. Ahmed is my math teacher." },
                { en: "Student", ar: "\u0637\u0627\u0644\u0628", context: "I am a student at the middle school." },
                { en: "Alphabet", ar: "\u0627\u0644\u062d\u0631\u0648\u0641 \u0627\u0644\u0623\u0628\u062c\u062f\u064a\u0629", context: "We learn the alphabet in Unit 1." },
                { en: "Morning", ar: "\u0635\u0628\u0627\u062d", context: "We say \"Good morning\" at 8:00 AM." },
                { en: "Afternoon", ar: "\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631", context: "Class ends in the afternoon." },
                { en: "Evening", ar: "\u0645\u0633\u0627\u0621", context: "I do my homework in the evening." },
                { en: "Friend", ar: "\u0635\u062f\u064a\u0642", context: "This is my best friend, Omar." }
            ]
        },
        function: {
            context: "Meeting people for the first time or during different parts of the day.",
            howEn: "In English, we use different greetings based on the time. Titles like Mr. and Mrs. are used with last names to show respect to teachers and adults. When meeting someone, \"Nice to meet you\" is the standard polite response.",
            howAr: "\u0641\u064a \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629\u060c \u0646\u0633\u062a\u062e\u062f\u0645 \u062a\u062d\u064a\u0627\u062a \u0645\u062e\u062a\u0644\u0641\u0629 \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0627\u0644\u0648\u0642\u062a. \u062a\u064f\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0623\u0644\u0642\u0627\u0628 \u0645\u062b\u0644 Mr. \u0648 Mrs. \u0645\u0639 \u0623\u0644\u0642\u0627\u0628 \u0627\u0644\u0639\u0627\u0626\u0644\u0627\u062a \u0644\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0645 \u0644\u0644\u0645\u0639\u0644\u0645\u064a\u0646 \u0648\u0627\u0644\u0643\u0628\u0627\u0631. \u0639\u0646\u062f \u0645\u0642\u0627\u0628\u0644\u0629 \u0634\u062e\u0635 \u0645\u0627\u060c \u062a\u0639\u062a\u0628\u0631 \u0639\u0628\u0627\u0631\u0629 \"Nice to meet you\" \u0647\u064a \u0627\u0644\u0631\u062f \u0627\u0644\u0645\u0647\u0630\u0628 \u0627\u0644\u0645\u0639\u062a\u0627\u062f.",
            realTalk: ["How's it going?", "Nice to meet you", "Good morning"],
            dialogue: [
                { speaker: "A", text: "Good morning! How's it going?", ar: "\u0635\u0628\u0627\u062d \u0627\u0644\u062e\u064a\u0631! \u0643\u064a\u0641 \u062a\u062c\u0631\u064a \u0627\u0644\u0623\u0645\u0648\u0631\u061f" },
                { speaker: "B", text: "I'm fine, thanks. My name is Ali.", ar: "\u0623\u0646\u0627 \u0628\u062e\u064a\u0631\u060c \u0634\u0643\u0631\u0627\u064b. \u0627\u0633\u0645\u064a \u0639\u0644\u064a." },
                { speaker: "A", text: "Nice to meet you, Ali. I'm Omar.", ar: "\u0633\u0639\u062f\u062a \u0628\u0644\u0642\u0627\u0626\u0643 \u064a\u0627 \u0639\u0644\u064a. \u0623\u0646\u0627 \u0639\u0645\u0631." }
            ]
        }
    },
    {
        id: 2,
        name: "What Day Is Today?",
        focus: "Time Prepositions (In/On)",
        grammar: {
            noteEn: "Prepositions like 'in' and 'on' tell us exactly when something happens. Think of 'In' for big boxes of time (like months) and 'On' for specific points on a calendar (like days).",
            noteAr: "\u062d\u0631\u0648\u0641 \u0627\u0644\u062c\u0631 \u0645\u062b\u0644 'in' \u0648 'on' \u062a\u062e\u0628\u0631\u0646\u0627 \u0645\u062a\u0649 \u064a\u062d\u062f\u062b \u0627\u0644\u0634\u064a\u0621 \u0628\u0627\u0644\u0636\u0628\u0637. \u0641\u0643\u0631 \u0641\u064a 'In' \u0644\u0644\u0641\u062a\u0631\u0627\u062a \u0627\u0644\u0632\u0645\u0646\u064a\u0629 \u0627\u0644\u0643\u0628\u064a\u0631\u0629 (\u0645\u062b\u0644 \u0627\u0644\u0634\u0647\u0648\u0631) \u0648 'On' \u0644\u0644\u0646\u0642\u0627\u0637 \u0627\u0644\u0645\u062d\u062f\u062f\u0629 \u0641\u064a \u0627\u0644\u062a\u0642\u0648\u064a\u0645 (\u0645\u062b\u0644 \u0627\u0644\u0623\u064a\u0627\u0645).",
            form: [
                "Affirmative (+): Event + is + in/on + Time.",
                "Negative (-): Event + is not + Time.",
                "Question (?): When is / What is...?"
            ],
            examples: [
                "\"The test is on Monday.\"",
                "\"It is not in June.\"",
                "\"When is your birthday?\""
            ],
            logic: [
                "Use 'In' for whole months.",
                "Use 'On' only if you have a specific date like May 15th.",
                "Time acts as a location."
            ]
        },
        practice: {
            questions: [
                { q: "What day comes after Monday?", options: ["Sunday", "Tuesday"], answer: 1, wrongEn: "Wrong! Tuesday comes after Monday.", wrongAr: "\u062e\u0637\u0623! \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u064a\u0623\u062a\u064a \u0628\u0639\u062f \u0627\u0644\u0627\u062b\u0646\u064a\u0646." },
                { q: "How do you write the number 12?", options: ["Two", "Twelve"], answer: 1, wrongEn: "Wrong! 12 is 'Twelve'.", wrongAr: "\u062e\u0637\u0623! \u0627\u0644\u0631\u0642\u0645 12 \u0647\u0648 'Twelve'." },
                { q: "My birthday is ___ May.", options: ["On", "In"], answer: 1, wrongEn: "Wrong! Use 'In' for months.", wrongAr: "\u062e\u0637\u0623! \u0627\u0633\u062a\u062e\u062f\u0645 'In' \u0644\u0644\u0634\u0647\u0648\u0631." },
                { q: "Your teacher says: \"___ your books to page 10.\"", options: ["Close", "Open"], answer: 1, wrongEn: "Wrong! You need to 'Open' the book to see the page.", wrongAr: "\u062e\u0637\u0623! \u064a\u062c\u0628 \u0623\u0646 '\u062a\u0641\u062a\u062d' \u0627\u0644\u0643\u062a\u0627\u0628 \u0644\u062a\u0631\u0649 \u0627\u0644\u0635\u0641\u062d\u0629." },
                { q: "January is the ___ month of the year.", options: ["Last", "First"], answer: 1, wrongEn: "Wrong! January is Month 1 (First).", wrongAr: "\u062e\u0637\u0623! \u064a\u0646\u0627\u064a\u0631 \u0647\u0648 \u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0623\u0648\u0644." },
                { q: "There are 7 days in a week.", options: ["True", "False"], answer: 0, wrongEn: "Wrong! There are indeed 7 days in a week.", wrongAr: "\u062e\u0637\u0623! \u062a\u0648\u062c\u062f \u0628\u0627\u0644\u0641\u0639\u0644 7 \u0623\u064a\u0627\u0645 \u0641\u064a \u0627\u0644\u0623\u0633\u0628\u0648\u0639." }
            ]
        },
        vocabulary: {
            list: [
                { en: "Sunday \u2013 Saturday", ar: "\u0627\u0644\u0623\u062d\u062f - \u0627\u0644\u0633\u0628\u062a", context: "There are seven days in a week." },
                { en: "January \u2013 December", ar: "\u064a\u0646\u0627\u064a\u0631 - \u062f\u064a\u0633\u0645\u0628\u0631", context: "My birthday is in May." },
                { en: "Birthday", ar: "\u064a\u0648\u0645 \u0645\u064a\u0644\u0627\u062f", context: "How old are you on your birthday?" },
                { en: "Today", ar: "\u0627\u0644\u064a\u0648\u0645", context: "Today is Monday." },
                { en: "Tomorrow", ar: "\u063a\u062f\u0627\u064b", context: "Tomorrow is Tuesday." },
                { en: "Calendar", ar: "\u062a\u0642\u0648\u064a\u0645", context: "Look at the calendar for the date." },
                { en: "Number", ar: "\u0631\u0642\u0645", context: "Twelve is my favorite number." },
                { en: "Scissors", ar: "\u0645\u0642\u0635", context: "Use the scissors to cut the paper." }
            ]
        },
        function: {
            context: "Talking about ages, dates, and following school rules.",
            howEn: "We use ordinal numbers (1st, 2nd, 3rd) for dates instead of regular numbers. Classroom instructions use \"Imperatives\" (Command verbs) to tell students exactly what to do.",
            howAr: "\u0646\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062a\u0631\u062a\u064a\u0628\u064a\u0629 (\u0627\u0644\u0623\u0648\u0644\u060c \u0627\u0644\u062b\u0627\u0646\u064a\u060c \u0627\u0644\u062b\u0627\u0644\u062b) \u0644\u0644\u062a\u0648\u0627\u0631\u064a\u062e \u0628\u062f\u0644\u0627\u064b \u0645\u0646 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0639\u0627\u062f\u064a\u0629. \u062a\u0633\u062a\u062e\u062f\u0645 \u062a\u0639\u0644\u064a\u0645\u0627\u062a \u0627\u0644\u0641\u0635\u0644 \u0627\u0644\u062f\u0631\u0627\u0633\u064a \"\u0635\u064a\u063a\u0629 \u0627\u0644\u0623\u0645\u0631\" \u0644\u0625\u062e\u0628\u0627\u0631 \u0627\u0644\u0637\u0644\u0627\u0628 \u0628\u0645\u0627 \u064a\u062c\u0628 \u0639\u0644\u064a\u0647\u0645 \u0641\u0639\u0644\u0647 \u0628\u0627\u0644\u0636\u0628\u0637.",
            realTalk: ["Open your books", "Please sit down", "How old are you?"],
            dialogue: [
                { speaker: "Teacher", text: "Please sit down and open your books.", ar: "\u0645\u0646 \u0641\u0636\u0644\u0643 \u0627\u062c\u0644\u0633 \u0648\u0627\u0641\u062a\u062d \u0643\u062a\u0627\u0628\u0643." },
                { speaker: "Student", text: "What page, please?", ar: "\u0623\u064a \u0635\u0641\u062d\u0629 \u0645\u0646 \u0641\u0636\u0644\u0643\u061f" },
                { speaker: "Teacher", text: "Page 10. How old are you, Sara?", ar: "\u0627\u0644\u0635\u0641\u062d\u0629 10. \u0643\u0645 \u0639\u0645\u0631\u0643 \u064a\u0627 \u0633\u0627\u0631\u0629\u061f" },
                { speaker: "Sara", text: "I am twelve years old.", ar: "\u0639\u0645\u0631\u064a \u0627\u062b\u0646\u0627 \u0639\u0634\u0631 \u0639\u0627\u0645\u0627\u064b." }
            ]
        }
    },
    {
        id: 3,
        name: "What's That?",
        focus: "Demonstratives (This/That)",
        grammar: {
            noteEn: "We use 'This' and 'These' for things we can reach out and touch (Near). We use 'That' and 'Those' for things we point at from a distance (Far). Distance changes the word!",
            noteAr: "\u0646\u0633\u062a\u062e\u062f\u0645 'This' \u0648 'These' \u0644\u0644\u0623\u0634\u064a\u0627\u0621 \u0627\u0644\u062a\u064a \u064a\u0645\u0643\u0646\u0646\u0627 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u064a\u0647\u0627 \u0648\u0644\u0645\u0633\u0647\u0627 (\u0642\u0631\u064a\u0628). \u0648\u0646\u0633\u062a\u062e\u062f\u0645 'That' \u0648 'Those' \u0644\u0644\u0623\u0634\u064a\u0627\u0621 \u0627\u0644\u062a\u064a \u0646\u0634\u064a\u0631 \u0625\u0644\u064a\u0647\u0627 \u0645\u0646 \u0645\u0633\u0627\u0641\u0629 (\u0628\u0639\u064a\u062f). \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u062a\u063a\u064a\u0631 \u0627\u0644\u0643\u0644\u0645\u0629!",
            form: [
                "Affirmative (+): This/That is... | These/Those are...",
                "Negative (-): This is not... | These are not...",
                "Question (?): What is that? | Are these...?"
            ],
            examples: [
                "\"That is an airplane (far).\"",
                "\"These are my keys (near).\"",
                "\"Is that a fossil?\""
            ],
            logic: [
                "This/These = Near you.",
                "That/Those = Far away.",
                "Near things you can touch."
            ]
        },
        practice: {
            questions: [
                { q: "___ are my sunglasses on the table here.", options: ["This", "These"], answer: 1, wrongEn: "Wrong! 'Sunglasses' is plural, so use 'These'.", wrongAr: "\u062e\u0637\u0623! 'Sunglasses' \u062c\u0645\u0639\u060c \u0644\u0630\u0627 \u0627\u0633\u062a\u062e\u062f\u0645 'These'." },
                { q: "Please ___ touch the art in the museum.", options: ["No", "Don't"], answer: 1, wrongEn: "Wrong! Use 'Don't' for negative commands.", wrongAr: "\u062e\u0637\u0623! \u0627\u0633\u062a\u062e\u062f\u0645 'Don't' \u0644\u0644\u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0645\u0646\u0641\u064a\u0629." },
                { q: "I use a ___ to take photos.", options: ["Camera", "Bicycle"], answer: 0, wrongEn: "Wrong! You take photos with a camera.", wrongAr: "\u062e\u0637\u0623! \u062a\u0644\u062a\u0642\u0637 \u0627\u0644\u0635\u0648\u0631 \u0628\u0627\u0644\u0643\u0627\u0645\u064a\u0631\u0627." },
                { q: "Is that ___ eraser on the floor?", options: ["A", "An"], answer: 1, wrongEn: "Wrong! 'Eraser' starts with a vowel, so use 'An'.", wrongAr: "\u062e\u0637\u0623! 'Eraser' \u062a\u0628\u062f\u0623 \u0628\u062d\u0631\u0641 \u0645\u062a\u062d\u0631\u0643\u060c \u0644\u0630\u0627 \u0627\u0633\u062a\u062e\u062f\u0645 'An'." },
                { q: "What is the correct question for an object far away?", options: ["What is this", "What is that"], answer: 1, wrongEn: "Wrong! Use 'that' for things far away.", wrongAr: "\u062e\u0637\u0623! \u0627\u0633\u062a\u062e\u062f\u0645 'that' \u0644\u0644\u0623\u0634\u064a\u0627\u0621 \u0627\u0644\u0628\u0639\u064a\u062f\u0629." },
                { q: "We use \"a\" before the word \"Notebook.\"", options: ["True", "False"], answer: 0, wrongEn: "Wrong! 'Notebook' starts with a consonant, so 'a' is correct.", wrongAr: "\u062e\u0637\u0623! 'Notebook' \u062a\u0628\u062f\u0623 \u0628\u062d\u0631\u0641 \u0633\u0627\u0643\u0646\u060c \u0644\u0630\u0627 \u0641\u0625\u0646 'a' \u0635\u062d\u064a\u062d\u0629." }
            ]
        },
        vocabulary: {
            list: [
                { en: "Camera", ar: "\u0643\u0627\u0645\u064a\u0631\u0627", context: "I use a camera to take photos." },
                { en: "Calculator", ar: "\u0622\u0644\u0629 \u062d\u0627\u0633\u0628\u0629", context: "Use a calculator for the math test." },
                { en: "Fossil", ar: "\u0623\u062d\u0641\u0648\u0631\u0629", context: "Look at the dinosaur fossil." },
                { en: "Sculpture", ar: "\u062a\u0645\u062b\u0627\u0644 / \u0645\u0646\u062d\u0648\u062a\u0629", context: "Don't touch the sculpture in the museum." },
                { en: "Headphones", ar: "\u0633\u0645\u0627\u0639\u0627\u062a", context: "I listen to music with headphones." },
                { en: "Key", ar: "\u0645\u0641\u062a\u0627\u062d", context: "This is the key to my house." },
                { en: "Laptop", ar: "\u062d\u0627\u0633\u0648\u0628 \u0645\u062d\u0645\u0648\u0644", context: "I do my project on my laptop." },
                { en: "Souvenir", ar: "\u0647\u062f\u064a\u0629 \u062a\u0630\u0643\u0627\u0631\u064a\u0629", context: "I bought this souvenir from the museum." }
            ]
        },
        function: {
            context: "Visiting a museum or asking about mysterious objects.",
            howEn: "Use \"What's this?\" for something in your hand and \"What's that?\" for something across the room. In museums, negative commands often start with \"Please don't\" to be polite but firm.",
            howAr: "\u0627\u0633\u062a\u062e\u062f\u0645 \"What's this?\" \u0644\u0634\u064a\u0621 \u0641\u064a \u064a\u062f\u0643 \u0648 \"What's that?\" \u0644\u0634\u064a\u0621 \u0641\u064a \u0637\u0631\u0641 \u0627\u0644\u063a\u0631\u0641\u0629 \u0627\u0644\u0622\u062e\u0631. \u0641\u064a \u0627\u0644\u0645\u062a\u0627\u062d\u0641\u060c \u062a\u0628\u062f\u0623 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0645\u0646\u0641\u064a\u0629 \u063a\u0627\u0644\u0628\u0627\u064b \u0628\u0640 \"Please don't\" \u0644\u062a\u0643\u0648\u0646 \u0645\u0647\u0630\u0628\u0627\u064b \u0648\u0644\u0643\u0646 \u062d\u0627\u0632\u0645\u0627\u064b.",
            realTalk: ["Check it out!", "Please don't touch", "What is that?"],
            dialogue: [
                { speaker: "Visitor", text: "Check it out! What is that?", ar: "\u062a\u062d\u0642\u0642 \u0645\u0646 \u0647\u0630\u0627! \u0645\u0627 \u0647\u0630\u0627\u061f" },
                { speaker: "Guard", text: "That is a dinosaur fossil. Please don't touch it.", ar: "\u062a\u0644\u0643 \u0623\u062d\u0641\u0648\u0631\u0629 \u062f\u064a\u0646\u0627\u0635\u0648\u0631. \u0645\u0646 \u0641\u0636\u0644\u0643 \u0644\u0627 \u062a\u0644\u0645\u0633\u0647\u0627." },
                { speaker: "Visitor", text: "Oh, sorry. It's amazing!", ar: "\u0623\u0648\u0647\u060c \u0645\u0639\u0630\u0631\u0629. \u0625\u0646\u0647\u0627 \u0645\u0630\u0647\u0644\u0629!" }
            ]
        }
    },
    {
        id: 4,
        name: "Around the World",
        focus: "Origins & Countries",
        grammar: {
            noteEn: "To tell people where you are from, we combine the verb 'be' with the word 'from'. It links your identity to your home country or city.",
            noteAr: "\u0644\u0625\u062e\u0628\u0627\u0631 \u0627\u0644\u0646\u0627\u0633 \u0645\u0646 \u0623\u064a\u0646 \u0623\u0646\u062a\u060c \u0646\u062c\u0645\u0639 \u0628\u064a\u0646 \u0627\u0644\u0641\u0639\u0644 'be' \u0648\u0643\u0644\u0645\u0629 'from'. \u0625\u0646\u0647\u0627 \u062a\u0631\u0628\u0637 \u0647\u0648\u064a\u062a\u0643 \u0628\u0628\u0644\u062f\u0643 \u0623\u0648 \u0645\u062f\u064a\u0646\u062a\u0643 \u0627\u0644\u0623\u0635\u0644\u064a\u0629.",
            form: [
                "Affirmative (+): I am from... / They are Saudi.",
                "Negative (-): She is not (isn't) from Jordan.",
                "Question (?): Where are you from? / Are they...?"
            ],
            examples: [
                "\"We are from Egypt.\"",
                "\"He is not American.\"",
                "\"Is she from Oman?\""
            ],
            logic: [
                "Be + from = Origin.",
                "Negative adds 'not' to be.",
                "Questions swap Subject/Be."
            ]
        },
        practice: {
            questions: [
                { q: "Where ___ you from?", options: ["Are", "Is"], answer: 0, wrongEn: "Wrong! 'You' takes 'Are'.", wrongAr: "\u062e\u0637\u0623! 'You' \u062a\u0623\u062e\u0630 'Are'." },
                { q: "A person from Saudi Arabia is ___.", options: ["Saudi", "Spain"], answer: 0, wrongEn: "Wrong! Spain is the country; Saudi is the nationality.", wrongAr: "\u062e\u0637\u0623! Spain \u0647\u0648 \u0627\u0644\u0628\u0644\u062f\u061b Saudi \u0647\u064a \u0627\u0644\u062c\u0646\u0633\u064a\u0629." },
                { q: "___ she from Jordan?", options: ["Am", "Is"], answer: 1, wrongEn: "Wrong! 'She' takes 'Is'.", wrongAr: "\u062e\u0637\u0623! 'She' \u062a\u0623\u062e\u0630 'Is'." },
                { q: "What is the capital of Saudi Arabia?", options: ["Jeddah", "Riyadh"], answer: 1, wrongEn: "Wrong! Riyadh is the capital of Saudi Arabia.", wrongAr: "\u062e\u0637\u0623! \u0627\u0644\u0631\u064a\u0627\u0636 \u0647\u064a \u0639\u0627\u0635\u0645\u0629 \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629." },
                { q: "Where is he from? He is ___ Brazil.", options: ["In", "From"], answer: 1, wrongEn: "Wrong! Use 'From' for origin.", wrongAr: "\u062e\u0637\u0623! \u0627\u0633\u062a\u062e\u062f\u0645 'From' \u0644\u0644\u0645\u0646\u0634\u0623." },
                { q: "We ___ not from the USA.", options: ["Is", "Are"], answer: 1, wrongEn: "Wrong! 'We' takes 'Are'.", wrongAr: "\u062e\u0637\u0623! 'We' \u062a\u0623\u062e\u0630 'Are'." },
                { q: "Riyadh is the capital city of Saudi Arabia.", options: ["True", "False"], answer: 0, wrongEn: "Wrong! Riyadh is indeed the capital.", wrongAr: "\u062e\u0637\u0623! \u0627\u0644\u0631\u064a\u0627\u0636 \u0647\u064a \u0628\u0627\u0644\u0641\u0639\u0644 \u0627\u0644\u0639\u0627\u0635\u0645\u0629." }
            ]
        },
        vocabulary: {
            list: [
                { en: "Capital", ar: "\u0639\u0627\u0635\u0645\u0629", context: "Riyadh is the capital of Saudi Arabia." },
                { en: "City", ar: "\u0645\u062f\u064a\u0646\u0629", context: "Jeddah is a big city." },
                { en: "Country", ar: "\u0628\u0644\u062f / \u062f\u0648\u0644\u0629", context: "Which country are you from?" },
                { en: "Nationality", ar: "\u062c\u0646\u0633\u064a\u0629", context: "My nationality is Saudi." },
                { en: "Language", ar: "\u0644\u063a\u0629", context: "Arabic is my first language." },
                { en: "Address", ar: "\u0639\u0646\u0648\u0627\u0646", context: "What is your home address?" },
                { en: "Website", ar: "\u0645\u0648\u0642\u0639 \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a", context: "Visit our school website." }
            ]
        },
        function: {
            context: "Travel, meeting international students, and giving addresses.",
            howEn: "When someone asks \"Where are you from?\", they are asking for your country. If you want to be polite before asking a stranger a question, always start with \"Excuse me.\"",
            howAr: "\u0639\u0646\u062f\u0645\u0627 \u064a\u0633\u0623\u0644 \u0634\u062e\u0635 \u0645\u0627 \"\u0645\u0646 \u0623\u064a\u0646 \u0623\u0646\u062a\u061f\"\u060c \u0641\u0647\u0648 \u064a\u0633\u0623\u0644 \u0639\u0646 \u0628\u0644\u062f\u0643. \u0625\u0630\u0627 \u0643\u0646\u062a \u062a\u0631\u064a\u062f \u0623\u0646 \u062a\u0643\u0648\u0646 \u0645\u0647\u0630\u0628\u0627\u064b \u0642\u0628\u0644 \u0637\u0631\u062d \u0633\u0624\u0627\u0644 \u0639\u0644\u0649 \u063a\u0631\u064a\u0628\u060c \u0627\u0628\u062f\u0623 \u062f\u0627\u0626\u0645\u0627\u064b \u0628\u0640 \"Excuse me\".",
            realTalk: ["Excuse me", "How about you?", "I'm from..."],
            dialogue: [
                { speaker: "Tourist", text: "Excuse me, where are you from?", ar: "\u0645\u0639\u0630\u0631\u0629\u060c \u0645\u0646 \u0623\u064a\u0646 \u0623\u0646\u062a\u061f" },
                { speaker: "Fahad", text: "I'm from Saudi Arabia. How about you?", ar: "\u0623\u0646\u0627 \u0645\u0646 \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629. \u0645\u0627\u0630\u0627 \u0639\u0646\u0643\u061f" },
                { speaker: "Tourist", text: "I'm from England. I'm a student here.", ar: "\u0623\u0646\u0627 \u0645\u0646 \u0625\u0646\u062c\u0644\u062a\u0631\u0627. \u0623\u0646\u0627 \u0637\u0627\u0644\u0628 \u0647\u0646\u0627." }
            ]
        }
    },
    {
        id: 5,
        name: "Families, Families",
        focus: "Possession & 's",
        grammar: {
            noteEn: "In English, we show ownership in two ways: with the verb 'have' (I have a brother) or by adding 's to a person's name (Ali's car). It's like a tag that shows who owns what.",
            noteAr: "\u0641\u064a \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629\u060c \u0646\u0638\u0647\u0631 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0628\u0637\u0631\u064a\u0642\u062a\u064a\u0646: \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0641\u0639\u0644 'have' (\u0644\u062f\u064a \u0623\u062e) \u0623\u0648 \u0628\u0625\u0636\u0627\u0641\u0629 's \u0625\u0644\u0649 \u0627\u0633\u0645 \u0627\u0644\u0634\u062e\u0635 (\u0633\u064a\u0627\u0631\u0629 \u0639\u0644\u064a). \u0625\u0646\u0647\u0627 \u0645\u062b\u0644 \u0639\u0644\u0627\u0645\u0629 \u062a\u0648\u0636\u062d \u0645\u0646 \u064a\u0645\u0644\u0643 \u0645\u0627\u0630\u0627.",
            form: [
                "Affirmative (+): I have... / He has... / Ali's sister.",
                "Negative (-): I do not have... / He does not have...",
                "Question (?): Do you have...? / How many...?"
            ],
            examples: [
                "\"I have two brothers.\"",
                "\"She doesn't have a car.\"",
                "\"Do you have any cousins?\""
            ],
            logic: [
                "'s indicates ownership.",
                "Have/Has shows possession.",
                "Ahmed's = \u0627\u062d\u0645\u062f \u064a\u0645\u0644\u0643."
            ]
        },
        practice: {
            questions: [
                { q: "My father's sister is my ___.", options: ["Aunt", "Uncle"], answer: 0, wrongEn: "Wrong! A sister of your parent is an aunt.", wrongAr: "\u062e\u0637\u0623! \u0623\u062e\u062a \u0648\u0627\u0644\u062f\u0643 \u0647\u064a \u0639\u0645\u062a\u0643 (Aunt)." },
                { q: "___ any brothers?", options: ["Do you have", "Has"], answer: 0, wrongEn: "Wrong! Use 'Do you have' for questions with 'you'.", wrongAr: "\u062e\u0637\u0623! \u0627\u0633\u062a\u062e\u062f\u0645 'Do you have' \u0644\u0644\u0623\u0633\u0626\u0644\u0629 \u0645\u0639 \u0627\u0644\u0636\u0645\u064a\u0631 'you'." },
                { q: "I have two ___.", options: ["Children", "Child"], answer: 0, wrongEn: "Wrong! 'Two' needs a plural noun. 'Children' is the plural of 'Child'.", wrongAr: "\u062e\u0637\u0623! \u0627\u0644\u0631\u0642\u0645 '\u0627\u062b\u0646\u0627\u0646' \u064a\u062d\u062a\u0627\u062c \u0644\u0627\u0633\u0645 \u062c\u0645\u0639. 'Children' \u0647\u064a \u062c\u0645\u0639 'Child'." },
                { q: "This is ___ book. (belonging to Ali)", options: ["Ali's", "Alis"], answer: 0, wrongEn: "Wrong! Use 's to show that the book belongs to Ali.", wrongAr: "\u062e\u0637\u0623! \u0627\u0633\u062a\u062e\u062f\u0645 's \u0644\u062a\u0648\u0636\u064a\u062d \u0623\u0646 \u0627\u0644\u0643\u062a\u0627\u0628 \u0645\u0644\u0643 \u0644\u0639\u0644\u064a." },
                { q: "The son of my brother is my ___.", options: ["Nephew", "Niece"], answer: 0, wrongEn: "Wrong! A 'Nephew' is a boy; a 'Niece' is a girl.", wrongAr: "\u062e\u0637\u0623! 'Nephew' \u0647\u0648 \u0627\u0644\u0648\u0644\u062f\u061b \u0628\u064a\u0646\u0645\u0627 'Niece' \u0647\u064a \u0627\u0644\u0628\u0646\u062a." },
                { q: "Your father's father is your grandfather.", options: ["True", "False"], answer: 0, wrongEn: "Wrong! Your father's father is definitely your grandfather.", wrongAr: "\u062e\u0637\u0623! \u0648\u0627\u0644\u062f \u0648\u0627\u0644\u062f\u0643 \u0647\u0648 \u0628\u0627\u0644\u062a\u0623\u0643\u064a\u062f \u062c\u062f\u0643." }
            ]
        },
        vocabulary: {
            list: [
                { en: "Aunt", ar: "\u0639\u0645\u0629 / \u062e\u0627\u0644\u0629", context: "My father's sister is my aunt." },
                { en: "Uncle", ar: "\u0639\u0645 / \u062e\u0627\u0644", context: "My mother's brother is my uncle." },
                { en: "Cousin", ar: "\u0627\u0628\u0646 \u0639\u0645 / \u062e\u0627\u0644", context: "My cousin plays football with me." },
                { en: "Nephew", ar: "\u0627\u0628\u0646 \u0627\u0644\u0623\u062e / \u0627\u0644\u0623\u062e\u062a", context: "My brother has a son; he is my nephew." },
                { en: "Niece", ar: "\u0627\u0628\u0646\u0629 \u0627\u0644\u0623\u062e / \u0627\u0644\u0623\u062e\u062a", context: "My sister has a daughter; she is my niece." },
                { en: "Grandparents", ar: "\u0627\u0644\u0623\u062c\u062f\u0627\u062f", context: "I visit my grandparents on Friday." },
                { en: "Married", ar: "\u0645\u062a\u0632\u0648\u062c", context: "My brother is married." },
                { en: "Only child", ar: "\u0637\u0641\u0644 \u0648\u062d\u064a\u062f", context: "I have no brothers; I am an only child." }
            ]
        },
        function: {
            context: "Describing your family tree and siblings.",
            howEn: "We use \"Who\" to ask about people. To describe a large family, we use \"How many\" to count brothers and sisters. Use \"only child\" if you have no siblings.",
            howAr: "\u0646\u0633\u062a\u062e\u062f\u0645 \"Who\" \u0644\u0644\u0633\u0624\u0627\u0644 \u0639\u0646 \u0627\u0644\u0623\u0634\u062e\u0627\u0635. \u0648\u0644\u0648\u0635\u0641 \u0639\u0627\u0626\u0644\u0629 \u0643\u0628\u064a\u0631\u0629\u060c \u0646\u0633\u062a\u062e\u062f\u0645 \"How many\" \u0644\u0639\u062f \u0627\u0644\u0625\u062e\u0648\u0629 \u0648\u0627\u0644\u0623\u062e\u0648\u0627\u062a. \u0627\u0633\u062a\u062e\u062f\u0645 \"only child\" \u0625\u0630\u0627 \u0644\u0645 \u064a\u0643\u0646 \u0644\u062f\u064a\u0643 \u0625\u062e\u0648\u0629.",
            realTalk: ["Who is he?", "How many brothers...?", "This is Ali's father"],
            dialogue: [
                { speaker: "Ali", text: "This is my family photo.", ar: "\u0647\u0630\u0647 \u0635\u0648\u0631\u0629 \u0639\u0627\u0626\u0644\u062a\u064a." },
                { speaker: "Friend", text: "Who is he?", ar: "\u0645\u0646 \u0647\u0648\u061f" },
                { speaker: "Ali", text: "This is my father. I have two brothers.", ar: "\u0647\u0630\u0627 \u0648\u0627\u0644\u062f\u064a. \u0644\u062f\u064a \u0623\u062e\u0648\u0627\u0646." },
                { speaker: "Friend", text: "How many brothers do you have?", ar: "\u0643\u0645 \u0639\u062f\u062f\u0627\u064b \u0645\u0646 \u0627\u0644\u0625\u062e\u0648\u0629 \u0644\u062f\u064a\u0643\u061f" }
            ]
        }
    },
    {
        id: 6,
        name: "Is There a View?",
        focus: "Existence & Furniture",
        grammar: {
            noteEn: "We use 'There is' and 'There are' to describe what exists in a room or place. Use 'Is' for one thing and 'Are' for many things. It's like making a list of what you see!",
            noteAr: "\u0646\u0633\u062a\u062e\u062f\u0645 'There is' \u0648 'There are' \u0644\u0648\u0635\u0641 \u0645\u0627 \u0647\u0648 \u0645\u0648\u062c\u0648\u062f \u0641\u064a \u063a\u0631\u0641\u0629 \u0623\u0648 \u0645\u0643\u0627\u0646. \u0627\u0633\u062a\u062e\u062f\u0645 'Is' \u0644\u0634\u064a\u0621 \u0648\u0627\u062d\u062f \u0648 'Are' \u0644\u0623\u0634\u064a\u0627\u0621 \u0643\u062b\u064a\u0631\u0629. \u0627\u0644\u0623\u0645\u0631 \u064a\u0634\u0628\u0647 \u0639\u0645\u0644 \u0642\u0627\u0626\u0645\u0629 \u0628\u0645\u0627 \u062a\u0631\u0627\u0647!",
            form: [
                "Affirmative (+): There is a rug. / There are two chairs.",
                "Negative (-): There isn't a TV. / There aren't any lamps.",
                "Question (?): Is there a garage? / Are there any...?"
            ],
            examples: [
                "\"There is a bed in the room.\"",
                "\"There are no flowers.\"",
                "\"Are there curtains?\""
            ],
            logic: [
                "There is = Singular (1).",
                "There are = Plural (2+).",
                "Describes what is inside."
            ]
        },
        practice: {
            questions: [
                { q: "We cook food in the ___.", options: ["Kitchen", "Bathroom"], answer: 0, wrongEn: "Wrong! We cook in the kitchen, not the bathroom.", wrongAr: "\u062e\u0637\u0623! \u0646\u062d\u0646 \u0646\u0637\u0628\u062e \u0641\u064a \u0627\u0644\u0645\u0637\u0628\u062e\u060c \u0648\u0644\u064a\u0633 \u0641\u064a \u0627\u0644\u062d\u0645\u0627\u0645." },
                { q: "___ there a sofa in the living room?", options: ["Are", "Is"], answer: 1, wrongEn: "Wrong! 'A sofa' is singular. Use 'Is'.", wrongAr: "\u062e\u0637\u0623! 'A sofa' \u0645\u0641\u0631\u062f. \u0627\u0633\u062a\u062e\u062f\u0645 'Is'." },
                { q: "The cat is ___ the table (underneath it).", options: ["On", "Under"], answer: 1, wrongEn: "Wrong! 'Under' means underneath.", wrongAr: "\u062e\u0637\u0623! 'Under' \u062a\u0639\u0646\u064a \u062a\u062d\u062a." },
                { q: "I sleep on a ___ in my bedroom.", options: ["Stove", "Bed"], answer: 1, wrongEn: "Wrong! A stove is for cooking; a bed is for sleeping.", wrongAr: "\u062e\u0637\u0623! \u0627\u0644\u0645\u0648\u0642\u062f \u0644\u0644\u0637\u0628\u062e\u061b \u0648\u0627\u0644\u0633\u0631\u064a\u0631 \u0644\u0644\u0646\u0648\u0645." },
                { q: "There ___ many flowers in the garden.", options: ["Is", "Are"], answer: 1, wrongEn: "Wrong! 'Many flowers' is plural. Use 'Are'.", wrongAr: "\u062e\u0637\u0623! 'Many flowers' \u062c\u0645\u0639. \u0627\u0633\u062a\u062e\u062f\u0645 'Are'." },
                { q: "A \"Rug\" is usually found on the floor.", options: ["True", "False"], answer: 0, wrongEn: "Wrong! A rug is definitely a floor covering.", wrongAr: "\u062e\u0637\u0623! \u0627\u0644\u0633\u062c\u0627\u062f\u0629 \u0647\u064a \u0628\u0627\u0644\u062a\u0623\u0643\u064a\u062f \u063a\u0637\u0627\u0621 \u0644\u0644\u0623\u0631\u0636\u064a\u0629." },
                { q: "\"Upstairs\" means the top floor of a house.", options: ["True", "False"], answer: 0, wrongEn: "Wrong! 'Upstairs' refers to higher levels/floors.", wrongAr: "\u062e\u0637\u0623! 'Upstairs' \u062a\u0634\u064a\u0631 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u062a\u0648\u064a\u0627\u062a/\u0627\u0644\u0637\u0648\u0627\u0628\u0642 \u0627\u0644\u0639\u0644\u064a\u0627." }
            ]
        },
        vocabulary: {
            list: [
                { en: "Kitchen", ar: "\u0645\u0637\u0628\u062e", context: "We cook food in the kitchen." },
                { en: "Bedroom", ar: "\u063a\u0631\u0641\u0629 \u0646\u0648\u0645", context: "I sleep in my bedroom." },
                { en: "Living room", ar: "\u063a\u0631\u0641\u0629 \u0627\u0644\u0645\u0639\u064a\u0634\u0629", context: "We watch TV in the living room." },
                { en: "Microwave", ar: "\u0645\u0627\u064a\u0643\u0631\u0648\u064a\u0641", context: "Heat the pizza in the microwave." },
                { en: "Refrigerator", ar: "\u062b\u0644\u0627\u062c\u0629", context: "Keep the milk in the refrigerator." },
                { en: "Rug", ar: "\u0633\u062c\u0627\u062f\u0629", context: "There is a rug on the floor." },
                { en: "Armchair", ar: "\u0643\u0631\u0633\u064a \u0645\u0631\u064a\u062d", context: "My father sits in the armchair." },
                { en: "Cabinet", ar: "\u062e\u0632\u0627\u0646\u0629", context: "The plates are in the kitchen cabinet." }
            ]
        },
        function: {
            context: "Describing your house or a room to a friend.",
            howEn: "Use \"There is/are\" to list what is in a room. Prepositions (on, under, behind) are the \"Map\" of the sentence; they tell the listener exactly where to look for an object.",
            howAr: "\u0627\u0633\u062a\u062e\u062f\u0645 \"There is/are\" \u0644\u0633\u0631\u062f \u0645\u0627 \u064a\u0648\u062c\u062f \u0641\u064a \u0627\u0644\u063a\u0631\u0641\u0629. \u062d\u0631\u0648\u0641 \u0627\u0644\u062c\u0631 (\u0639\u0644\u0649\u060c \u062a\u062d\u062a\u060c \u062e\u0644\u0641) \u0647\u064a \"\u0627\u0644\u062e\u0631\u064a\u0637\u0629\" \u0641\u064a \u0627\u0644\u062c\u0645\u0644\u0629\u061b \u0641\u0647\u064a \u062a\u062e\u0628\u0631 \u0627\u0644\u0645\u0633\u062a\u0645\u0639 \u0628\u0627\u0644\u0636\u0628\u0637 \u0623\u064a\u0646 \u064a\u0628\u062d\u062b \u0639\u0646 \u0627\u0644\u0634\u064a\u0621.",
            realTalk: ["Is there a view?", "It's very comfortable", "In front of..."],
            dialogue: [
                { speaker: "Friend", text: "Your new house is great! Is there a view?", ar: "\u0645\u0646\u0632\u0644\u0643 \u0627\u0644\u062c\u062f\u064a\u062f \u0631\u0627\u0626\u0639! \u0647\u0644 \u062a\u0648\u062c\u062f \u0625\u0637\u0644\u0627\u0644\u0629\u061f" },
                { speaker: "Owner", text: "Yes, look! The garden is in front of the window.", ar: "\u0646\u0639\u0645\u060c \u0627\u0646\u0638\u0631! \u0627\u0644\u062d\u062f\u064a\u0642\u0629 \u0623\u0645\u0627\u0645 \u0627\u0644\u0646\u0627\u0641\u0630\u0629." },
                { speaker: "Friend", text: "It's very comfortable here.", ar: "\u0625\u0646\u0647 \u0645\u0631\u064a\u062d \u062c\u062f\u0627\u064b \u0647\u0646\u0627." }
            ]
        }
    },
    {
        id: 7,
        name: "Where Do You Live?",
        focus: "Directions & Commands",
        grammar: {
            noteEn: "When we give directions or orders, we use the verb on its own without a subject (like 'I' or 'You'). This is called the Imperative. It's the most direct way to speak!",
            noteAr: "\u0639\u0646\u062f\u0645\u0627 \u0646\u0639\u0637\u064a \u062a\u0648\u062c\u064a\u0647\u0627\u062a \u0623\u0648 \u0623\u0648\u0627\u0645\u0631\u060c \u0646\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0641\u0639\u0644 \u0628\u0645\u0641\u0631\u062f\u0647 \u0628\u062f\u0648\u0646 \u0641\u0627\u0639\u0644 (\u0645\u062b\u0644 '\u0623\u0646\u0627' \u0623\u0648 '\u0623\u0646\u062a'). \u064a\u0633\u0645\u0649 \u0647\u0630\u0627 \u0628\u0635\u064a\u063a\u0629 \u0627\u0644\u0623\u0645\u0631. \u0625\u0646\u0647\u0627 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u0623\u0643\u062b\u0631 \u0645\u0628\u0627\u0634\u0631\u0629 \u0644\u0644\u062a\u062d\u062f\u062b!",
            form: [
                "Affirmative (+): Turn left. / The bank is next to...",
                "Negative (-): Do not (Don't) turn right.",
                "Question (?): Where do you live? / How can I get to...?"
            ],
            examples: [
                "\"Go straight.\"",
                "\"It is not near the bank.\"",
                "\"Where do you live?\""
            ],
            logic: [
                "Imperative = No subject.",
                "Next to = 1 place context.",
                "Between = 2 places context."
            ]
        },
        practice: {
            questions: [
                { q: "You buy medicine at a Pharmacy.", options: ["True", "False"], answer: 0, wrongEn: "Wrong! A pharmacy is where you get medicine.", wrongAr: "\u062e\u0637\u0623! \u0627\u0644\u0635\u064a\u062f\u0644\u064a\u0629 \u0647\u064a \u0627\u0644\u0645\u0643\u0627\u0646 \u0627\u0644\u0630\u064a \u062a\u062d\u0635\u0644 \u0645\u0646\u0647 \u0639\u0644\u0649 \u0627\u0644\u062f\u0648\u0627\u0621." },
                { q: "Where can you buy bread?", options: ["Supermarket", "Hospital"], answer: 0, wrongEn: "Wrong! You buy food at the supermarket.", wrongAr: "\u062e\u0637\u0623! \u062a\u0634\u062a\u0631\u064a \u0627\u0644\u0637\u0639\u0627\u0645 \u0645\u0646 \u0627\u0644\u0633\u0648\u0628\u0631 \u0645\u0627\u0631\u0643\u062a." },
                { q: "To get to the bank, go ___ (forward).", options: ["Straight", "Left"], answer: 0, wrongEn: "Wrong! 'Forward' refers to going straight.", wrongAr: "\u062e\u0637\u0623! \u0643\u0644\u0645\u0629 'Forward' \u062a\u0634\u064a\u0631 \u0625\u0644\u0649 \u0627\u0644\u0630\u0647\u0627\u0628 \u0644\u0644\u0623\u0645\u0627\u0645 \u0645\u0628\u0627\u0634\u0631\u0629." },
                { q: "The school is ___ the park and the mall.", options: ["Next to", "Between"], answer: 1, wrongEn: "Wrong! Use 'Between' when referring to two separate landmarks.", wrongAr: "\u062e\u0637\u0623! \u0627\u0633\u062a\u062e\u062f\u0645 'Between' \u0639\u0646\u062f \u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0625\u0644\u0649 \u0645\u0639\u0644\u0645\u064a\u0646 \u0645\u0646\u0641\u0635\u0644\u064a\u0646." },
                { q: "Turn ___ (opposite of right) at the corner.", options: ["Left", "Straight"], answer: 0, wrongEn: "Wrong! The opposite of right is left.", wrongAr: "\u062e\u0637\u0623! \u0639\u0643\u0633 \u0627\u0644\u064a\u0645\u064a\u0646 \u0647\u0648 \u0627\u0644\u064a\u0633\u0627\u0631." },
                { q: "You can find books at the ___.", options: ["Bookstore", "Post office"], answer: 0, wrongEn: "Wrong! A bookstore sells books.", wrongAr: "\u062e\u0637\u0623! \u0645\u062a\u062c\u0631 \u0627\u0644\u0643\u062a\u0628 (Bookstore) \u064a\u0628\u064a\u0639 \u0627\u0644\u0643\u062a\u0628." }
            ]
        },
        vocabulary: {
            list: [
                { en: "Pharmacy", ar: "\u0635\u064a\u062f\u0644\u064a\u0629", context: "You buy medicine at the pharmacy." },
                { en: "Bookstore", ar: "\u0645\u0643\u062a\u0628\u0629 (\u0644\u0628\u064a\u0639 \u0627\u0644\u0643\u062a\u0628)", context: "I buy my notebooks at the bookstore." },
                { en: "Post office", ar: "\u0645\u0643\u062a\u0628 \u0628\u0631\u064a\u062f", context: "Send the letter at the post office." },
                { en: "Supermarket", ar: "\u0633\u0648\u0628\u0631 \u0645\u0627\u0631\u0643\u062a", context: "We buy food at the supermarket." },
                { en: "Bank", ar: "\u0628\u0646\u0643", context: "I save my money in the bank." },
                { en: "Mall", ar: "\u0645\u0631\u0643\u0632 \u062a\u0633\u0648\u0642", context: "Let's go shopping at the mall." },
                { en: "Directions", ar: "\u0627\u062a\u062c\u0627\u0647\u0627\u062a", context: "Ask the man for directions." },
                { en: "Straight", ar: "\u0645\u0633\u062a\u0642\u064a\u0645", context: "Go straight and then turn left." }
            ]
        },
        function: {
            context: "Navigating a city and asking for locations.",
            howEn: "When giving directions, be precise. Commands like 'Turn left' or 'Go straight' guide the listener. Use 'next to' or 'between' to describe locations relative to landmarks.",
            howAr: "\u0639\u0646\u062f \u0625\u0639\u0637\u0627\u0621 \u0627\u0644\u0627\u062a\u062c\u0627\u0647\u0627\u062a\u060c \u0643\u0646 \u062f\u0642\u064a\u0642\u0627\u064b. \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0645\u062b\u0644 'Turn left' \u0623\u0648 'Go straight' \u062a\u0648\u062c\u0647 \u0627\u0644\u0645\u0633\u062a\u0645\u0639. \u0627\u0633\u062a\u062e\u062f\u0645 'next to' \u0623\u0648 'between' \u0644\u0648\u0635\u0641 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u0644\u0645\u0639\u0627\u0644\u0645.",
            realTalk: ["Where is the bank?", "Go straight", "Turn left at the corner"],
            dialogue: [
                { speaker: "Man", text: "Excuse me, where is the bank?", ar: "\u0645\u0639\u0630\u0631\u0629\u060c \u0623\u064a\u0646 \u0627\u0644\u0628\u0646\u0643\u061f" },
                { speaker: "You", text: "Go straight and turn left at the corner.", ar: "\u0627\u0630\u0647\u0628 \u0645\u0628\u0627\u0634\u0631\u0629 \u0648\u0627\u0646\u0639\u0637\u0641 \u064a\u0633\u0627\u0631\u0627\u064b \u0639\u0646\u062f \u0627\u0644\u0632\u0627\u0648\u064a\u0629." },
                { speaker: "Man", text: "Is it next to the pharmacy?", ar: "\u0647\u0644 \u0647\u0648 \u0628\u062c\u0648\u0627\u0631 \u0627\u0644\u0635\u064a\u062f\u0644\u064a\u0629\u061f" },
                { speaker: "You", text: "Yes, it is.", ar: "\u0646\u0639\u0645\u060c \u0647\u0648 \u0643\u0630\u0644\u0643." }
            ]
        }
    },
    {
        id: 8,
        name: "What Are You Doing?",
        focus: "Present Progressive (-ing)",
        grammar: {
            noteEn: "To talk about actions happening right now, we use 'be + -ing'. The '-ing' acts like a timer, showing that the action is still in progress at this exact moment.",
            noteAr: "\u0644\u0644\u062a\u062d\u062f\u062b \u0639\u0646 \u0623\u0641\u0639\u0627\u0644 \u062a\u062d\u062f\u062b \u0627\u0644\u0622\u0646\u060c \u0646\u0633\u062a\u062e\u062f\u0645 'be + -ing'. \u064a\u0639\u0645\u0644 '-ing' \u0645\u062b\u0644 \u0627\u0644\u0645\u0624\u0642\u062a\u060c \u0645\u0648\u0636\u062d\u0627\u064b \u0623\u0646 \u0627\u0644\u0641\u0639\u0644 \u0644\u0627 \u064a\u0632\u0627\u0644 \u0645\u0633\u062a\u0645\u0631\u0627\u064b \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0644\u062d\u0638\u0629 \u0628\u0627\u0644\u0636\u0628\u0637.",
            form: [
                "Affirmative (+): Subject + be + verb-ing (He is eating).",
                "Negative (-): Subject + be + not + verb-ing.",
                "Question (?): be + Subject + verb-ing? (Are they working?)"
            ],
            examples: [
                "\"I am surfing the net.\"",
                "\"He is not (isn't) calling.\"",
                "\"Are you reading?\""
            ],
            logic: [
                "Action is happening NOW.",
                "-ing is the timer.",
                "I pairs with 'am'."
            ]
        },
        practice: {
            questions: [
                { q: "What are you doing? I am ____ my friend on the phone.", options: ["call", "calling"], answer: 1, wrongEn: "Wrong! For ongoing actions, use be + verb-ing.", wrongAr: "\u062e\u0637\u0623! \u0644\u0644\u0623\u0641\u0639\u0627\u0644 \u0627\u0644\u0645\u0633\u062a\u0645\u0631\u0629\u060c \u0627\u0633\u062a\u062e\u062f\u0645 be + verb-ing." },
                { q: "He is ____ the internet in the computer lab.", options: ["surf", "surfing"], answer: 1, wrongEn: "Wrong! After 'is', use the -ing form for the present progressive.", wrongAr: "\u062e\u0637\u0623! \u0628\u0639\u062f 'is'\u060c \u0627\u0633\u062a\u062e\u062f\u0645 \u0635\u064a\u063a\u0629 -ing \u0644\u0644\u0645\u0636\u0627\u0631\u0639 \u0627\u0644\u0645\u0633\u062a\u0645\u0631." },
                { q: "Would you ____ to go to the mall?", options: ["like", "likes"], answer: 0, wrongEn: "Wrong! After 'Would you', use the base form 'like'.", wrongAr: "\u062e\u0637\u0623! \u0628\u0639\u062f 'Would you'\u060c \u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0635\u064a\u063a\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629 'like'." },
                { q: "They are ____ a text message right now.", options: ["read", "reading"], answer: 1, wrongEn: "Wrong! 'Right now' signals a progressive action (reading).", wrongAr: "\u062e\u0637\u0623! 'Right now' \u062a\u0634\u064a\u0631 \u0625\u0644\u0649 \u0641\u0639\u0644 \u0645\u0633\u062a\u0645\u0631 (reading)." },
                { q: "\"What's up?\" is a way to say ____.", options: ["Hello/What is happening", "Goodbye"], answer: 0, wrongEn: "Wrong! 'What's up?' is a greeting, not a way to leave.", wrongAr: "\u062e\u0637\u0623! 'What's up?' \u0647\u064a \u062a\u062d\u064a\u0629\u060c \u0648\u0644\u064a\u0633\u062a \u0637\u0631\u064a\u0642\u0629 \u0644\u0644\u0645\u063a\u0627\u062f\u0631\u0629." },
                { q: "True/False: You can watch an action film at a food court.", options: ["True", "False"], answer: 1, wrongEn: "Wrong! You watch films at a cinema; food courts are for eating.", wrongAr: "\u062e\u0637\u0623! \u062a\u0634\u0627\u0647\u062f \u0627\u0644\u0623\u0641\u0644\u0627\u0645 \u0641\u064a \u0627\u0644\u0633\u064a\u0646\u0645\u0627\u061b \u0635\u0627\u0644\u0627\u062a \u0627\u0644\u0637\u0639\u0627\u0645 \u0644\u062a\u0646\u0627\u0648\u0644 \u0627\u0644\u0623\u0643\u0644." },
                { q: "True/False: \"Good idea!\" is a way to agree with a suggestion.", options: ["True", "False"], answer: 0, wrongEn: "Wrong! 'Good idea!' is indeed used for agreeing.", wrongAr: "\u062e\u0637\u0623! 'Good idea!' \u062a\u0633\u062a\u062e\u062f\u0645 \u0628\u0627\u0644\u0641\u0639\u0644 \u0644\u0644\u0645\u0648\u0627\u0641\u0642\u0629." }
            ]
        },
        vocabulary: {
            list: [
                { en: "Surf the net", ar: "\u064a\u062a\u0635\u0641\u062d \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a", context: "He is surfing the net for information." },
                { en: "Chat", ar: "\u062f\u0631\u062f\u0634\u0629", context: "I chat with my friends online." },
                { en: "Deliver", ar: "\u064a\u0648\u0635\u0644", context: "The man is delivering the pizza." },
                { en: "Hang out", ar: "\u064a\u0642\u0636\u064a \u0648\u0642\u062a\u0627\u064b \u0645\u0639", context: "I hang out with my cousins." },
                { en: "Text message", ar: "\u0631\u0633\u0627\u0644\u0629 \u0646\u0635\u064a\u0629", context: "Send me a text message later." },
                { en: "Food court", ar: "\u0635\u0627\u0644\u0629 \u0627\u0644\u0637\u0639\u0627\u0645", context: "Let's eat lunch at the food court." },
                { en: "Action film", ar: "\u0641\u064a\u0644\u0645 \u062d\u0631\u0643\u0629", context: "I am watching a cool action film." },
                { en: "Magazine", ar: "\u0645\u062c\u0644\u0629", context: "My mother is reading a magazine." }
            ]
        },
        function: {
            context: "Talking on the phone or chatting about what you are doing right now.",
            howEn: "Use \"What's up?\" as an informal way to ask what is happening. When someone suggests an activity, \"Good idea!\" or \"Let's...\" are the best ways to agree and join in.",
            howAr: "\u0627\u0633\u062a\u062e\u062f\u0645 \"What's up?\" \u0643\u0637\u0631\u064a\u0642\u0629 \u063a\u064a\u0631 \u0631\u0633\u0645\u064a\u0629 \u0644\u0644\u0633\u0624\u0627\u0644 \u0639\u0645\u0627 \u064a\u062d\u062f\u062b. \u0639\u0646\u062f\u0645\u0627 \u064a\u0642\u062a\u0631\u062d \u0634\u062e\u0635 \u0645\u0627 \u0646\u0634\u0627\u0637\u0627\u064b\u060c \u0641\u0625\u0646 \"Good idea!\" \u0623\u0648 \"Let's...\" \u0647\u064a \u0623\u0641\u0636\u0644 \u0627\u0644\u0637\u0631\u0642 \u0644\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629.",
            realTalk: ["What's up?", "Good idea!", "I'm hanging out"],
            dialogue: [
                { speaker: "Sami", text: "Hi Omar! What's up?", ar: "\u0623\u0647\u0644\u0627\u064b \u0639\u0645\u0631! \u0645\u0627 \u0627\u0644\u062c\u062f\u064a\u062f\u061f" },
                { speaker: "Omar", text: "I'm hanging out at the mall. Let's eat lunch!", ar: "\u0623\u0646\u0627 \u0623\u062a\u0633\u0643\u0639 \u0641\u064a \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u062a\u062c\u0627\u0631\u064a. \u0644\u0646\u0623\u0643\u0644 \u0627\u0644\u063a\u062f\u0627\u0621!" },
                { speaker: "Sami", text: "Good idea! I'm coming now.", ar: "\u0641\u0643\u0631\u0629 \u062c\u064a\u062f\u0629! \u0623\u0646\u0627 \u0642\u0627\u062f\u0645 \u0627\u0644\u0622\u0646." }
            ]
        }
    }
];
