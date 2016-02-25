

		/* @begin event button-click to get artists from spotify */
		var $button = $("form button");
		var $artistsSelect = $("#artists");
		var $albumsSelect = $("#albums");
			/* tracksContainerID  select the right <Ul> in the web page */
		var $TracksContainer = $("#tracksContainerID");

		$button.on("click", function(e) {

			e.preventDefault();

			var $input = $("form input");
			var sArtistToFind = $input.val();
			var sGetArtistsUrl = "https://api.spotify.com/v1/search?type=artist&query=" + sArtistToFind

			$.ajax({
				url: sGetArtistsUrl,
				dataType: "json",
				success: function( oDataReceived ) {

					var aArtists = oDataReceived.artists.items;
					var oCurrentArtist;
					var sOptions = "<option>Please select your artist...</option>";

					$.each( aArtists, function( index, value ) {
						oCurrentArtist = value;
						sOptions += "<option value='" + oCurrentArtist.id + "'>" + oCurrentArtist.name + "</option>"
					});

					$artistsSelect.html(sOptions);

				}
			})
		})
		/* @end event button-click to get artists from spotify  */




		/* @begin event get albums when artist is selected */
		$artistsSelect.on("change", function(e) {

			var $optionSelected = $(this).find("option:selected");
			var sIdArtist = $optionSelected.val();

			var sGetAlbumsUrl = "https://api.spotify.com/v1/artists/" + sIdArtist + "/albums";

			$.ajax({
				url: sGetAlbumsUrl,
				dataType: "json",
				success: function( oDataReceived ) {

					var aAlbums = oDataReceived.items;
					var oCurrentAlbum;
					var sOptions = "<option>Please select your album...</option>";

					$.each( aAlbums, function( index, value ) {
						oCurrentAlbum = value;
						sOptions += "<option value='" + oCurrentAlbum.id + "'>" + oCurrentAlbum.name + "</option>"
					})
					$albumsSelect.html(sOptions);
				}

			});

		});
		/* @end event get albums when artist is selected */


		/* @begin event get tracks when album is selected */
		$albumsSelect.on("change", function(e) {

			var $optionSelected = $(this).find("option:selected");
			var sIdAlbum = $optionSelected.val();

			var sGetTracksUrl = "https://api.spotify.com/v1/albums/" + sIdAlbum + "/tracks";

			$.ajax({
				url: sGetTracksUrl,
				dataType: "json",
				success: function( oDataReceived ) {
						var aTracks = oDataReceived.items;
						var oCurrentTrack;
						var sItems = "";

						$.each( aTracks, function( index, value ) {
							oCurrentTrack = value;
							console.log (oCurrentTrack);
							sItems += "<li><a target='_blank' href='" + oCurrentTrack.preview_url+ "'>"+ oCurrentTrack.name + "</a></li>"
						});

						$TracksContainer.html(sItems)

				}
			});

		});

		/* @end event get tracks when album is selected */

