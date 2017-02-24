var express = require('express');
const {openCorpus,search,excerpt}=require("ksana-corpus-lib");
const dbid="taisho";
var router = express.Router();

const listSearchResult=function(sr,cor){
    return sr.map(function(item){
        //phrasehits contains hits of each phrase
        const hits=item.phrasehits.map(function(ph){
            return cor.stringify(ph.hits);
        })
        return {text:item.text ,hits: hits,title:cor.getTitle(hits[0])};
    })
}

router.get('/meta', function(req, res, next) {
    openCorpus(dbid,function(err,cor){
        if (err) {
            res.json(err);
        } else {
            res.json(cor.meta);
        }
    });
});
router.get('/search', function(req, res, next) {
    var searchtext=req.query.searchtext;
    openCorpus(dbid,function(err,cor){
        search(cor,searchtext,function(result){
            const tpos=result.matches;  //token position of all matches
            const phrasepostings=result.phrasepostings; // for highlighting
            excerpt.fetchExcerpts(cor,{tpos,phrasepostings},function(ex){
                const searchResult=listSearchResult(ex,cor);
                res.json(searchResult);
            })
        })
    })
});

router.post('/getText', function(req, res, next) {
    var hits = req.body.hits;
    var matches= /(\d{1,2}p\d{1,4})(\w{1})(\d{2})(\d{2})/g.exec(hits)
   // console.log(matches);
    openCorpus(dbid,function(err,cor){
        cor.getText(hits.match(/\d{1,2}p\d{1,4}/g)+matches[2]+"0100-"+matches[3]+"3200",function(out){
            out[parseInt(matches[3])-1]="<mark>"+out[parseInt(matches[3])-1]+"</mark>";
            res.send("<strong>"+cor.getTitle(hits)+"</strong><br>"+out.join("<br>"));
        });
    });
});

module.exports = router;