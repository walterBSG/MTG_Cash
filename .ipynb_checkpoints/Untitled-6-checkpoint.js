<script language="javascript" runat="server"> 
	Platform.Load("core","1");
	var auth = HTTP.Post('https://mc0nxmpkt55fv-q9d3w0r7bcf921.auth.marketingcloudapis.com/v2/token/', 'application/json', '{"grant_type": "client_credentials","client_id":"1tiuo8qxt5993c8d2fx9310x","client_secret":"gaEvUTUcRanUPOOGvLEU0PZm","account_id": "100021575"}');
	var authobj = Platform.Function.ParseJSON(auth.Response[0]);
	if (authobj.access_token) {
		var del = HTTP.Post(authobj.rest_instance_url+'contacts/v1/contacts/actions/delete?type=listReference', 'application/json', '{"deleteOperationType":"ContactAndAttributes","targetList":{"listKey":"DFD39723-DAC9-433A-8CC9-FB796FC839CB","listType":{"listTypeID":3}},"deleteListWhenCompleted":false,"deleteListContentsWhenCompleted":true}', ["Authorization"], ["Bearer " + authobj.access_token]);
		var delobj = Platform.Function.ParseJSON(del.Response[0]);
		if (delobj.hasErrors == false) {
			var de = DataExtension.Init("DFD39723-DAC9-433A-8CC9-FB796FC839CB");
			de.Rows.Add({ResponseDateTime:delobj.responseDateTime,RowCount:delobj.targetListInformation.rowCount});
		}
	};
</script>