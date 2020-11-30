<script>

    
    var scale = ["Strongly Disagree","Moderately Disagree", "Slightly Disagree", "Slightly Agree", "Moderately Agree", "Strongly Agree"];
    var scale_10 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


    var likert_beaq = {
        type: 'survey-likert',
        questions: [
            {prompt: '<b>Please indicate the extent to which you agree or disagree with each of the following statements</b>', name: 'inst', labels:NaN, required: false},
            {prompt: "The key to a good life is never feeling any pain", name: 'Q1', labels: scale, required: true}, 
            {prompt: "I am quick to leave any situation that makes me feel uneasy", name: 'Q2', labels: scale, required: true},
            {prompt: "When unpleasant memories come to me, I try to put them out of my mind", name: 'Q3', labels: scale, required: true},
            {prompt: "I feel disconnected from my emotions", name: 'Q4', labels: scale, required: true},
            {prompt: "I will not do something until I absolutely have to", name: 'Q5', labels: scale, required: true},
            {prompt: "Fear or anxiety will not stop me from doing something important", name: 'Q6', labels: scale, required: true},
            {prompt: "I would give up a lot not to feel bad", name: 'Q7', labels: scale, required: true},
            {prompt: "I rarely do something if there is a chance that it will upset me", name: 'Q8', labels: scale, required: true},
            {prompt: "It is hard for me to know what I am feeling", name: 'Q9', labels: scale, required: true},
            {prompt: "I try to put off unpleasant tasks for as long as possible", name: 'Q10', labels: scale, required: true},
            {prompt: "I go out of my way to avoid uncomfortable situations", name: 'Q11', labels: scale, required: true},
            {prompt: "One of my big goals is to be free from painful emotions", name: 'Q12', labels: scale, required: true},
            {prompt: "I work hard to keep out upsetting feelings.", name: 'Q13', labels: scale, required: true},
            {prompt: "If I have any doubts about doing something, I just won’t do it", name: 'Q14', labels: scale, required: true},
            {prompt: "Pain always leads to suffering", name: 'Q15', labels: scale, required: true},
            {prompt: "<b>On a scale from 1 to 10, how math anxious are you?</b>", name: 'SIMA', labels: scale_10, required: true}
        ],
    };

    function saveData(name, data){
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'save_data.php'); // 'write_data.php' is the path to the php file described above.
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({filename: name, filedata: data}));
    }

    jsPsych.init({
        timeline: [likert_beaq,],
        on_finish: function(){ saveData(ref + '_BEAQ', jsPsych.data.get().csv()); }
    });


</script>

