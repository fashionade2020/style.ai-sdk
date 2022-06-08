var FASHIONADE = (function ($w) {
    var $ = function (query) {
        return document.querySelector(query)
    }
    var $$ = function (query) {
        return document.querySelectorAll(query)
    }
    var get = function (url, cb) {
        var xmlhttp
        xmlhttp = new XMLHttpRequest()
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                cb(JSON.parse(xmlhttp.responseText))
            }
        }
        xmlhttp.open('GET', url, true)
        xmlhttp.send()
    }

    var config = {
        APIs : {
            models : 'https://styleapi.fashionade.ai/api/vton/models',
            items : 'https://styleapi.fashionade.ai/api/vton/items?&page=0&size=100',
            composite : 'https://styleapi.fashionade.ai/api/vton'
        },
        apiKey : 'b1e98085133049cb95f4b3d397ce2ba822a4c7cce2944206add609ebd90fec71',
        // proxy : 'https://corsanywhere.herokuapp.com/',  //use temp proxy server
        proxy : '',
    }

    var html =  '    <div class="dimmed"></div>\n' +
                '    <div class="wrap">\n' +
                '        <div class="header">\n' +
                '            <h4>VIRTUAL FITTING</h4>\n' +
                '            <button class="btn-close" onClick="FASHIONADE.closeFashionadeVirtualFitting()">닫기</button>\n' +
                '        </div>\n' +
                '        <div class="horizon-wrap">\n' +
                '            <div class="models">\n' +
                '                <div class="models-content" id="modelContent">\n' +
                '                </div>\n' +
                '                <button class="btn-prev" onClick="FASHIONADE.prevModel()"><</button>\n' +
                '                <button class="btn-next" onClick="FASHIONADE.nextModel()">></button>\n' +
                '            </div>\n' +
                '            <div class="change-model">\n' +
                '                <div class="size">\n' +
                '                    Size <span id="virtual-model-size">M</span><span class="bar">|</span><span id="virtual-model-tall">170</span>cm\n' +
                '                </div>\n' +
                '                <button class="btn-change-model" onClick="FASHIONADE.changeModel()">CHANGE MODEL</button>\n' +
                '                <button class="btn-choose-model" onClick="FASHIONADE.chooseModel()">CHOOSE MODEL</button>\n' +
                '            </div>\n' +
                '            <div class="fitted-items">\n' +
                '                <ul>\n' +
                '                    <li class="default">\n' +
                '                        <img src="http://image.sivillage.com/upload/C00001/goods/org/099/200121000552099.jpg?RS=600&SP=1" width="75" height="75" alt="" />\n' +
                '                    </li>\n' +
                '                    <li id="addFittedItem" style="width:0">\n' +
                '                    </li>\n' +
                '                    <li class="btn-add" onClick="FASHIONADE.showCategories()">추가</li>\n' +
                '                </ul>\n' +
                '            </div>\n' +
                '            <div class="prepared-items">\n' +
                '                <h4 id="prepared-category-title"></h4>\n' +
                '                <ul></ul>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '    <div class="layer-category-list">\n' +
                '        <h4>Add Item</h4>\n' +
                '        <ul>\n' +
                '            <li onClick="FASHIONADE.getTopCategory()">Top</li>\n' +
                '            <li onClick="FASHIONADE.getBottomCategory()">Bottom</li>\n' +
                '        </ul>\n' +
                '        <button class="btn-close" onClick="FASHIONADE.hideCategories()">닫기</button>\n' +
                '    </div>';

    var productId = null;
    var fittedModels = [];
    var fittedItems = {
        TOPS : null,
        BOTTOMS : null
    };
    var chooseItems = {
        TOPS : [],
        BOTTOMS : []
    };

    var choosedFiitedModelIndex = 0;
    var init = function (_config, _ext) {console.log(1);
        // setTimeout(function() {
        //     // reset markup
        //     if($("#fashionade-virtual-fitting") !== null) {
        //         $("#fashionade-virtual-fitting").innerHTML = "";
        //     }
        //
        //     productId = document.querySelectorAll(".product-desc-value")[2].innerText;
        //     // productId = "1912232960"; //temp value
        //     get(config.proxy + config.APIs.models + '?apiKey=' + config.apiKey + '&productId=' + productId, function (d) {
        //         if(d.length > 0) {
        //
        //             // add markup and button
        //             var el = document.createElement("div");
        //             el.id = "fashionade-virtual-fitting";
        //             el.innerHTML = html;
        //             document.body.appendChild(el);
        //
        //             if(document.querySelector("#btn-fashionade-virtual-fitting") === null) {
        //                 var el = document.createElement("button");
        //                 el.id = "btn-fashionade-virtual-fitting";
        //                 el.onclick = function() {
        //                     document.querySelector("#fashionade-virtual-fitting").style.display = "block";
        //                 };
        //                 document.querySelector(".item-detail-img-container").appendChild(el);
        //             }
        //
        //             // add models
        //             fittedModels = d;
        //             $("#modelContent").innerHTML = "";
        //             fittedModels.map(function(model) {
        //                 var el = document.createElement("div");
        //                 el.className = "slide";
        //                 el.style = "background-image:url(" + model.imageUrl + ")";
        //                 $("#modelContent").appendChild(el);
        //             });
        //             $("#virtual-model-size").innerHTML = fittedModels[choosedFiitedModelIndex].size || "-";
        //             $("#virtual-model-tall").innerHTML = fittedModels[choosedFiitedModelIndex].tall || "-";
        //
        //             // set carousel
        //             carousel = document.querySelector('#fashionade-virtual-fitting .models');
        //             carouselContent = document.querySelector('#fashionade-virtual-fitting .models-content');
        //             slides = document.querySelectorAll('#fashionade-virtual-fitting .slide');
        //             arrayOfSlides = Array.prototype.slice.call(slides);
        //             getCarouselSize();
        //             moveSlidesRight();
        //
        //             // fitted default item
        //             $("#fashionade-virtual-fitting .fitted-items .default img").src = $(".item-detail-img-container img").src;
        //
        //             // get items(get all categories for matching productId)
        //             get(config.proxy + config.APIs.items + '&apiKey=' + config.apiKey + '&productId=' + productId + '&category=TOP', function (d) {
        //                 d.map(function(item) {
        //                     chooseItems.TOPS.push(item);
        //                     if(productId === item.productId) {
        //                         fittedItems.TOPS = item.itemId;
        //                     }
        //                 });
        //
        //                 // show choose items
        //                 if(fittedItems.TOPS !== null) {
        //                     showItems("BOTTOM");
        //                 } else {
        //                     showItems("TOP");
        //                 }
        //             });
        //             get(config.proxy + config.APIs.items + '&apiKey=' + config.apiKey + '&productId=' + productId + '&category=BOTTOM', function (d) {
        //                 d.map(function(item) {
        //                     chooseItems.BOTTOMS.push(item);
        //                     if(productId === item.productId) {
        //                         fittedItems.BOTTOMS = item.itemId;
        //                     }
        //                 });
        //
        //                 // show choose items
        //                 if(fittedItems.TOPS !== null) {
        //                     showItems("BOTTOM");
        //                 } else {
        //                     showItems("TOP");
        //                 }
        //
        //                 // console.log(fittedItems, chooseItems);
        //             });
        //         }
        //     });
        // }, 3000);
    }

    var carousel = document.querySelector('#fashionade-virtual-fitting .models');
    var carouselContent = document.querySelector('#fashionade-virtual-fitting .models-content');
    var slides = document.querySelectorAll('#fashionade-virtual-fitting .slide');
    var arrayOfSlides = Array.prototype.slice.call(slides);
    var lengthOfSlide;
    var moving = true;

    function addClone() {
        var lastSlide = carouselContent.lastElementChild.cloneNode(true);
        lastSlide.style.left = (-lengthOfSlide) + "px";
        carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
    }

    function removeClone() {
        var firstSlide = carouselContent.firstElementChild;
        firstSlide.parentNode.removeChild(firstSlide);
    }

    function moveSlidesRight() {
        var slides = document.querySelectorAll('#fashionade-virtual-fitting .slide');
        var slidesArray = Array.prototype.slice.call(slides);
        var width = 0;

        slidesArray.forEach(function(el, i){
            el.style.left = width + "px";
            width += lengthOfSlide;
        });
        addClone();
    }

    function moveSlidesLeft() {
        var slides = document.querySelectorAll('#fashionade-virtual-fitting .slide');
        var slidesArray = Array.prototype.slice.call(slides);
        slidesArray = slidesArray.reverse();
        var maxWidth = (slidesArray.length - 1) * lengthOfSlide;

        slidesArray.forEach(function(el, i){
            maxWidth -= lengthOfSlide;
            el.style.left = maxWidth + "px";
        });
    }

    function getCarouselSize() {
        var slides = document.querySelectorAll('#fashionade-virtual-fitting .slide');
        var slidesArray = Array.prototype.slice.call(slides);
        lengthOfSlide = carousel.offsetWidth;
        var initialWidth = -lengthOfSlide;
        slidesArray.forEach(function(el) {
            el.style.width = lengthOfSlide + "px";
            el.style.left = initialWidth + "px";
            initialWidth += lengthOfSlide;
        });
    }

    function movePrev() {
        if ( moving ) {
            moving = false;
            var lastSlide = carouselContent.lastElementChild;
            lastSlide.parentNode.removeChild(lastSlide);
            carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
            removeClone();
            var firstSlide = carouselContent.firstElementChild;
            firstSlide.addEventListener('transitionend', activateAgain);
            moveSlidesRight();

            if(choosedFiitedModelIndex > 0) {
                choosedFiitedModelIndex--;
            } else {
                choosedFiitedModelIndex = fittedModels.length - 1;
            }

            $("#virtual-model-size").innerHTML = fittedModels[choosedFiitedModelIndex].size || "-";
            $("#virtual-model-tall").innerHTML = fittedModels[choosedFiitedModelIndex].tall || "-";
        }
    }

    function activateAgain() {
        var firstSlide = carouselContent.firstElementChild;
        moving = true;
        firstSlide.removeEventListener('transitionend', activateAgain);
    }

    function moveNext() {
        if ( moving ) {
            moving = false;
            removeClone();
            var firstSlide = carouselContent.firstElementChild;
            firstSlide.addEventListener('transitionend', replaceToEnd);
            moveSlidesLeft();

            if(choosedFiitedModelIndex < fittedModels.length - 1) {
                choosedFiitedModelIndex++;
            } else {
                choosedFiitedModelIndex = 0;
            }

            $("#virtual-model-size").innerHTML = fittedModels[choosedFiitedModelIndex].size || "-";
            $("#virtual-model-tall").innerHTML = fittedModels[choosedFiitedModelIndex].tall || "-";
        }
    }

    function replaceToEnd() {
        var firstSlide = carouselContent.firstElementChild;
        firstSlide.parentNode.removeChild(firstSlide);
        carouselContent.appendChild(firstSlide);
        firstSlide.style.left = ( (arrayOfSlides.length -1) * lengthOfSlide) + "px";
        addClone();
        moving = true;
        firstSlide.removeEventListener('transitionend', replaceToEnd);
    }

    function showItems(category) {
        if(category === "TOP") {
            $("#prepared-category-title").innerHTML = "Tops";
            for(var _ = "", i = 0, l = chooseItems.TOPS.length; i < l; i++) {
                _ += '<li onClick="FASHIONADE.addItem(\'TOP\', \'' + chooseItems.TOPS[i].itemId + '\', \'' + chooseItems.TOPS[i].imageUrl + '\')">\n' +
                    '            <div class="thumb" style="background-image:url(' + chooseItems.TOPS[i].imageUrl + ')"></div>\n' +
                    '            <p class="desc">' + chooseItems.TOPS[i].name + '</p>\n' +
                    '            </li>'
            }
            $(".prepared-items ul").innerHTML = _;
        } else {
            $("#prepared-category-title").innerHTML = "Bottoms";
            for(var _ = "", i = 0, l = chooseItems.BOTTOMS.length; i < l; i++) {
                _ += '<li onClick="FASHIONADE.addItem(\'BOTTOM\', \'' + chooseItems.BOTTOMS[i].itemId + '\', \'' + chooseItems.BOTTOMS[i].imageUrl + '\')">\n' +
                    '            <div class="thumb" style="background-image:url(' + chooseItems.BOTTOMS[i].imageUrl + ')"></div>\n' +
                    '            <p class="desc">' + chooseItems.BOTTOMS[i].name + '</p>\n' +
                    '            </li>'
            }
            $(".prepared-items ul").innerHTML = _;
        }
    }

    function addFittedItem(category, itemId, imageUrl) {
        if(category === "TOP") {
            fittedItems.TOPS = itemId;
        } else {
            fittedItems.BOTTOMS = itemId;
        }

        // call composite image
        get(config.proxy + config.APIs.composite + '?modelId=' + fittedModels[choosedFiitedModelIndex].id + '&topId=' + fittedItems.TOPS + '&bottomId=' + fittedItems.BOTTOMS, function (d) {
            fittedModels[choosedFiitedModelIndex].fittedImageUrl = d.imageUrl;
            console.log(d.imageUrl);
            $$('#fashionade-virtual-fitting .slide')[1].style.backgroundImage = 'url("' + d.imageUrl + '")';
        });

        $("#addFittedItem").innerHTML = '<img src="' + imageUrl + '" width="75" height="75" alt="" /><button class="btn-delete" onClick="FASHIONADE.removeItem(\'' + category + '\')">삭제</button>';
        $("#addFittedItem").style.width = "75px";
    }

    function removeFittedItem(category) {
        if(category === "TOP") {
            fittedItems.TOPS = null;
        } else {
            fittedItems.BOTTOMS = null;
        }
        // reset default model
        fittedModels[choosedFiitedModelIndex].fittedImageUrl = "";
        $$('#fashionade-virtual-fitting .slide')[1].style.backgroundImage = fittedModels[choosedFiitedModelIndex].imageUrl;

        $("#addFittedItem").innerHTML = "";
        $("#addFittedItem").style.width = "0";
    }

    return {
        init: init,
        openFashionadeVirtualFitting : function() {
            $("#fashionade-virtual-fitting").style.display = "";
        },
        closeFashionadeVirtualFitting : function() {
            $("#fashionade-virtual-fitting").style.display = "none";
        },
        prevModel : function() {
            movePrev();
        },
        nextModel : function() {
            moveNext();
        },
        changeModel : function() {
            $("#fashionade-virtual-fitting .change-model").className = "change-model choosemode";
            $("#fashionade-virtual-fitting .btn-prev").style.display = "block";
            $("#fashionade-virtual-fitting .btn-next").style.display = "block";

        },
        chooseModel : function() {
            $("#fashionade-virtual-fitting .change-model").className = "change-model";
            $("#fashionade-virtual-fitting .btn-prev").style.display = "none";
            $("#fashionade-virtual-fitting .btn-next").style.display = "none";
        },
        showCategories : function() {
            $("#fashionade-virtual-fitting .layer-category-list").style.display = "block";
            $("#fashionade-virtual-fitting .dimmed").style.zIndex = 113;
        },
        hideCategories : function() {
            $("#fashionade-virtual-fitting .layer-category-list").style.display = "none";
            $("#fashionade-virtual-fitting .dimmed").style.zIndex = 111;
        },
        getTopCategory : function() {
            this.hideCategories();
            showItems("TOP");
        },
        getBottomCategory : function() {
            this.hideCategories();
            showItems("BOTTOM");
        },
        addItem : function(category, itemId, imageUrl) {
            addFittedItem(category, itemId, imageUrl);
        },
        removeItem : function(category) {
            removeFittedItem(category);
        }

    }
})(window);
