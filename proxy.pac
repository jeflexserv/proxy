function FindProxyForURL(url, host) {  
    if (shExpMatch(host, "*.pkulaw.*"))  
      return "PROXY proxy.pku.edu.cn:8080";  
    else  
      return "DIRECT";  
}  
