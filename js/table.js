(function($) {
  $.fn.tableChange = function(tableCheck) {
    var oTable = tableCheck;
    var oTbody = oTable.tBodies[0];
    var oBtn = $('th');
    var arr = []; //用来存放每一个tr
    var isAsc = false; //用来判断升序，还是降序
    oBtn.click(function() {
      for (var i = 0; i < oTbody.rows.length; i++) {
        arr[i] = oTbody.rows[i];
      }
      //数组根据cells[0].innerHTML来排序
      arr.sort(function(td1, td2) {
        if (isAsc) {
          return parseInt(td1.cells[0].innerHTML) - parseInt(td2.cells[0].innerHTML);
        } else {
          return parseInt(td2.cells[0].innerHTML) - parseInt(td1.cells[0].innerHTML);
        }
      });
      //把排序后的tr 重新插入tbody
      for (var j = 0; j < arr.length; j++) {
        oTbody.appendChild(arr[j]);
      }
      //判断升序，降序
      isAsc = !isAsc;
    });
    //编辑
    $("input:first-child").click(function() {
      str = $(this).val() == "编辑" ? "确认" : "编辑";
      $(this).val(str);
      $(this).parent().siblings(".input").each(function() {
        obj_text = $(this).find("input:text");
        if (!obj_text.length) {
          $(this).html("<input type='text' value='" + $(this).text() + "'>");
        } else {
          $(this).html(obj_text.val());
        }

      });
      $(this).parent().siblings(".select").each(function() {
        obj_select = $(this).find("option:selected");
        if (!obj_select.length) {
          $(this).html('<select><option value="0">学生</option><option value="1">无业游民</option><option value="2">保险</option></select>');
        } else {
          $(this).html(obj_select.text());
        }
      });
    });
    //删除
    $("input:last-child").click(function() {
      $(this).parent().parent().remove();
    });
  }
})(jQuery)