$("#commentForm").submit(function(event) {
    event.preventDefault(); // フォームのデフォルト送信をキャンセル
    // Ajaxリクエストを実行
    $.ajax({
        // CSRF処理
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        
        url:"add",
        method: "POST",
        data: $(this).serialize(), // フォームデータをシリアライズして送信
        success: function(response) {
            // 成功時の処理
            // ここで新しいコメントを表示するなどの処理を行う
            get_data(); // コメントの更新
        },
        error: function() {
            // エラー時の処理
            alert("ajaxが失敗しました2");
        }
    });
});

const get_data = () => {
    $.ajax({
        url: "result/ajax/",
        dataType: "json",
        success: data => {
            $("#comment-data")
                .find(".comment-visible")
                .remove();
        
            for (var i = 0; i < data.comments.length; i++) {
                document.getElementsByName('comment')[0].value="";

                const html = `
                            <div class="media comment-visible">
                                <div class="media-body comment-body">
                                    <div class="row">
                                        <span class="comment-body-user" id="name">${data.comments[i].name}</span>
                                        <span class="comment-body-time" id="created_at">${data.comments[i].created_at}</span>
                                    </div>
                                    <span class="comment-body-content" id="comment">${data.comments[i].comment}</span>
                                </div>
                            </div>
                        `;
        
                $("#comment-data").append(html);
            }
        },
        error: () => {
            alert("ajaxが失敗しました");
        }
    });
}

get_data();









// $(document).ready(function() {
//     $("#commentForm").submit(function(event) {
//         event.preventDefault(); // フォームのデフォルト送信をキャンセル
    
//         // Ajaxリクエストを実行
//         $.ajax({
//             // CSRF処理
//             headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},

//             //url:"{{ route('add') }}", // フォームのaction属性を使用
//             url:"add",
//             method: "POST",
//             data: $(this).serialize(), // フォームデータをシリアライズして送信
//             // dataType: "json",
//             success: function(response) {
//                 // 成功時の処理
//                 // ここで新しいコメントを表示するなどの処理を行う
//                 get_data(); // コメントの更新
//             },
//             error: function() {
//                 // エラー時の処理
//                 alert("ajaxが失敗しました2");
//             }
//         });
//     });

//     // 以下に get_data() 関数の定義があることを確認
//     const get_data = () => {
//         $.ajax({
//             url: "result/ajax",
//             dataType: "json",
//             success: function(data) {
//                 $("#comment-data")
//                 .find(".comment-visible")
//                 .remove();

//                 for (var i = 0; i < data.comments.length; i++) {
//                     const html = `
//                         <div class="media comment-visible">
//                             <div class="media-body comment-body">
//                                 <div class="row">
//                                     <span class="comment-body-user" id="name">${data.comments[i].name}</span>
//                                     <span class="comment-body-time" id="created_at">${data.comments[i].created_at}</span>
//                                 </div>
//                                 <span class="comment-body-content" id="comment">${data.comments[i].comment}</span>
//                             </div>
//                         </div>
//                     `;

//                     $("#comment-data").append(html);
//                 }
//             },
//             error: function() {
//                 alert("ajaxが失敗しました");
//             }
//         });
//     }

//     // ここで get_data() 関数を呼び出して初期データを取得
//     get_data();
// });






// $(document).ready(function() {
//     // 以下に get_data() 関数の定義があることを確認
//     const get_data = () => {
//         $.ajax({
//             url: "result/ajax",
//             dataType: "json",
//             success: function(data) {
//                 $("#comment-data")
//                 .find(".comment-visible")
//                 .remove();

//                 for (var i = 0; i < data.comments.length; i++) {
//                     const html = `
//                         <div class="media comment-visible">
//                             <div class="media-body comment-body">
//                                 <div class="row">
//                                     <span class="comment-body-user" id="name">${data.comments[i].name}</span>
//                                     <span class="comment-body-time" id="created_at">${data.comments[i].created_at}</span>
//                                 </div>
//                                 <span class="comment-body-content" id="comment">${data.comments[i].comment}</span>
//                             </div>
//                         </div>
//                     `;

//                     $("#comment-data").append(html);
//                 }
//             },
//             error: function() {
//                 alert("ajaxが失敗しました");
//             }
//         });
//     }


//     // ここで get_data() 関数を呼び出して初期データを取得
//     get_data();


//     $("#commentForm").submit(function(event) {
//         event.preventDefault(); // フォームのデフォルト送信をキャンセル
        
//         get_data();
//     });
// });