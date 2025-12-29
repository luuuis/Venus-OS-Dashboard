export function cssDataDark (user) {
  var css = `
    
        ha-card {
            --box-background-color: #1f2a3c;  	/* Couleur de fond de la box */
            --box-shadow-color: #38619b;      	/* Couleur de l'ombre de la box */
            --anchor-color: #38619b;            /* Couleur du point d'accroche */
	    --line-color: #4369a2; 				/* Couleur de la ligne */
        }
        
        .db-container {
            position: relative;
            width: 100%; /* Prend toute la largeur disponible */
            padding-bottom: 60%; /* Définit la hauteur à 60% de la largeur */
            overflow: hidden; /* Cache tout dépassement éventuel */
        }
        
  
        .venus-dashboard {
            display: flex;
            width: 100%;
            height: 100%;
            padding: 10px 10px 5px 10px;
            border-radius: 10px;
            /*border: 1px solid #ccc;*/
            position: absolute;
            box-sizing: border-box;
            background-color: #111111;
            gap: 8%;
        }

        .venus-column {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .venus-column-1 {
            width: 25%;
        }

        .venus-column-2 {
            width: 34%;
        }

        .venus-column-3 {
            width: 25%;
        }

        .venus-box {
            background-color: var(--box-background-color);  /* Utilisation de la variable pour la couleur de fond */
            color: white;
            /*font-weight: bold;*/
            border-radius: 5px;
            box-shadow: 0px 0px 1px 2px var(--box-shadow-color);  /* Utilisation de la variable pour la couleur de l'ombre */
            height: 100%;
            max-height: 45%;
            margin: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            padding: 3% 5%;
        }

        /* Point d'accroche */
        .venus-anchor {
            position: absolute;
            background-color: var(--anchor-color); /* Utilisation de la variable pour la couleur du point d'accroche */
            border-radius: 50%; /* Rond */
			box-shadow: 0px 0px 1px 1px var(--anchor-color);
        }

        /* Position des points pour la colonne 2 */
        .venus-box .venus-anchor-L {
			width: 3px;
            height: 5px;
            left: -4px;
            top: 50%;
            transform: translateY(-50%);
			border-radius: 3px 0 0 3px;
        }

        .venus-box .venus-anchor-R {
			width: 3px;
            height: 5px;
            right: -4px;
            top: 50%;
            transform: translateY(-50%);
			border-radius: 0 3px 3px 0;
        }

		.venus-box .venus-anchor-T {
			width: 5px;
            height: 3px;
            top: -4px;
            left: 50%;
            transform: translateX(-50%);
			border-radius: 3px 3px 0 0;
        }

		.venus-box .venus-anchor-B {
			width: 5px;
            height: 3px;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
			border-radius: 0 0 3px 3px;
        }

        .venus-line {
            position: absolute;
			left: 0px;
			top: 0px;
        }

		.venus-line g path{
			stroke: var(--line-color);
			box-shadow: 0px 0px 1px 1px var(--line-color);
        }

		.venus-ball {
			z-index: 1000;
		}


        .venus-content {
            position: relative;
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			/*gap: calc(2.1vw - 15px);*/
			gap: 2%;
		}
		
		.venus-box-header {
			display: flex;
			align-items: center;
			width: 100%;
			height: 15%;
			gap: 3%;
			z-index: 2;
		}

		.venus-box-icon {
			--mdc-icon-size: 1.2em;
			line-height: 1.2em;
			z-index: 2;
		}

		.venus-box-title {
		    display: flex;
			align-items: center;
			width: 100%;
			font-size: calc(var(--card-width) * 0.1);;
			/*line-height: 1.8em;*/
			z-index: 2;
		}

		.venus-header-entity {
			/*position: absolute;*/
			display: flex;
			align-items: center;
			font-size: 1.1em;
			line-height: 1.1em;
			gap: 3%;
			z-index: 2;
		}

		.venus-box-sensor1 {
			display: flex;
			align-items: center;
			width: 100%;
			font-size: 1em;
			line-height: 1em;
			z-index: 2;
			gap: 3%
		}

		.venus-box-sensor2 {
			display: flex;
			align-items: center;
			width: 100%;
			font-size: 0.8em;
			line-height: 0.8em;
			z-index: 2;
			gap: 3%
		}

		.venus-box-unit {
			color: #A1A8B0;
			z-index: 2;
		}

		.venus-graph {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 15%;
			width: 100%;
			height: 30%;
			opacity: 1;
			z-index: 2;
			/*border-radius: 0 0 5px 5px;*/
		}

		.venus-gauge {
			position: absolute;
			left: 0px;
			bottom: 0px;
			width: 100%;
			background: #4A7BBF;
			opacity: 0.8;
			z-index: 1;
			border-radius: 0 0 5px 5px;
		}

		.venus-box-footer {
			position: absolute;
			display: flex;
			bottom: 2px;
			width: 100%;
			font-size: 1em;
			align-items: center;
			gap: 3%;
			z-index: 1;
		}

		.venus-footer-cell {
			display: flex;
			line-height: 1em;
			align-items: center;
			justify-content: center;
			width: 30%;
			gap: 5%;
		}
		
  `
  return css

}