$(document).ready(function () {
    var Enrollment = Backbone.Model.extend({

    });

    var Beneficiary = Backbone.Model.extend({

    });

    var Contribution = Backbone.Model.extend({

    });


    ContributionUpdateView = Backbone.View.extend({
        //template: _.template($("#form1-template").html()),
        /*        tag: 'li',
         className: 'album',*/

        initialize:function () {
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.template = _.template($("#contribution-update-template").html());
        },

        render:function () {
            var content = this.template(this.model.toJSON());
            $(this.el).html(content);
            Backbone.ModelBinding.bind(this);
            return this;
        }
    });

    BeneficiaryUpdateView = Backbone.View.extend({
        //template: _.template($("#form1-template").html()),
        /*        tag: 'li',
         className: 'album',*/

        initialize:function () {
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.template = _.template($("#beneficiary-update-template").html());
        },

        render:function () {
            var content = this.template(this.model.toJSON());
            $(this.el).html(content);
            Backbone.ModelBinding.bind(this);
            return this;
        }
    });

    BeneficiaryListView = Backbone.View.extend({
        //template: _.template($("#form1-template").html()),
        /*        tag: 'li',
         className: 'album',*/

        initialize:function () {
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.template = _.template($("#beneficiary-list-template").html());
        },

        render:function () {
            var content = this.template(this.model.toJSON());
            $(this.el).html(content);
            Backbone.ModelBinding.bind(this);
            return this;
        }
    });

    var rec1 = {
        "firstName":"Homer",
        "middleName":"J.",
        "lastName":"Simpson",
        "email":"homer@fox.com"
    };

    var contribution_rec = {
        "investModel":["model3", "model4"]
    };

    var newBeneficiary = new Beneficiary();
    newBeneficiary.set(rec1);
    console.log(newBeneficiary);
    console.log(newBeneficiary.toJSON());


    var newContribution = new Contribution();
    newContribution.set(contribution_rec);

    var beneficiaryListView = new BeneficiaryListView({model:newBeneficiary});
    $("#beneficiary-list-container").append(beneficiaryListView.render().el);

    var beneficiaryUpdateView = new BeneficiaryUpdateView({model:newBeneficiary});
    $("#beneficiary-update-container").append(beneficiaryUpdateView.render().el);


    var contributionUpdateView = new ContributionUpdateView({model:newContribution});
    $("#contribution-container").append(contributionUpdateView.render().el);

    $("#showJson").click(function () {
        console.log(JSON.stringify(newContribution));
    });

    $("#saveBeneficiary").live('click', function () {
        var myData1 = JSON.stringify(newBeneficiary);
    });


    $("#addBeneficiary").click(function () {
        //alert('a');
        $('#modal-from-dom').modal({
            keyboard:true,
            backdrop:false

        });
        $('#modal-from-dom').modal('show');
    });


    var container = document.getElementById('pages-container');

    var swipe = new SwipePaginate(container);

    /*    var enrollmentEditView = new EnrollmentEditView({model:newEnrollment});
     $("#editform").append(enrollmentEditView.render().el);*/


    /*        $('#addRec').click(function () {
     console.log('add');
     //newEnrollment.set({firstName:'Bart'});
     //console.log("myModel : "+ JSON.stringify(newEnrollment));
     WebViewJavascriptBridge.sendMessage(JSON.stringify(newEnrollment));
     });*/


});
