import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
declare var System: any;
@Component({
  selector: 'app-neo4j',
  templateUrl: './neo4j.component.html',
  styleUrls: ['./neo4j.component.scss']
})
export class Neo4jComponent implements OnInit {

  constructor() { }

  fuck(){
    document.querySelector('.circle').classList.toggle('open');
  }

  ngOnInit() {
    var items = document.querySelectorAll('.menuItem');
    
    for(var i = 0, l = items.length; i < l; i++) {
      items[i]["style"].left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
      
      items[i]["style"].top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
    }
    
    System.import('../../../assets/lib/neo4jd3').then(neo => {
      var neo4jd3 = new neo.Neo4jD3('#neo4jd3', {
        highlight: [
          {
            class: 'Project',
            property: 'name',
            value: 'neo4jd3'
          }, {
            class: 'User',
            property: 'userId',
            value: 'eisman'
          }
        ],
        icons: {
          //                        'Address': 'home',
          'Api': 'gear',
          //                        'BirthDate': 'birthday-cake',
          'Cookie': 'paw',
          //                        'CreditCard': 'credit-card',
          //                        'Device': 'laptop',
          'Email': 'at',
          'Git': 'git',
          'Github': 'github',
          'Google': 'google',
          //                        'icons': 'font-awesome',
          'Ip': 'map-marker',
          'Issues': 'exclamation-circle',
          'Language': 'language',
          'Options': 'sliders',
          'Password': 'lock',
          'Phone': 'phone',
          'Project': 'folder-open',
          'SecurityChallengeAnswer': 'commenting',
          'User': 'user',
          'zoomFit': 'arrows-alt',
          'zoomIn': 'search-plus',
          'zoomOut': 'search-minus'
        },
        images: {
          'Address': '../../../assets/img/twemoji/1f3e0.svg',
          //                        'Api': 'img/twemoji/1f527.svg',
          'BirthDate': '../../../assets/img/twemoji/1f382.svg',
          'Cookie': '../../../assets/img/twemoji/1f36a.svg',
          'CreditCard': '../../../assets/img/twemoji/1f4b3.svg',
          'Device': '../../../assets/img/twemoji/1f4bb.svg',
          'Email': '../../../assets/img/twemoji/2709.svg',
          'Git': '../../../assets/img/twemoji/1f5c3.svg',
          'Github': '../../../assets/img/twemoji/1f5c4.svg',
          'icons': '../../../assets/img/twemoji/1f38f.svg',
          'Ip': '../../../assets/img/twemoji/1f4cd.svg',
          'Issues': '../../../assets/img/twemoji/1f4a9.svg',
          'Language': '../../../assets/img/twemoji/1f1f1-1f1f7.svg',
          'Options': '../../../assets/img/twemoji/2699.svg',
          'Password': '../../../assets/img/twemoji/1f511.svg',
          //                        'Phone': 'img/twemoji/1f4de.svg',
          'Project': '../../../assets/img/twemoji/2198.svg',
          'Project|name|neo4jd3': '../../../assets/img/twemoji/2196.svg',
          //                        'SecurityChallengeAnswer': 'img/twemoji/1f4ac.svg',
          'User': '../../../assets/img/twemoji/1f600.svg'
          //                        'zoomFit': 'img/twemoji/2194.svg',
          //                        'zoomIn': 'img/twemoji/1f50d.svg',
          //                        'zoomOut': 'img/twemoji/1f50e.svg'
        },
        minCollision: 60,
        neo4jDataUrl: '../../../assets/json/neo4jData.json',
        nodeRadius: 25,
        onNodeDoubleClick: function (node) {
          /* switch (node.id) {
            case '25':
              // Google
              window.open(node.properties.url, '_blank');
              break;
            default:
              var maxNodes = 5,
                data = neo4jd3.randomD3Data(node, maxNodes);
              neo4jd3.updateWithD3Data(data);
              break;
          } */
          var items = document.querySelectorAll('.menuItem');

          for (var i = 0, l = items.length; i < l; i++) {
            items[i]["style"].left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

            items[i]["style"].top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
          }
          console.log(document.querySelector('.nodecircle').classList);
          document.querySelector('.nodecircle').classList.toggle('open');
          /* node.preventDefault(); document.querySelector('.circle').classList.toggle('open'); */
        },
        onRelationshipDoubleClick: function (relationship) {
          console.log('double click on relationship: ' + JSON.stringify(relationship));
        },
        zoomFit: true
      });
    });
  }
}
