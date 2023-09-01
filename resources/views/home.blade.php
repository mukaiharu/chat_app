<x-app-layout>
    <br>
    <div class="chat-container row justify-content-center">
        <div class="chat-area">
            <div class="card">
                <div class="card-header">Comment</div>
                <div class="card-body chat-card">
                    {{-- @foreach($comments as $comment)
                    <div class="media">
                        <div class="media-body comment-body">
                            <div class="row">
                                <span class="comment-body-user">{{ $comment->name }}</span>
                                <span class="comment-body-time">{{ $comment->created_at }}</span>
                            </div>
                            <span class="comment-body-content">{{ $comment->comment }}</span>
                        </div>
                    </div>
                    @endforeach --}}

                    <div id="comment-data"></div>
                </div>
            </div>
        </div>
    </div>


    {{-- <form name="sample_form" method="POST" action="{{route('add')}}"> --}}
    {{-- <form id="commentForm" method="POST" action="{{route('add')}}"> --}}
    <form id="commentForm" method="POST">
        @csrf
        <div class="comment-container row justify-content-center">
            <div class="input-group comment-area">
                <textarea class="form-control" placeholder="input message" aria-label="With textarea" name="comment"></textarea>
                {{-- <button type="button" class="btn btn-outline-primary comment-btn" onclick="document.sample_form.submit()">Submit</button> --}}
                <button type="submit" class="btn btn-outline-primary comment-btn">Submit</button>
            </div>
        </div>
    </form>
</x-app-layout>