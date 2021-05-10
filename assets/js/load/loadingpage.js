var loading = (container) => {
    var data = `
        <div class="preloader-wrapper big active" style="margin: 50% 0 0 50%">
            <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="gap-patch">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
    `;
    $("#"+container).append(data)
}

var stopping = (container) => {
    $("#"+container).empty()
}