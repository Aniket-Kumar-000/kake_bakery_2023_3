class infinite_reload_alternatively(aetest.Testcase):
    @aetest.test
    def reload_alternatively(self,testscript,testbed):
        r = 2
        while True:
            if r % 2 == 0:
                buglib.reload(uut1)
                uut1.execute("show interface brief")
                uut1.execute("show mac address table dynamic")
                uut1.execute("show interface counters brief")
                
                
            elif r % 2 != 0:    
                buglib.reload(uut2)
                uut2.execute("show interface brief")
                uut2.execute("show mac address table dynamic")
                uut2.execute("show interface counters brief")
        r += 1
